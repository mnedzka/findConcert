import React from 'react';

const ListItem = (props) => {
    console.log(props.apiData);
    return (
        <ul className="list">
            {props.apiData.map(item => (
                <li key={item.id}>
                    <h2 className="artist-name">{item.artist}</h2>
                    <h3 className="concert-name">{item.concert}</h3>
                    <div className="wrapper"> 
                        <span className="date-info">{item.date.split('T')[0]}</span>
                        <span className="city">{item.city}</span>
                        <span className="country">{item.country}</span>
                    </div>
                    <button className="button button-event is-small is-danger">
                        <a href={item.url} className="link-info" target="_blank">Check the event!</a>
                    </button>
                </li>
            ))} 
        </ul>          
    );
};

export default ListItem;