import './SeasonDisplay.css';
import React from 'react';

// Object to set the proper value for text and icon class for both the seasons
const SeasonConfig = {
    summer: {text: 'It is summer time!!', icon: 'icon sun huge'},
    winter: {text: 'It is chilly !!', icon: 'icon snowflake huge'}
}

// Function to determine if the season is summer or winter based on the hemisphere and month.
const getSeason = (lat, month) =>{
    if(month > 2 && month <9){
        // if the lattitude is >0 then its north then return 'summer' else 'winter'
        return lat > 0 ? 'summer' : 'winter'
    }
    else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, icon} = SeasonConfig[season]
    return(
        <div className= {`season-display ${season}`} >
            <i className={`icon-left ${icon}`} />
            <h1>
            {text}
            </h1>
            <i className={`icon-right ${icon}`} />
        </div>
    )
}

export default SeasonDisplay