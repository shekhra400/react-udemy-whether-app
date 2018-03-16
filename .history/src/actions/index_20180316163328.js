import axios from "axios";

const API_KEY = 'b6907d289e10d714a6e88b30761fae22';
const API_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const appId = '0503ca20cd6d36e94d85c6111991f06e';
// const  API_URL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lng + '&APPID=' + appId;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',us' + '&APPID=' + appId;
    console.log(url);
    const request = axios.get(url);//promise is returned
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}

