import {createSelector} from 'reselect';

const norm = {
    PM10: 40,
    NO2: 40,
    SO2: 20
};

const getActiveSensor = ({sensors: {activeSensor}}) => activeSensor || '';
const getSensors = ({sensors: {sensors = {}}}) => sensors;

const selectSensors = createSelector(
    getSensors,
    getActiveSensor,
    (sensors, activeSensor) => Object.keys(sensors).map(key => ({
        ...sensors[key],
        isActive: key === activeSensor
    }))
);
const getGivenSensors = ({sensors: {sensors = {}}}, sensorsKeys = []) => Object.keys(sensors)
    .filter(key => sensorsKeys.includes(sensors[key].paramCode))
    .map(key => sensors[key]);


const getNormPercentage = createSelector(
    getGivenSensors,
    sensors => sensors.map(({paramCode, lastValues}) => {
        const normValue = norm[paramCode];
        if (normValue && lastValues) {
            const [value] = lastValues;
            return {
                name: paramCode,
                value: ((value / normValue) * 100).toFixed(1)
            };
        }

        return null;
    }).filter(val => !!val)
);

const selectActiveSensor = createSelector(
    getActiveSensor,
    getSensors,
    (active, sensors) => sensors[active] || {}
);

const selectActiveSensorTitle = createSelector(
    selectActiveSensor,
    ({paramCode, paramName}) => `${paramCode} - ${paramName}`
);

const getSummary = ({sensors: {summary}}) => summary;

const summarySelector = createSelector(
    getSummary,
    summary => summary
);

export {
    getNormPercentage,
    selectSensors,
    summarySelector,
    getActiveSensor,
    selectActiveSensorTitle
};