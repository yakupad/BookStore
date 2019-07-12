import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as movieConstants,
  actions as movieActions,
} from '../../../modules/movieModule/movieModule'
import { postCreateMovie } from '../../../../common/api/index'

export function* fetchMovieCreateData() {
  const requestData = {
    id: 'element.id',
    imageUrl: 'element.imageUrl',
    description: 'element.description',
    typeId: 'element.typeId',
    productionYear: 1,
    imdbScore: 'element.imdbScore',
    director: 'element.director',
    actor: 'element.actor',
    tag: 'element.tag',
    videoLink: 'element.videoLink',
    thumbnailLink: 'element.thumbnailLink',
    createDate: new Date(),
    updatedDate: new Date(),
    isActive: true,
    createdUser: 1,
    updatedUser: 1,
    watchCount: 1,
  }

  const apiCallResponse = yield call(postCreateMovie, requestData);
  const { data } = apiCallResponse;
  yield put(movieActions.updateCreateMovie(data))
}

export function* watchCreateMovie() {
  yield takeLatest(movieConstants.MOVIE_CREATE, fetchMovieCreateData)
}
