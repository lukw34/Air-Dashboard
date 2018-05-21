import { SET_PLOT_DATA, START_FETCH_PLOT_DATA} from '../constants/actions';


const startFetching = () => ({
    type: START_FETCH_PLOT_DATA
});

const setPlotData = (id, plotData) => ({
    type: SET_PLOT_DATA,
    id: id.toString(),
    plotData
});

export {
    startFetching,
    setPlotData
};