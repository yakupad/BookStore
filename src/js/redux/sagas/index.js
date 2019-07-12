import { all } from 'redux-saga/effects';
import { movieSaga } from './movieSaga/movieSaga';
import { userSaga } from './userSaga/userSaga';

export default function* sagas() {
  yield all([...movieSaga]);
  yield all([...userSaga])
}
