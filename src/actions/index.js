const API_KEY = '45b8f40cbeefd59cd13eac204dd16e32';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    
    return {
        type: FETCH_WEATHER,

    };
}