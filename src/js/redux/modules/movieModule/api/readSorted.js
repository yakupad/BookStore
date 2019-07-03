import { createAction } from 'redux-actions'

export const GET_MOVIE_SORTED = 'app/movie/GET_MOVIE_SORTED'
export const UPDATE_MOVIE_SORTED = 'app/movie/UPDATE_MOVIE_SORTED'

export const getMoviesSorted = createAction(
  GET_MOVIE_SORTED, (sortDirection, sortType) => ({ sortDirection, sortType })
)
export const updateMoviesSorted = createAction(
  UPDATE_MOVIE_SORTED,
  (resultMovieSorted) => ({ resultMovieSorted }),
)
