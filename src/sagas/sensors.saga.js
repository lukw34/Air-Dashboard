import {call, put, takeLatest} from 'redux-saga/effects';

import Api from '../utils/Api';
import {INIT_SENSORS} from '../constants/actions';
import {fetchSensorSucceeded} from '../actions/sensors.actions';

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
            }), {})
        ));
    } catch (e) {
        console.log(e);
    }
}

function* saga() {
    yield takeLatest(INIT_SENSORS, fetchSensors);
}

export default saga;