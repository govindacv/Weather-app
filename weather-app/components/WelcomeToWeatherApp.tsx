import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherSmallInfo from '../components/Weather-small-info';
import miniInfo from '../props/MiniInfo';
import { arr } from '../components/Weather-info';

const WelcomeToWeatherApp: React.FC<{}> = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const [loc, setLoc] = useState('');
    const [_locData, setLocData] = useState([]);
    const [count, setCount] = useState(0);

    const handleOnClick = () => {
        let variable = inputRef.current?.value;
        setLoc(`${variable}`);
    };

    useEffect(() => {
        if (loc !== '') {
            const url = `https://api.weatherapi.com/v1/current.json?key=d4b48403c1c642a59cf165123231412&q=${loc}&aqi=yes`;
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    navigate(`/weather-info`, { state: response.data });
                    setLocData(response.data);
                    setCount((prevCount) => prevCount + 1);
                    console.log(loc);
                    console.log(count);
                    console.log(arr);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [loc, arr]);
    let filteredArray:any=[]
    filteredArray=arr.filter((_item:any,index:number)=>(index<3))
    console.log(filteredArray);
    

    const[myloc,setMyloc]=useState('')
    const getGPS=()=>{
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position)=>{
                        const lat=position.coords.latitude;
                        const lan=position.coords.longitude;
                        axios.get(`http://api.weatherapi.com/v1/current.json?key=e69327867ee348a89da135837231412&q=${lat},${lan}`)
                        .then((res)=>{console.log(res.data)
                            setMyloc(res.data.location.name)
                           
                        })
                        .catch((error)=>{
                            console.log(error);
                            
                        })
                       
                    }
                )
     
            }
        }


    return (
        <>
            <div className="home">
                <input ref={inputRef} type="text" placeholder='search your city..' />
                <button onClick={handleOnClick}>Search</button>
                <div className="getGPS">
                <button onClick={getGPS}  ><i className="fa-solid fa-location-dot"></i></button> 
                <br />   
                
              {
                myloc!== ""&&    <p>Current location:{myloc}</p>           
                }

                </div>
            </div>
            <div className="ToDisplayMini">
                <h3 className='recently-viewed'>Recently viewed</h3>
                <br />
           
            {filteredArray.map((val: any) => 
            {

                const cityName = val.location.name;
                const countryName = val.location.country;
                const icon = val.current.condition.icon;
                const text = val.current.condition.text;
                const temperature = val.current.temp_c;
                const miniInfoData: miniInfo = { cityName, countryName, icon, text, temperature };

                return (
                     
                        <WeatherSmallInfo info={miniInfoData} />
                        
                     
                );
            })
            }
            </div>

        </>
    );
};

export default WelcomeToWeatherApp;
