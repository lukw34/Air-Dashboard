import {put, all, takeLatest, select} from 'redux-saga/effects';

import {FETCH_SENSORS_SUCCEEDED} from '../constants/actions';
import {startFetching} from '../actions/plot.actions';
import {fetchSensorData} from '../actions/sensors.actions';
import {selectSensors} from '../selectors/sensors.selectors';

function* fetchPlots() {
    try {
        const state = yield select();
        const sensors = selectSensors(state);
        yield put(startFetching());
        yield all(sensors.map(({id}) => put(fetchSensorData(id))));
    } catch (e) {
        console.log(e);
    }
}


function* saga() {
    yield takeLatest(FETCH_SENSORS_SUCCEEDED, fetchPlots);
}

export default saga;