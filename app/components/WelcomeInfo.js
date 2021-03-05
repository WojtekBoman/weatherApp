import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { typography, icons, infoWindow } from "../styles";

const WelcomeInfo = () => {
  return (
    <View style={styles.infoWindow}>
      <Text style={styles.title}>Check weather forecast in any location</Text>
      <MaterialCommunityIcons name="weather-cloudy" size={icons.infoIconSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoWindow: {
    ...infoWindow,
  },
  title: {
    fontSize: typography.titleFontSize,
    textAlign: "center",
  },
});

export default WelcomeInfo;
