import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import {colors,icons,typography} from '../styles'

const WeatherDetails = (props) => {

  return (
    <View>
      <View style={styles.weatherInfo}>
        <Text style={styles.title}>{props.city}</Text>
        <View style={styles.additionalInfo}>
          <Text style={styles.subtitle}>
            {props.dayWeather.main.temp}°C
          </Text>
        </View>
        <Text style={styles.subtitle}>
          {props.dayWeather.weather[0].description}
        </Text>
        <Text style={styles.info}>
          {props.currentDay}
        </Text>
      </View>

      <View style={styles.additionalInfo}>
        <View style={styles.viewAlignedCenter}>
          <Ionicons name="water" size={icons.weatherIconSize} color={colors.white} />
          <Text style={styles.info}>Humidity</Text>
          <Text style={styles.info}>
            {props.dayWeather.main.humidity}%
          </Text>
        </View>
        <View style={styles.viewAlignedCenter}>
          <Entypo name="air" size={icons.weatherIconSize} color={colors.white} />
          <Text style={styles.info}>Pressure</Text>
          <Text style={styles.info}>
            {props.dayWeather.main.pressure} Pa
          </Text>
        </View>
        <View style={styles.viewAlignedCenter}>
          <FontAwesome5 name="wind" size={icons.weatherIconSize} color={colors.white} />
          <Text style={styles.info}>Wind</Text>
          <Text style={styles.info}>
            {props.dayWeather.wind.speed} m/s
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    flex: 1,
    alignItems: "center",
    margin: 30
  },
  additionalInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  viewAlignedCenter: {
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: typography.titleFontSize,
  },
  subtitle: {
    color: colors.white,
    fontSize: typography.subtitleFontSize,
  },
  info: {
    color: colors.white,
    fontSize:typography.infoFontSize,
  },
});

export default WeatherDetails;
