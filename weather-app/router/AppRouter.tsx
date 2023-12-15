import {createBrowserRouter} from 'react-router-dom'
import App from '../src/App'
import WelcomeToWeatherApp from '../components/WelcomeToWeatherApp'
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
            ]
        }
    ]
)


export default AppRouter