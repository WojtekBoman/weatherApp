import forecastReducer, { initialState } from "../app/reducers/forecastReducer";
import { forecastConstants } from "../app/constants/forecastConstants";

describe("forecastReducer", () => {
  it("should return the initial state", () => {
    expect(forecastReducer(undefined, {})).toEqual(initialState);
  }),
    it("should update currentDay", () => {
      expect(
        forecastReducer(initialState, {
          type: forecastConstants.UPDATE_DAY_FORECAST,
          payload: "2021-03-03",
        })
      ).toEqual({
        city: {},
        forecastList: [],
        loading: false,
        error: "",
        currentDay: "2021-03-03",
      });
    });
});
