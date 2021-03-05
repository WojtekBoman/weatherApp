import {REACT_APP_WEATHER_API_KEY} from '@env'

const fetchForecast = (searchText) => {

  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&APPID=${REACT_APP_WEATHER_API_KEY}&units=metric`,
  ).then((res) => handleResponse(res));
};

const handleResponse = (res) => {
  return res.json().then((response) => {
    console.log(response);
    if (response.cod !== "200") {
      return Promise.reject(response.message);
    }
    return response;
  });
};


export const forecastService = {
  fetchForecast
};
