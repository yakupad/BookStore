import { createAction } from 'redux-actions'

export const GET_MOVIE = 'app/movie/GET_MOVIE'
export const UPDATE_MOVIE = 'app/movie/UPDATE_MOVIE'

export const getMovies = createAction(
  GET_MOVIE, () => ({})
)
export const updateMovies = createAction(
  UPDATE_MOVIE,
  (resultMovie) => ({ resultMovie }),
  (result) => ({ result })
)
