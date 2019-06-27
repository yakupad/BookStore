import { createAction } from 'redux-actions'

export const GET_MOVIE_CREATE = 'app/movie/GET_MOVIE_CREATE'
export const UPDATE_MOVIE_CREATE = 'app/movie/UPDATE_MOVIE_CREATE'

export const getCreateMovie = createAction(
  GET_MOVIE_CREATE, () => ({})
)
export const updateCreateMovie = createAction(
  UPDATE_MOVIE_CREATE,
  (resultMovieCreate) => ({ resultMovieCreate })
)
