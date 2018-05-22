import {createSelector} from 'reselect';
import {getActiveSensor} from './sensors.selectors';

const getPlotData = ({plot: {data}}) => data;

const getIsFetching = ({plot: {isFetching}}) => isFetching || false;

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

const getMedianValue = createSelector(
    getValues,
    (values) => {
        if (values.length > 0) {
            const sortedValue = values.sort((a, b) => a - b);
            const half = Math.floor(values.length / 2);

            if (values.length % 2) {
                return sortedValue[half].toFixed(3);
            }
            return ((sortedValue[half - 1] + sortedValue[half]) / 2).toFixed(3);
        }

        return null;
    }
);

const getAverageValue = createSelector(
    getValues,
    values => (values.length > 0 ? (values.reduce((last, val) => last + val, 0) / values.length).toFixed(3) : null)
);

const isLoaderSelector = createSelector(
    getIsFetching,
    isFetching => isFetching
);

export {
    isPlotInit,
    getMedianValue,
    isLoaderSelector,
    activePlotData,
    getMaxValue,
    getMinValue,
    getAverageValue
};