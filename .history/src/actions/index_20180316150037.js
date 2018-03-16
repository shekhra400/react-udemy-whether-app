import axios from "axios";

const API_KEY = '0503ca20cd6d36e94d85c6111991f06e';
const API_URL = `http://samples.openweathermap.org/data/2.5/forecast?appidq=London,us&=0503ca20cd6d36e94d85c6111991f06e`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    const url = `${API_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}