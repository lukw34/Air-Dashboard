import {createReducer} from '../utils/reducers';
import {SET_PLOT_DATA, START_FETCH_PLOT_DATA} from '../constants/actions';

const initState = {
    data: null
};

const startFetching = (state = initState) => ({
    ...state,
    isFetching: true
});

const setPlotData = (state = initState, {id, plotData}) => ({
    ...state,
    isFetching: false,
    data: {
        ...(state.data || {}),
        [id]: plotData
    }
});

export default createReducer(initState, {
    [SET_PLOT_DATA]: setPlotData,
    [START_FETCH_PLOT_DATA]: startFetching
});