import {
  fork,
} from 'redux-saga/effects'

import { watchGetMovieById } from './watchers/readById'
import { watchCreateMovie } from './watchers/create'
import { watchGetMovie } from './watchers/read'
import { watchGetMovieSorted } from './watchers/readSorted'

export const movieSaga = [
  fork(watchGetMovieById),
  fork(watchCreateMovie),
  fork(watchGetMovie),
  fork(watchGetMovieSorted),
]
