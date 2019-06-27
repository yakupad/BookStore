import { all } from 'redux-saga/effects';
import { movieSaga } from './movieSaga/movieSaga';

export default function* sagas() {
  yield all([...movieSaga]);
}
