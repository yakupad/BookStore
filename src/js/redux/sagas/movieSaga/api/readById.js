import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as movieConstants,
  actions as movieActions,
} from '../../../modules/movieModule/movieModule'
import { getMovieById } from '../../../../common/api/index'

export function* fetchMovieByIdData(action) {
  const apiCallResponse = yield call(getMovieById, action.payload.value);
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
