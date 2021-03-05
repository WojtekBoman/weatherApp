import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFormatDate, getListDay } from "../utils/dateUtils";
import { getFirstAndLastArrElem } from "../utils/arrayUtils";
import { View } from "react-native";
import WeatherDetails from "./WeatherDetails";
import ErrorInfo from "./ErrorInfo";
import WeatherHourlyList from "./WeatherHourlyList";
import WeatherDaysList from "./WeatherDaysList";
import { ImageBackground, StyleSheet } from "react-native";
import WelcomeInfo from "../components/WelcomeInfo";
import { getBackground } from "../utils/backgroundUtils";

export const WeatherPage = (props) => {
  // get current display city
  const city = useSelector((state) => state.forecast.city);
  //get current display date
  const currentDay = useSelector((state) => state.forecast.currentDay);
  //get dates to create list of available days to check forecast
  const rangeDays = useSelector((state) =>
    getFirstAndLastArrElem(state.forecast.forecastList)
  );
  //Get forecast for current day
  const dayWeather = useSelector((state) =>
    state.forecast.forecastList.filter((forecast) => {
      //all dates are showed in UTC format
      let date = getFormatDate(forecast.dt, city.timezone);
      return date.startsWith(currentDay);
    })
  );
  const error = useSelector((state) => state.forecast.error);
  const loading = useSelector((state) => state.forecast.loading);

  useEffect(() => {
    //scroll after succesfull fetch forecast
    if (dayWeather.length > 0 && !loading) props.goToTop();
  });

  // Display error screen
  if (error) {
    return <ErrorInfo />;
  }

  if (dayWeather.length > 0) {
    const firstDay = rangeDays[0],
      lastDay = rangeDays[1];
    const dayList = getListDay(firstDay, lastDay, city.timezone);
    /* I take the next hour, for the forecast for other days, 
    I take the forecast for the middle of the day*/
    const index =
      getFormatDate((firstDay.dt, city.timezone)) === currentDay
        ? 0
        : Math.round((dayWeather.length - 1) / 2);
    const currentHourWeather = dayWeather[index];

    return (
      <View>
        <ImageBackground
          source={getBackground(currentHourWeather.weather[0].main)}
          style={styles.backgroundImage}
        >
          <WeatherDetails
            city={city.name}
            dayWeather={currentHourWeather}
            currentDay={currentDay}
          />
          <WeatherHourlyList city={city} dayWeather={dayWeather} />
        </ImageBackground>
        <WeatherDaysList dayList={dayList} currentDay={currentDay} />
      </View>
    );
  }

  //If error is empty and we did not fetch forecasts display Welcome screen
  return <WelcomeInfo />;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
