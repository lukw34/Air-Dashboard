import {
    INIT_SENSORS,
    SET_ACTIVE_SENSOR,
    FETCH_SENSORS_SUCCEEDED,
    FETCH_SENSORS_PLOT_DATA,
    FETCH_SENSOR_DATA,
    FILL_SENSOR_DATA,
} from '../constants/actions';

const fetchSensorSucceeded = (stationId, sensors, activeSensor) => ({
    type: FETCH_SENSORS_SUCCEEDED,
    stationId,
    sensors,
    activeSensor
});

const fetchSensorsPlotData = () => ({
    type: FETCH_SENSORS_PLOT_DATA
});

const fillSensorData = (id, lastValues) => ({
    type: FILL_SENSOR_DATA,
    id,
    lastValues
});

const initStation = stationId => ({
    type: INIT_SENSORS,
    stationId
});

const setActiveSensor = sensorId => ({
    type: SET_ACTIVE_SENSOR,
    sensorId: sensorId.toString()
});


const fetchSensorData = id => ({
    type: FETCH_SENSOR_DATA,
    id
});


export {
    initStation,
    fetchSensorData,
    setActiveSensor,
    fillSensorData,
    fetchSensorSucceeded,
    fetchSensorsPlotData
};

