import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';

import Api from '../utils/Api';
import {INIT_SENSORS, FETCH_SENSOR_DATA} from '../constants/actions';
import {fetchSensorSucceeded, fillSensorData} from '../actions/sensors.actions';
import {setPlotData} from '../actions/plot.actions';

function* fetchSensors({stationId}) {
    try {
        const sensors = yield call(Api, `/pjp-api/rest/station/sensors/${stationId}`);
        yield put(fetchSensorSucceeded(
            stationId,
            sensors.reduce((last, {id, param: {paramName, paramCode}}) => ({
                ...last,
                [id]: {
                    id,
                    paramCode,
                    paramName
                }
            }), {}),
            sensors[0].id.toString()
        ));
    } catch (e) {
        console.log(e);
    }
}

function* fetchSensorData({id}) {
    try {
        const {values} = yield call(Api, `/pjp-api/rest/data/getData/${id}`);
        yield put(setPlotData(id, values));
        const lastValues = values.reduce((last, {value}, index, arr) => {
            if (last === null && value !== null) {
                return [value, arr[index + 1].value];
            }

            return last;
        }, null);
        yield put(fillSensorData(id, lastValues));
    } catch (e) {
        console.log(e);
    }
}


function* saga() {
    yield takeLatest(INIT_SENSORS, fetchSensors);
    yield takeEvery(FETCH_SENSOR_DATA, fetchSensorData);
}

export default saga;