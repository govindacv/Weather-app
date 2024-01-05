import {createBrowserRouter} from 'react-router-dom'
import App from '../src/App'
import WelcomeToWeatherApp from '../components/WelcomeToWeatherApp'
import WeatherInfo from '../components/Weather-info'
const AppRouter =createBrowserRouter(
    [
        {
            path:`/`,
            element:<App/>,
            children:[
                {
                    index:true,
                    element:<WelcomeToWeatherApp/>
                }
                ,
                {
                    path:`/weather-info`,
                    element:<WeatherInfo/>
                }
            ]
        }
    ]
)


export default AppRouter