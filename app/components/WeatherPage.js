import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate, getListDay } from "../utils/dateUtils";
import { View } from "react-native";
import WeatherDetails from "./WeatherDetails";
import ErrorInfo from "./ErrorInfo";
import WeatherHourlyList from "./WeatherHourlyList";
import WeatherDaysList from "./WeatherDaysList";
import { ImageBackground, StyleSheet } from "react-native";
import WelcomeInfo from '../components/WelcomeInfo';
import { getBackground } from "../utils/getBackground";

const getFirstAndLastArrElem = (arr) => [arr[0],arr[arr.length-1]]

export const WeatherPage = (props) => {

  const error = useSelector((state) => state.forecast.error);
  const city = useSelector((state) => state.forecast.city);
  const currentDay = useSelector((state) => state.forecast.currentDay);
  //get dates to create list of available days to check forecast
  const rangeDays = useSelector((state) => getFirstAndLastArrElem(state.forecast.forecastList));
  const loading = useSelector((state) => state.forecast.loading)
  //Get forecast for current day
  const dayWeather = useSelector((state) =>
    state.forecast.forecastList.filter((forecast) => {
      //all dates are showed in UTC format
      let date = formatDate(new Date((forecast.dt + city.timezone) * 1000));
      return date.startsWith(currentDay);
    })
  );

  useEffect(() => {
    //scroll after succesfull fetch forecast
    if(dayWeather.length > 0 && !loading) props.goToTop()
  })

  // Display error screen
  if (error) {
    return <ErrorInfo />;
  }

  if (dayWeather.length > 0) {
    const firstDay = rangeDays[0], lastDay = rangeDays[1];
    const dayList = getListDay(firstDay,lastDay,city.timezone);   
    /* I take the next hour, for the forecast for other days, 
    I take the forecast for the middle of the day*/
    const index = formatDate((firstDay.dt + city.timezone)*1000) === currentDay ? 0 : Math.round((dayWeather.length - 1) / 2);
    const currentHourWeather = dayWeather[index]

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
          <WeatherHourlyList city={city} dayWeather={dayWeather}  />
        </ImageBackground>
        <WeatherDaysList dayList={dayList} currentDay={currentDay} />
      </View>
    );
  }

  //If error is empty and we did not fetch forecasts display Welcome screen
  return <WelcomeInfo />
    
};

const styles = StyleSheet.create({

  backgroundImage:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})