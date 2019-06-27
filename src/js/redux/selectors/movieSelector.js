import { createSelector } from 'reselect'

const movieDataSelector = (state) => state.movieModule

const resultSelector = createSelector(
  movieDataSelector,
  (payload) => payload.get('resultMovieById')
)

export const movieSelector = (state) => ({
  result: resultSelector(state),
})
