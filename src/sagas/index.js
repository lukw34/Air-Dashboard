import {fork} from 'redux-saga/effects';

import sensors from './sensors.saga';

export default function* rootSaga() {
    yield [
        fork(sensors)
    ];
}