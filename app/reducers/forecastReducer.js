import { forecastConstants } from "../constants/forecastConstants";
import { formatDate } from "../utils/dateUtils";

const initialState = {
  city: {},
  forecastList: [],
  loading: false,
  error: "",
  currentDay: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    //change day to display forecasts
    case forecastConstants.UPDATE_DAY_FORECAST:
      return {
        ...state,
        currentDay: action.payload,
      };
    case forecastConstants.FETCH_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
      };
      //format date in order to keep dates in timezone's formats
    case forecastConstants.FETCH_FORECAST_SUCCESS:
      return {
        loading: false,
        error: "",
        forecastList: action.payload.list,
        city: action.payload.city,
        currentDay: formatDate(
          new Date(
            (action.payload.list[0].dt + action.payload.city.timezone) * 1000
          )
        ),
      };
    case forecastConstants.FETCH_FORECAST_FAILURE:
      return {
        loading: false,
        error: action.payload,
        forecastList: [],
        city: {},
        currentDay: "",
      };
    default:
      return { ...state };
  }
};
