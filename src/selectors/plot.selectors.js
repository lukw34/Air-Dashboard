import {createSelector} from 'reselect';
import {getActiveSensor} from './sensors.selectors';

const getPlotData = ({plot: {data}}) => data;

const isPlotInit = createSelector(
    getPlotData,
    data => data !== null
);


const activePlotData = createSelector(
    isPlotInit,
    getPlotData,
    getActiveSensor,
    (isReady, plotData, activeSensor) => {
        if (!isReady) {
            return [];
        }

        return (plotData[activeSensor] || []).slice(0, 25).filter(({value}) => !!value);
    }
);

const getValues = createSelector(
    activePlotData,
    data => data.map(({value}) => value)
);

const getMaxValue = createSelector(
    getValues,
    values => (values.length > 0 ? Math.max.apply(null, values).toFixed(3) : null)
);

const getMinValue = createSelector(
    getValues,
    values => (values.length > 0 ? Math.min.apply(null, values).toFixed(3) : null)
);

const getAverageValue = createSelector(
    getValues,
    values => (values.length > 0 ? (values.reduce((last, val) => last + val, 0) / values.length).toFixed(3) : null)
);

export {
    isPlotInit,
    activePlotData,
    getMaxValue,
    getMinValue,
    getAverageValue
};