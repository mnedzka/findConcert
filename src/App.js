import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Headings from './components/headings';
import Form from './components/form';
import Concerts from './components/concerts';

const APIKEY = `?app_id=55f82634df0fb71ebb5560ae732708f6`; 

class App extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      startDate: moment(),
      isLoading: true,
      contacts: []
    }   
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {    
    fetch(`https://rest.bandsintown.com/artists/shakira/events/${APIKEY}`)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON))
    .catch(err => console.log('parsing failed', err))
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="App">

      <Headings />

      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      <Form />
      <Concerts />
      </div>
    );
  }
}

export default App;
