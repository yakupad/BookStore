import {
  fork,
} from 'redux-saga/effects'

import { watchGetMovieById } from './api/readById'
import { watchCreateMovie } from './api/create'

export const movieSaga = [fork(watchGetMovieById), fork(watchCreateMovie)]
