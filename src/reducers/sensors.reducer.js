import {createReducer} from '../utils/reducers';
import {FETCH_SENSORS_SUCCEEDED, SET_ACTIVE_SENSOR} from '../constants/actions';

const initState = {
    sensors: {}
};
const fetchSucceeded = (state = initState, {sensors, stationId}) => ({
    ...state,
    sensors,
    stationId
});
const setActiveSensor = (state = initState, {sensorId}) => ({
    ...state,
    activeSensor: sensorId
});

export default createReducer(initState, {
    [FETCH_SENSORS_SUCCEEDED]: fetchSucceeded,
    [SET_ACTIVE_SENSOR]: setActiveSensor
});