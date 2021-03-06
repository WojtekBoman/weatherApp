import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { getHour } from "../utils/dateUtils";
import { colors, typography } from "../styles";

const WeatherHourlyList = (props) => {
  return (
    <SafeAreaView>
      {props.dayForecast.map((item) => (
        <View key={item.dt.toString()} style={styles.itemList}>
          <Text style={styles.info}>
            {getHour(item.dt, props.city.timezone)}
          </Text>

          <Text h4 style={styles.description}>
            {item.weather[0].description}
          </Text>

          <Text h4 style={styles.info}>
            {((item.main.temp * 100) / 100).toFixed(2)}°C
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  info: {
    color: colors.white,
    fontSize: typography.infoFontSize,
    textAlign: "center",
  },
  description: {
    color: colors.white,
    fontSize: typography.infoFontSize,
    textAlign: "center",
    flexShrink: 1,
  },
  itemList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

export default WeatherHourlyList;
