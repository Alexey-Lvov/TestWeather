import { all } from 'redux-saga/effects';
import getUsersSaga from './weather/saga';

export default function* rootSaga() {
  yield all([
    getUsersSaga(),
  ]);
}
