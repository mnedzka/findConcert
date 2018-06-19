import React, { Component } from 'react';
import moment from 'moment';

import './App.css';

import Headings from './components/headings';
import Form from './components/form';
import Concerts from './components/concerts';
import Error from './components/error';


const endpoint = `https://rest.bandsintown.com/artists/`;
const APIKEY = `?app_id=55f82634df0fb71ebb5560ae732708f6`;

class App extends Component {

  state = {
    startDate: null,
    endDate: null,
    error: false,
    info: [],
  }

  formatDate = (date) => {
    return moment(date._d).format('YYYY-MM-DD');
  }   

  onStartDateChange = (date) => {
    const formattedDate = this.formatDate(date);
    this.setState({
        startDate: formattedDate
    });
  }

  onEndDateChange = (date )=> {
    const formattedDate = this.formatDate(date)
    this.setState({
        endDate: formattedDate
    });
  }

  fetchData = (e) => {
    e.preventDefault();  
    if(this.state.startDate && this.state.endDate) {
      const artist = e.target.elements.artist.value;  
      const startDate = this.state.startDate;
      const endDate = this.state.endDate;
      fetch(`${endpoint}${artist}/events/${APIKEY}&date=${startDate}%2C${endDate}`)
      .then(response => response.json())
      .then(data => {
        const newState = Object.assign({}, this.state);
        newState.info = data.map(item => ( {
          artist: artist,
          concert: item.description ,
          url: item.url,
          city: item.venue.city,
          country: item.venue.country,
          date: item.datetime,
          id: item.id,
        }) )
        newState.display = true;
        newState.error = false; 
        this.setState(newState);
      })
      .catch(err => console.log('parsing failed', err))
    } else {
      const newState = Object.assign({}, this.state);
      newState.display = false;
      newState.error = true;
      this.setState(newState);
    }
  }

  render() {
    return ( 
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column is-5 image-bg">
                        <figure className="image is-4by3"></figure>
                    </div>
                    <div className="column is-6 is-offset-1">
                      <Headings />
                      <Form 
                        onStartDateChange={this.onStartDateChange} 
                        onEndDateChange={this.onEndDateChange}
                        fetchData={this.fetchData}
                      />            
                      <div className="has-text-centered">
                        <Error error={this.state.error} />
                      </div>
                    </div>
                </div>
                <Concerts display={this.state.display} apiData={this.state.info} />
            </div>
        </div>       
    </section>
    );
  }
}

export default App;
                     
                      
                      
