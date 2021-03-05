export const getBackground = (weather) => {
  switch (weather) {
    case "Thunderstorm":
      return require("../img/thunder.jpg");
    case "Drizzle":
      return require("../img/drizzle.jpg");
    case "Rain":
      return require("../img/rainy.jpg");
    case "Snow":
      return require("../img/snow.jpg");
    case "Clouds":
      return require("../img/cloud.jpg");
    case "Clear":
      return require("../img/clear.jpg");
    default:
      return require("../img/default.jpg");
  }
};
