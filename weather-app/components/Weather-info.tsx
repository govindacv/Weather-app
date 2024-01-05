import React, { useEffect, useState } from 'react'
import '../styles/weather-info.css'
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/welcome.css'

const arr:any=[]
const WeatherInfo: React.FC<{}> = () => {


    const location = useLocation()
   const[count,setCount]=useState(0)
    
    const {
        name,
        localtime
    } = location.state.location
    const time = JSON.stringify({ localtime })
     
    let toExtractTime = time.slice(-8, -2)



    const {
        temp_c,
        temp_f,
        humidity,wind_kph,wind_degree
    } = location.state.current

    const {
        text, icon
    } = location.state.current.condition
    //console.log(location.state.location);


    const [temp,setTemp]=useState("")
    
    const handleFheat=()=>{
        setTemp(temp_f+'f')
        
    }
    let bol=true;
    useEffect(()=>{
        setTemp(temp_c+'°c')
       
        arr.map((obj:any)=>{
            if(obj.location.name===name)
            {
                bol=false
                 
                
            }

        })
        if(bol)
        {
            arr.unshift(location.state)
            console.log(arr);
            setCount(count+1)
        }
        
    },[count])
     
    
    return (
        <>
            <div className="weather-info-display">
                <div className="container">
                    <div className="current-weather"><h1>Current Weather</h1></div>
                    <div className="time">{toExtractTime}</div>
                    <div className="middle">
                        <div className="left">
                            <img src={icon} alt="" height={150} width={150} />

                        </div>
                        <div className="right">
                            <p>{temp}   </p>

                        </div>
                    </div>
                    <div className="text">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <p>Location :{name}</p>
                    </div>
                    <div className="item">
                        <p>Humidity :{humidity}</p>
                    </div>
                    <div className="item">
                        <p>Wind Speed :{wind_kph}<sub>kms</sub></p>
                    </div>
                    <div className="item">
                        <p>wind degree :{wind_degree} <sup>o</sup></p>
                    </div>
                    <div className="item">
                        <b >More Details -----</b>
                    </div>
                </div>
            </div>
            <div className="cf">
                <button onClick={handleFheat}>F</button>
                
            </div>
        </>
    )
}

export default WeatherInfo
export {arr}