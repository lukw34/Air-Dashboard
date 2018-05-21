import {
    INIT_SENSORS,
    SET_ACTIVE_SENSOR,
    FETCH_SENSORS_SUCCEEDED,
    FETCH_SENSOR_DATA,
    FILL_SENSOR_DATA,
    SET_SUMMARY
} from '../constants/actions';

const fetchSensorSucceeded = (stationId, sensors, activeSensor) => ({
    type: FETCH_SENSORS_SUCCEEDED,
    stationId: stationId.toString(),
    sensors,
    activeSensor
});

const fillSensorData = (id, lastValues) => ({
    type: FILL_SENSOR_DATA,
    id: id.toString(),
    lastValues
});

const initStation = stationId => ({
    type: INIT_SENSORS,
    stationId: stationId.toString()
});

const setActiveSensor = sensorId => ({
    type: SET_ACTIVE_SENSOR,
    sensorId: sensorId.toString()
});


const fetchSensorData = id => ({
    type: FETCH_SENSOR_DATA,
    id: id.toString()
});


const setSummary = summary => ({
    type: SET_SUMMARY,
    summary,
});

export {
    initStation,
    fetchSensorData,
    setActiveSensor,
    setSummary,
    fillSensorData,
    fetchSensorSucceeded
};

