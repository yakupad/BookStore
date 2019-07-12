import { createSelector } from 'reselect'

const UserDataSelector = (state) => state.UserModule

const resultUserSelector = createSelector(
  UserDataSelector,
  (payload) => payload.get('resultUser')
)

export const UserSelector = (state) => ({
  resultUser: resultUserSelector(state),
})
