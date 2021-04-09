import React from 'react'

const SeasonConfig = {
    summer: {
        text: "let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Brr it's cold",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter' // if latitude greater than 0, return summer, else winter
    } else {
        return lat > 0 ? 'winter' : 'summer' // opposite
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    // seasonConfig(season) -> returns object w/ text, iconName
    const {text, iconName} = seasonConfig[season] // destructures seasonConfig-> no need to use "seasonConfig" in front of keys

    // icon className comes from semantic UI library
    // icon-left & icon-right to help w/ css styling
    // div classname should match component
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/> 
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
    </div>
    )
}

export default SeasonDisplay