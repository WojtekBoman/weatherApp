import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors, icons, infoWindow, typography } from "../styles";

const ErrorInfo = () => {
  return (
    <View style={styles.infoWindow}>
      <Text style={styles.title}>No forecast found for this location</Text>
      <FontAwesome5
        name="sad-cry"
        size={icons.infoIconSize}
        color={colors.blue}
      />
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

export default ErrorInfo;
