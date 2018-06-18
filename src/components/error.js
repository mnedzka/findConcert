import React from 'react';

import '../App.css';

const Error = ({error}) => 
    <div className="error">
        {error ? <h2>You need to pick date range to search</h2> : null }
    </div>

export default Error;