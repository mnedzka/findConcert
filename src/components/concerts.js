import React from 'react';
import ListItem from './listItems';

const concerts = ({apiData}) => 
    <div>
        {apiData &&
            <ListItem 
                apiData={apiData}
            />
        }  
    </div>
 
export default concerts;