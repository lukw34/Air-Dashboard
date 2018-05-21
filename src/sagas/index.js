import {fork} from 'redux-saga/effects';

import sensors from './sensors.saga';
import plots from './plots.saga';

export default function* rootSaga() {
    yield [
        fork(sensors),
        fork(plots)
    ];
}