import { createAction } from 'redux-actions'

export const GET_MOVIE_BY_TYPE = 'app/movie/GET_MOVIE_BY_TYPE'
export const UPDATE_MOVIE_BY_TYPE = 'app/movie/UPDATE_MOVIE_BY_TYPE'

export const getMovieByType = createAction(
  GET_MOVIE_BY_TYPE, () => ({})
)
export const updateMovieByType = createAction(
  UPDATE_MOVIE_BY_TYPE,
  (resultMovieByType) => ({ resultMovieByType }),
)
