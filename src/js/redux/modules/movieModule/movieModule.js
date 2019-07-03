import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

import {
  getMovieById, updateMovieById, GET_MOVIE_BY_ID, UPDATE_MOVIE_BY_ID,
} from './api/readById';
import {
  getMovieByType, updateMovieByType, GET_MOVIE_BY_TYPE, UPDATE_MOVIE_BY_TYPE,
} from './api/readByType';
import {
  getCreateMovie, updateCreateMovie, GET_MOVIE_CREATE, UPDATE_MOVIE_CREATE,
} from './api/create';
import {
  getMovies, updateMovies, GET_MOVIE, UPDATE_MOVIE,
} from './api/read';
import {
  getMoviesSorted, updateMoviesSorted, GET_MOVIE_SORTED, UPDATE_MOVIE_SORTED,
} from './api/readSorted';

export const constants = {
  GET_MOVIE_BY_ID,
  UPDATE_MOVIE_BY_ID,
  GET_MOVIE_CREATE,
  UPDATE_MOVIE_CREATE,
  GET_MOVIE,
  UPDATE_MOVIE,
  UPDATE_MOVIE_SORTED,
  GET_MOVIE_SORTED,
}

// ------------------------------------
// Actions
// ------------------------------------
export const actions = {
  getMovieById,
  updateMovieById,
  getCreateMovie,
  updateCreateMovie,
  getMovies,
  updateMovies,
  updateMoviesSorted,
  getMoviesSorted,
}

export const reducers = {
  [UPDATE_MOVIE_BY_ID]: (state, { payload }) => state.merge({
    ...payload,
  }),
  [UPDATE_MOVIE_CREATE]: (state, { payload }) => state.merge({
    ...payload,
  }),
  [UPDATE_MOVIE]: (state, { payload }) => state.merge({
    ...payload,
  }),
  [UPDATE_MOVIE_SORTED]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  resultMovieById: '',
  resultMovieCreate: '',
  resultMovie: '',
  resultMovieByType: '',
  resultMovieSorted: '',
  values: '',
})

export default handleActions(reducers, initialState())
