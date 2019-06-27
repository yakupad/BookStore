import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as movieConstants,
  actions as movieActions,
} from '../../../modules/movieModule/movieModule'
import { getMovieById } from '../../../../common/api/index'
import { movieType } from '../../../../common/types/movieType'

export function* fetchMovieByIdData() {
  const apiCallResponse = yield call(getMovieById, '5d131750f5fefa2250d90b77');
  const { data } = apiCallResponse;
  const resultArray: Array<movieType> = [];

  data.forEach((element) => {
    const result: movieType = {
      id: element.id,
      imageUrl: element.imageUrl,
      description: element.description,
      typeId: element.typeId,
      productionYear: element.productionYear,
      imdbScore: element.imdbScore,
      director: element.director,
      actor: element.actor,
      tag: element.tag,
      videoLink: element.videoLink,
      thumbnailLink: element.thumbnailLink,
      createDate: new Date(),
      updatedDate: new Date(),
      isActive: element.isActive,
      createdUser: element.createdUser,
      updatedUser: element.updatedUser,
      watchCount: element.watchCount,
    }
    resultArray.push(result);
  });

  yield put(movieActions.updateMovieById(resultArray))
}

export function* watchGetMovieById() {
  yield takeLatest(movieConstants.GET_MOVIE_BY_ID, fetchMovieByIdData)
}
