import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { typography, infoWindow } from "../styles";
import { Image } from "react-native";

const WelcomeInfo = () => {
  return (
    <View style={styles.infoWindow}>
      <Text style={styles.title}>Check weather forecast in any location</Text>
      <Image source={require('../img/weather.png')} />
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
