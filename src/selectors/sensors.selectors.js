import { createSelector } from 'reselect';

const getActiveSensor = ({sensors: {activeSensor}}) => activeSensor || '';
const getSensors = ({sensors: {sensors = {}}}) => sensors;

const selectSensors = createSelector(
    getSensors,
    getActiveSensor,
    (sensors, activeSensor) => {
        console.log(activeSensor);
        return Object.keys(sensors).map(key => ({
            ...sensors[key],
            isActive: key === activeSensor
        }));
    }
);

export {
    selectSensors,
    getActiveSensor
};