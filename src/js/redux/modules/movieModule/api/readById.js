import { createAction } from 'redux-actions'

export const GET_MOVIE_BY_ID = 'app/movie/GET_MOVIE_BY_ID'
export const UPDATE_MOVIE_BY_ID = 'app/movie/UPDATE_MOVIE_BY_ID'

export const getMovieById = createAction(
  GET_MOVIE_BY_ID, () => ({})
)
export const updateMovieById = createAction(
  UPDATE_MOVIE_BY_ID,
  (resultMovieById) => ({ resultMovieById })
)
