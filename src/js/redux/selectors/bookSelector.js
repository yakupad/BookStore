import { createSelector } from 'reselect'

const bookDataSelector = (state) => state.bookModule

const resultSelector = createSelector(
  bookDataSelector,
  (payload) => payload.get('result')
)

export const bookSelector = (state) => ({
  result: resultSelector(state),
})

const resultSelector1 = createSelector(
  bookDataSelector,
  (payload) => payload.get('resultBookByAuthor')
)

export const bookSelector1 = (state) => ({
  resultBookByAuthor: resultSelector1(state),
})

const resultSelector2 = createSelector(
  bookDataSelector,
  (payload) => payload.get('values')
)

export const bookSelector2 = (state) => ({
  resultBookByAuthor: resultSelector2(state),
})
