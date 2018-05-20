import {INIT_SENSORS, SET_ACTIVE_SENSOR, FETCH_SENSORS_SUCCEEDED} from '../constants/actions';


const fetchSensorSucceeded = (stationId, sensors) => ({
    type: FETCH_SENSORS_SUCCEEDED,
    stationId,
    sensors
});

const initStation = stationId => ({
    type: INIT_SENSORS,
    stationId
});

const setActiveSensor = sensorId => ({
    type: SET_ACTIVE_SENSOR,
    sensorId
});


export {
    initStation,
    setActiveSensor,
    fetchSensorSucceeded
};

