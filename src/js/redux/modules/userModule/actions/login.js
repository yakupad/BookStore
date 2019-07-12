import { createAction } from 'redux-actions'

export const USER_LOGIN = 'app/user/USER_LOGIN'
export const UPDATE_USER_LOGIN = 'app/user/UPDATE_USER_LOGIN'

export const getLoginUser = createAction(
  USER_LOGIN, (data) => ({ data })
)
export const updateLoginUser = createAction(
  UPDATE_USER_LOGIN,
  (resultUserLogin) => ({ resultUserLogin })
)
