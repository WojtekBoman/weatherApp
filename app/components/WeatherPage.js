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

const WeatherPage = (props) => {
  //Get current displayed city
  const city = useSelector((state) => state.forecast.city);
  //Get current displayed date
  const currentDay = useSelector((state) => state.forecast.currentDay);
  //Get dates to create list of available days to check forecast
  const rangeDays = useSelector((state) =>
    getFirstAndLastArrElem(state.forecast.forecastList)
  );
  //Get forecast for current day
  const dayForecast = useSelector((state) =>
    state.forecast.forecastList.filter((forecast) => {
      //Change from UTC to local format for a given location
      let date = getFormatDate(forecast.dt, city.timezone);
      return date.startsWith(currentDay);
    })
  );
  const error = useSelector((state) => state.forecast.error);
  const loading = useSelector((state) => state.forecast.loading);
  const { goToTop } = props;
  useEffect(() => {
    //Scroll after succesfull fetch forecast
    if (dayForecast.length > 0 && !loading) goToTop();
  });

  // Display error screen
  if (error) {
    return <ErrorInfo errorInfo={error} />;
  }

  if (dayForecast.length > 0) {
    const firstDay = rangeDays[0],
      lastDay = rangeDays[1];
    const dayList = getListDay(firstDay, lastDay, city.timezone);
    /* For today I download the forecast for the current hour,
     for other days of the week I choose the forecast for the hour in the middle of the day*/

    const index =
      getFormatDate(firstDay.dt, city.timezone) === currentDay
        ? 0
        : Math.round((dayForecast.length - 1) / 2);
    const currentHourWeather = dayForecast[index];

    return (
      <View>
        <ImageBackground
          source={getBackground(currentHourWeather.weather[0].main)}
          style={styles.backgroundImage}
        >
          <WeatherDetails
            city={city.name}
            dayForecast={currentHourWeather}
            currentDay={currentDay}
          />
          <WeatherHourlyList city={city} dayForecast={dayForecast} />
        </ImageBackground>
        <WeatherDaysList dayList={dayList} currentDay={currentDay} />
      </View>
    );
  }

  //If error is empty and I did not fetch forecasts display Welcome screen
  return <WelcomeInfo />;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default WeatherPage;
