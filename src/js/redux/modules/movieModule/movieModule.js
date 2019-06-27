import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

import {
  getMovieById, updateMovieById, GET_MOVIE_BY_ID, UPDATE_MOVIE_BY_ID,
} from './api/readById';
import {
  getCreateMovie, updateCreateMovie, GET_MOVIE_CREATE, UPDATE_MOVIE_CREATE,
} from './api/create';

const UPDATE_STATE = 'app/UPDATE_STATE'

export const constants = {
  GET_MOVIE_BY_ID,
  UPDATE_MOVIE_BY_ID,
  GET_MOVIE_CREATE,
  UPDATE_MOVIE_CREATE,
  UPDATE_STATE,
}

// ------------------------------------
// Actions
// ------------------------------------
export const updateSearchValue = createAction(
  UPDATE_STATE,
  (values) => ({ values })
)

export const actions = {
  getMovieById,
  updateMovieById,
  getCreateMovie,
  updateCreateMovie,
  updateSearchValue,
}

export const reducers = {
  [UPDATE_MOVIE_BY_ID]: (state, { payload }) => state.merge({
    ...payload,
  }),
  [UPDATE_MOVIE_CREATE]: (state, { payload }) => state.merge({
    ...payload,
  }),
  [UPDATE_STATE]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  resultMovieById: '',
  values: '',
})

export default handleActions(reducers, initialState())
