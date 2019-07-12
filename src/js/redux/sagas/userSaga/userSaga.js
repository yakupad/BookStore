import {
  fork,
} from 'redux-saga/effects'

import { watchCreateUser } from './watchers/create'
import { watchLoginUser } from './watchers/login'

export const userSaga = [
  fork(watchCreateUser),
  fork(watchLoginUser),
]
