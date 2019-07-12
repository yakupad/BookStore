import { createAction } from 'redux-actions'

export const USER_CREATE = 'app/user/USER_CREATE'
export const UPDATE_USER_CREATE = 'app/user/UPDATE_USER_CREATE'

export const getCreateUser = createAction(
  USER_CREATE, (data) => ({ data })
)
export const updateCreateUser = createAction(
  UPDATE_USER_CREATE,
  (resultUserCreate) => ({ resultUserCreate })
)
