import { REACT_APP_WEATHER_API_KEY } from "@env";

const API_URL = "https://api.openweathermap.org/data/2.5";

const fetchForecast = (searchText) => {
  const reqOptions = {
    method: "GET",
  };

  return fetch(
    `${API_URL}/forecast?q=${searchText}&APPID=${REACT_APP_WEATHER_API_KEY}&units=metric`,
    reqOptions
  ).then((res) => handleResponse(res));
};

const handleResponse = (res) => {
  return res.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      let error = (data && data.message) || res.statusText;

      return Promise.reject(error);
    }

    return data;
  });
};

export const forecastService = {
  fetchForecast,
};
