import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { MaterialIcons } from "@expo/vector-icons";

const ErrorInfo = () => {
    return (
        <View style={{ padding: 20, alignItems:"center" }}>
        <Text h2 style={{textAlign:"center"}}>
          Not found forecasts for your location
        </Text>
        <MaterialIcons name="error" size={200} color="red" />
      </View>
    )
}

export default ErrorInfo;