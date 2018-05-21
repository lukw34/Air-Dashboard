import {createReducer} from '../utils/reducers';
import {FETCH_SENSORS_SUCCEEDED, SET_ACTIVE_SENSOR, FILL_SENSOR_DATA} from '../constants/actions';

const initState = {
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

const setActiveSensor = (state = initState, {sensorId}) => ({
    ...state,
    activeSensor: sensorId
});

export default createReducer(initState, {
    [FETCH_SENSORS_SUCCEEDED]: fetchSucceeded,
    [SET_ACTIVE_SENSOR]: setActiveSensor,
    [FILL_SENSOR_DATA]: fillSensorData
});