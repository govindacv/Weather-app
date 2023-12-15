import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const WelcomeToWeatherApp: React.FC<{}> = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const Navigate = useNavigate()
    const handleOnClick = () => { }
    
    const [loc,setLoc]=useState('')
    //setLoc()

    return (
        <>
            <h1>Welcome to Weather App</h1>
            
        </>
    )
}

export default WelcomeToWeatherApp