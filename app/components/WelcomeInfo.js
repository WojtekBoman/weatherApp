import React from "react";
import { View } from "react-native";
import {Text} from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WelcomeInfo = () => {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text h2 style={{ textAlign: "center" }}>
        Check weather forecast
      </Text>
      <MaterialCommunityIcons name="weather-cloudy" size={200} />
    </View>
  );
};

export default WelcomeInfo;
