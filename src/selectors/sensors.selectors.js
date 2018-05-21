import {createSelector} from 'reselect';

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
    selectSensors,
    summarySelector,
    getActiveSensor,
    selectActiveSensorTitle
};