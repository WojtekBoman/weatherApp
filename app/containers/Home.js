import React, { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import WeatherPage from "../components/WeatherPage";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const scrollView = useRef();

  const goToTop = () => {
    scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} ref={scrollView}>
      <WeatherPage goToTop={goToTop} />
      <SearchBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Home;
