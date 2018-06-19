import React from 'react';
import ListItem from './listItems';

const Concerts = (props) => {
     const show = (display, data) => {
        if(display) {
            if(data.length > 0) {
                return data ? <ListItem apiData={data} /> : null;
            } else {
                return <div className="no-concerts">Please try with another artist or different dates</div>
            }
        } 
    }

    return (
            <div className="columns is-vcentered">                
                <div className="column is-6 is-offset-6">
                    {show(props.display, props.apiData)}
                </div>
            </div>
        );
    };

export default Concerts;