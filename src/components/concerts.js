import React from 'react';
import ListItem from './listItems';

const Concerts = (props) => {
    console.log(props.apiData);

     const show = (display, data) => {
         if(display) {
            return data ? <ListItem apiData={data} /> : null;
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