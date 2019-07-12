import { handleActions } from 'redux-actions'
import { Map } from 'immutable'

import {
  getCreateUser, updateCreateUser, USER_CREATE, UPDATE_USER_CREATE,
} from './actions/create';

import {
  getLoginUser, updateLoginUser, USER_LOGIN, UPDATE_USER_LOGIN,
} from './actions/login';

export const constants = {
  USER_CREATE,
  UPDATE_USER_CREATE,
  USER_LOGIN,
  UPDATE_USER_LOGIN,
}

// ------------------------------------
// Actions
// ------------------------------------
export const actions = {
  getCreateUser,
  updateCreateUser,
  getLoginUser,
  updateLoginUser,
}

export const reducers = {
  [UPDATE_USER_CREATE]: (state, { payload }) => state.merge({
    ...payload,
  }),
  [UPDATE_USER_LOGIN]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  resultUserCreate: '',
  resultUserLogin: '',
  values: '',
})

export default handleActions(reducers, initialState())
