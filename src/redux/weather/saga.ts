import { put, takeEvery } from 'redux-saga/effects';
import apiCall from 'utils/apiCall';
import { ICity } from 'interfase';
import {
  getWeatherStart,
  getWeatherSuccess,
  getWeatherFail,
} from './reducer';

function* getUsers(action: { type: string, payload: ICity }) {
  try {
    const { payload: { lat, lng, name } } = action;
    const { data } = yield apiCall({
      type: 'GET',
      url: `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,dewpoint_2m,rain,snowfall,cloudcover,windspeed_10m&timeformat=unixtime`,
    });
    yield put(getWeatherSuccess({ ...data, name }));
  } catch (e) {
    yield put(getWeatherFail());
  }
}

function* getUsersSaga() {
  yield takeEvery(getWeatherStart.toString(), getUsers);
}

export default getUsersSaga;
