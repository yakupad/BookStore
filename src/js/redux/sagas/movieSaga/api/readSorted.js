import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as movieConstants,
  actions as movieActions,
} from '../../../modules/movieModule/movieModule'
import { getAllSortedMovies } from '../../../../common/api/index'

export function* fetchMovieSortedData(action) {
  const apiCallResponse = yield call(getAllSortedMovies,
    action.payload.sortDirection, action.payload.sortType);
  const { data } = apiCallResponse;
  const resultArray = [];
  data.forEach((element) => {
    resultArray.push(element);
  });

  yield put(movieActions.updateMoviesSorted(resultArray))
}

export function* watchGetMovieSorted() {
  yield takeLatest(movieConstants.GET_MOVIE_SORTED, fetchMovieSortedData)
}
