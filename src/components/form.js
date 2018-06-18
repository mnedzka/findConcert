import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
// import moment from 'moment';

import '../App.css';

import 'react-datepicker/dist/react-datepicker.css';

class Form extends Component {

    state = {
        startDate: null,
        endDate: null,
    }

    handleChangeStart = (date) => {
        this.setState({
            startDate: date
        });
        this.props.onStartDateChange(date)
    }

    handleChangeEnd = (date) => {
        this.setState({
            endDate: date
        });
        this.props.onEndDateChange(date)
    }

    render() {
        return (
            <form onSubmit={this.props.fetchData}>
                <input type="text" name="artist" placeholder="Look for an artist..." required />

                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    placeholderText="Select start date"
                    withPortal
                />

                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    placeholderText="Select end date"
                    withPortal
                />
                <button className="button is-large">Find a concert!</button>
            </form>
        );
    }
}

export default Form;