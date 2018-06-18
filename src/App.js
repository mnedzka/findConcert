import React, { Component } from 'react';
import moment from 'moment';

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
    info: {
      artist: null,
      url: null,
      city: null,
      country: null,
      concerts: null,
      id: null
    }
  }

  formatDate = (date) => {
    return moment(date._d).format('YYYY-MM-DD');
  }   

  onStartDateChange = (date) => {
    const formattedDate = this.formatDate(date)
    // Z API
    // const test = '2018-06-07T19:00:00'.split('T')[0];
    // const correctDate = new Date(test)
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

  // showState = () => {
  //   console.log(this.state.startDate);
  //   console.log(this.state.endDate);
  //   console.log(this.state.concerts);
  //   console.log(this.state.artist);
  //   console.log(this.state.city);
  //   console.log(this.state.country);
  //   console.log(this.state.url);
  //   console.log(this.state.id);
  // }

  showState = () => {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.log(this.state.info.concerts);
    console.log(this.state.info.artist);
    console.log(this.state.info.city);
    console.log(this.state.info.country);
    console.log(this.state.info.url);
    console.log(this.state.info.id);
  }

  fetchData = (e) => {
    e.preventDefault();  
    if(this.state.startDate && this.state.endDate) {
      const artist = e.target.elements.artist.value;  
      const startDate = this.state.startDate;
      const endDate = this.state.endDate;
      fetch(`${endpoint}${artist}/events/${APIKEY}&date=${startDate}%2C${endDate}`)
      .then(response => response.json())
      // .then(parsedJSON => console.log(parsedJSON))
      .then(data => 
      //   this.setState({
      //   artist: artist,
      //   concerts: data.map(item => item.description ),
      //   url: data.map(item => item.url ),
      //   city: data.map(item => item.venue.city ),
      //   country: data.map(item => item.venue.country ),
      //   id: data.map(item => item.id )
      // }))
  
         {
        const newState = Object.assign({}, this.state);
        newState.info.artist = 'artist';
        newState.info.concerts = data.map(item => item.description );
        newState.info.url = data.map(item => item.url );
        newState.info.city = data.map(item => item.venue.city );
        newState.info.country = data.map(item => item.venue.country );
        newState.info.id = data.map(item => item.id );
        newState.error = false;
        console.log(newState);
        this.setState(newState);
      })
      .catch(err => console.log('parsing failed', err))
    } else {
      this.setState({error: true});
    }
  }

  render() {
    return (
      <div className="App">
        <Headings />
        <Form 
          onStartDateChange={this.onStartDateChange} 
          onEndDateChange={this.onEndDateChange}
          fetchData={this.fetchData}
        />

        <Error error={this.state.error} />
          
        <Concerts 
          apiData={this.state.info}
          // artist={this.state.artist}
          // concerts={this.state.concerts}
          // url={this.state.url}
          // city={this.state.city}
          // country={this.state.country}
          // id={this.state.id}        
        />
        {/* <button onClick={this.showState}>show state</button> */}
      </div>
    );
  }
}

export default App;
