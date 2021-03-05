import {forecastConstants} from '../constants/forecastConstants';
import {forecastService} from '../services/forecastService';

export const fetchForecast = (searchText) => {
    return dispatch => {
        dispatch(request());
        forecastService.fetchForecast(searchText)
            .then(
                forecasts => {
                    dispatch(success(forecasts))
                },
                error =>{
                    dispatch(failure(error))
                } 
            )
    };
        
    function request() { return { type: forecastConstants.FETCH_FORECAST_REQUEST} }
    function success(forecasts) { return { type: forecastConstants.FETCH_FORECAST_SUCCESS,payload: forecasts } }
    function failure(error) { return { type: forecastConstants.FETCH_FORECAST_FAILURE,payload: error } }
}

export const updateDay = (day) => {
    return{
        type: forecastConstants.UPDATE_DAY_FORECAST,
        payload:day
    }
}