import axios from "axios";

const API_KEY = '0503ca20cd6d36e94d85c6111991f06e';

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',us' + '&APPID=' + API_KEY;
    console.log(url);
    const request = axios.get(url);//promise is returned
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}

