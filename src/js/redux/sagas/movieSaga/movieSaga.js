import {
  fork,
} from 'redux-saga/effects'

import { watchGetMovieById } from './api/readById'


export const movieSaga = [fork(watchGetMovieById)]
