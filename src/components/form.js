import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

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
            <form className="" onSubmit={this.props.fetchData}>
                <div className="">                
                    <input className="input is-warning is-medium" type="text" name="artist" placeholder="Look for an artist..." required />

                    <div className="inline-wrapper">                    
                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}
                            placeholderText="Select start date"
                            withPortal
                            className="input is-warning is-medium"
                        />

                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            placeholderText="Select end date"
                            withPortal
                            className="input is-warning is-medium"
                        />
                    </div>
                    <button className="button is-medium is-danger">Find a concert!</button>
                </div>
            </form>
        );
    }
}

export default Form;