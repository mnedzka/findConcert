import React from 'react';

const Listitems = ({apiData}) => {
    // const test = apiData.country.map(country => {
    //     return <li>country</li>
    // })
    return (
        <div className="listItems">
            {/* {apiData.city ? apiData.city.map(city => (
                <li>
                    <h2></h2>
                </li>
            )) : '' } */}

            {/* {test()} */}
            
            {console.log(apiData)}

            {/* {apiData.city ? apiData.city.map(city => (
                <div 
                    className="station" 
                    key={city}>
                    {city}
                </div> )) : ''
            } */}
        </div>
    );
};

export default Listitems;