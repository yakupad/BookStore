import { createAction } from 'redux-actions'

export const MOVIE_CREATE = 'app/movie/MOVIE_CREATE'
export const UPDATE_MOVIE_CREATE = 'app/movie/UPDATE_MOVIE_CREATE'

export const getCreateMovie = createAction(
  MOVIE_CREATE, () => ({})
)
export const updateCreateMovie = createAction(
  UPDATE_MOVIE_CREATE,
  (resultMovieCreate) => ({ resultMovieCreate })
)
