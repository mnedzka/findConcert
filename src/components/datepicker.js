import DatePicker from 'react-datepicker';

import React, { Component } from 'react';

class Datepicker extends Component {
    render() {
        return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />
    }
}

export default Datepicker;