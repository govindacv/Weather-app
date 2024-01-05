import React from 'react'
import miniInfo from '../props/MiniInfo'
import '../styles/mini-display.css'
const WeatherSmallInfo:React.FC<{info:miniInfo}>=(props)=>
{
   const {
    cityName,
    countryName,
    icon,
    text,
    temperature
   }=props.info
    
    
return(
    <div className="mini-display">
        <div className="city-name">
        <h1>{cityName}</h1>
        </div>
        <div className="country-name">
            <p>{countryName}</p>
        </div>
        <div className="mini-center">
            <img src={icon} alt="" />
            <div><b>{temperature}</b> <sup>o</sup> <b>C</b></div>
        </div>
        <div className="text-mini">
            {text}  
        </div>
    </div>
)

}

export default WeatherSmallInfo;