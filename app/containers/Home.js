import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { WeatherPage } from "../components/WeatherPage";
import SearchBar from "../components/SearchBar";

const Home = () => {
    
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <WeatherPage style={{ flex: 1, margin: 15 }} />
        <SearchBar />
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Home;
