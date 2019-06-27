import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as movieConstants,
  actions as movieActions,
} from '../../../modules/movieModule/movieModule'
import { getMovieById } from '../../../../common/api/index'

export function* fetchMovieByIdData() {
  const apiCallResponse = yield call(getMovieById, '5d131750f5fefa2250d90b77');
  const { data } = apiCallResponse;
  const resultArray = [];
  data.forEach((element) => {
    resultArray.push(element);
  });

  yield put(movieActions.updateMovieById(resultArray))
}

export function* watchGetMovieById() {
  yield takeLatest(movieConstants.GET_MOVIE_BY_ID, fetchMovieByIdData)
}
