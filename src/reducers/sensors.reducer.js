import {createReducer} from '../utils/reducers';
import {FETCH_SENSORS_SUCCEEDED, SET_ACTIVE_SENSOR, FILL_SENSOR_DATA, SET_SUMMARY} from '../constants/actions';

const initState = {
    summary: null,
    sensors: {}
};
const fetchSucceeded = (state = initState, {activeSensor, sensors, stationId}) => ({
    ...state,
    sensors,
    stationId,
    activeSensor
});

const fillSensorData = (state = initState, {id, lastValues}) => ({
    ...state,
    sensors: {
        ...state.sensors,
        [id]: {
            ...state.sensors[id],
            lastValues
        }
    }
});

const setSummary = (state = initState, {summary}) => ({
    ...state,
    summary
});

const setActiveSensor = (state = initState, {sensorId}) => ({
    ...state,
    activeSensor: sensorId
});

export default createReducer(initState, {
    [FETCH_SENSORS_SUCCEEDED]: fetchSucceeded,
    [SET_ACTIVE_SENSOR]: setActiveSensor,
    [FILL_SENSOR_DATA]: fillSensorData,
    [SET_SUMMARY]: setSummary
});