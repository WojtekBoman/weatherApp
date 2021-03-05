import React from "react";
import { useSelector } from "react-redux";
import { formatDate, getListDay } from "../utils/dateFormatter";
import { View } from "react-native";
import WeatherDetails from "./WeatherDetails";
import ErrorInfo from "./ErrorInfo";
import WeatherHourlyList from "./WeatherHourlyList";
import WeatherDaysList from "./WeatherDaysList";
import { ImageBackground } from "react-native";
import WelcomeInfo from '../components/WelcomeInfo';
import { getBackground } from "../utils/getBackground";

export const WeatherPage = () => {
  const firstDay = useSelector((state) => state.forecast.forecastList[0]);
  const error = useSelector((state) => state.forecast.error);
  const city = useSelector((state) => state.forecast.city);
  const currentDay = useSelector((state) => state.forecast.currentDay);
  const dayWeather = useSelector((state) =>
    state.forecast.forecastList.filter((forecast) => {
      let date = formatDate(new Date((forecast.dt + city.timezone) * 1000));
      return date.startsWith(currentDay);
    })
  );

  if (error) {
    return <ErrorInfo />;
  }

  if (dayWeather.length > 0) {
    const dayList = getListDay(firstDay,city.timezone,5);    
    const currentHourWeather = dayWeather[Math.round((dayWeather.length - 1) / 2)]

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={getBackground(currentHourWeather.weather[0].main)}
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
          }}
        >
          <WeatherDetails
            city={city.name}
            dayWeather={currentHourWeather}
          />
          <WeatherHourlyList city={city} dayWeather={dayWeather} />
        </ImageBackground>
        <WeatherDaysList dayList={dayList} />
      </View>
    );
  }

  return <WelcomeInfo />
    
};
