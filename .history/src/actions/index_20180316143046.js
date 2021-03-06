import axios from "axios";

const API_KEY = '0503ca20cd6d36e94d85c6111991f06e';
const API_URL = `api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export default function fetchWeather(city){
    const url = `${API_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type:FETCH_WEATHER,
        searchRequestPromise:request
    }
}