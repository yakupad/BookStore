import { createSelector } from 'reselect'

const movieDataSelector = (state) => state.movieModule

const resultMovieSelector = createSelector(
  movieDataSelector,
  (payload) => payload.get('resultMovie')
)

const resultMovieByIdSelector = createSelector(
  movieDataSelector,
  (payload) => payload.get('resultMovieById')
)

const resultMovieSortedSelector = createSelector(
  movieDataSelector,
  (payload) => payload.get('resultMovieSorted')
)

export const movieSelector = (state) => ({
  resultMovie: resultMovieSelector(state),
  resultMovieById: resultMovieByIdSelector(state),
  resultMovieSorted: resultMovieSortedSelector(state),
})
