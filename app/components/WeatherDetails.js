import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { colors, icons, typography } from "../styles";
import { getWeekdayName } from "../utils/dateUtils";

const WeatherDetails = (props) => {
  return (
    <View>
      <View style={styles.weatherInfo}>
        <Text style={styles.title}>{props.city}</Text>
        <View style={styles.additionalInfo}>
          <Text style={styles.subtitle}>{props.dayForecast.main.temp}°C</Text>
        </View>
        <Text style={styles.subtitle}>
          {props.dayForecast.weather[0].description}
        </Text>
        <Text style={styles.info}>
          {getWeekdayName(new Date(props.currentDay).getDay())}
        </Text>
        <Text style={styles.info}>{props.currentDay}</Text>
      </View>

      <View style={styles.additionalInfo}>
        <View style={styles.viewAlignedCenter}>
          <Ionicons
            name="water"
            size={icons.weatherIconSize}
            color={colors.white}
          />
          <Text style={styles.info}>Humidity</Text>
          <Text style={styles.info}>{props.dayForecast.main.humidity}%</Text>
        </View>
        <View style={styles.viewAlignedCenter}>
          <Entypo
            name="air"
            size={icons.weatherIconSize}
            color={colors.white}
          />
          <Text style={styles.info}>Pressure</Text>
          <Text style={styles.info}>{props.dayForecast.main.pressure} hPa</Text>
        </View>
      </View>
      <View style={styles.viewAlignedCenter}>
        <FontAwesome5
          name="wind"
          size={icons.weatherIconSize}
          color={colors.white}
        />
        <Text style={styles.info}>Wind</Text>
        <Text style={styles.info}>{props.dayForecast.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    flex: 1,
    alignItems: "center",
    margin: 30,
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
    textAlign: "center",
  },
  subtitle: {
    color: colors.white,
    fontSize: typography.subtitleFontSize,
    textAlign: "center",
  },
  info: {
    color: colors.white,
    fontSize: typography.infoFontSize,
    textAlign: "center",
  },
});

export default WeatherDetails;
