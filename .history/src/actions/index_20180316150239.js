import axios from "axios";

const API_KEY = 'b6907d289e10d714a6e88b30761fae22';
const API_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    const url = `${API_URL}&q=${city},us`;
    console.log(url);
    const request = axios.get(url);
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}