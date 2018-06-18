import React from 'react';

const Listitems = (props) => {
    // const test = apiData.country.map(country => {
    //     return <li>country</li>
    // })
    if(props.apidData.display) {
        const api = props.apidData.city;
        const test = api.map(item => {
             return (
               <li key={item}>
                 {item}
               </li>
             );
           });
    }
    return (
        <div className="listItems">
            {/* {apiData.city ? apiData.city.map(city => (
                <li>
                    <h2></h2>
                </li>
            )) : '' } */}
            {/* <p>{apiData.city.map(city => city)}</p> */}
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            {test()}
            {/* {apiData.artist} */}
            
            {/* {apiData.country.map(country => country)}
            {apiData.url.map(url => url)}
            {apiData.concerts.map(concerts => concerts)} */}
            {/* {apiData.city.map(city => city)} */}
            
            
            {console.log(props.apiData)}

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