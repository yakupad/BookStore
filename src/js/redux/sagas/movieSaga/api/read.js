import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as movieConstants,
  actions as movieActions,
} from '../../../modules/movieModule/movieModule'
import { getAllMovies } from '../../../../common/api/index'

export function* fetchMovieData() {
  const apiCallResponse = yield call(getAllMovies);
  const { data } = apiCallResponse;
  const resultArray = [];
  data.forEach((element) => {
    resultArray.push(element);
  });

  yield put(movieActions.updateMovies(resultArray))
}

export function* watchGetMovie() {
  yield takeLatest(movieConstants.GET_MOVIE, fetchMovieData)
}
