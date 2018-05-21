import {combineReducers} from 'redux';

import sensors from './sensors.reducer';
import plot from './plot.reducer';


export default combineReducers({
    sensors, plot
});