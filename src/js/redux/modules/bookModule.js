import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import { bookType } from '../../common/types/bookType'

const GET_BOOK = 'app/book/GET_BOOK'
const UPDATE_BOOK = 'app/book/UPDATE_BOOK'

export const constants = {
  GET_BOOK,
  UPDATE_BOOK,
}

// ------------------------------------
// Actions
// ------------------------------------
export const getAwesomeCode = createAction(GET_BOOK, () => ({}))
export const updateBook = createAction(
  UPDATE_BOOK,
  (result, actionType) => {
    switch (actionType) {
      case 'barcode':
        return { result };
      case 'author':
        return { resultBookByAuthor: result };
      default:
        break;
    }
    return { result };
  }
)
export const updateState = createAction(
  UPDATE_BOOK,
  (values) => ({ values })
)

export const actions = {
  getAwesomeCode,
  updateBook,
  updateState,
}

export const reducers = {
  [UPDATE_BOOK]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  result: '',
  resultBookByAuthor: '',
  values: '',
})

export default handleActions(reducers, initialState())
