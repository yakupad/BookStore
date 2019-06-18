import {
  put, fork, takeLatest, call, select,
} from 'redux-saga/effects'
import {
  constants as bookConstants,
  actions as bookActions,
} from '../modules/bookModule'
import { getBooksByBarcode, getBooksByAuthor } from '../../common/api/index'
import type { bookType } from '../../common/types/bookType'
import { bookSelector, bookSelector1, bookSelector2 } from '../../redux/selectors/bookSelector'

export const getProject = (state) => state.bookModule

export function* fetchBookData() {
  const project = yield select(getProject);
  const apiCallResponse = yield call(getBooksByBarcode, project.get('values').value);
  const { data } = apiCallResponse;
  const resultArray: Array<bookType> = [];

  data.forEach((element) => {
    const result: bookType = {
      author: element.author,
      barcode: element.barcode,
      category: element.category,
      id: element.id,
      isActive: element.isActive,
      name: element.name,
      pageSize: 123,
      printedYear: 123,
      publisher: 'null',
    }
    resultArray.push(result);
  });

  yield put(bookActions.updateBook(resultArray, 'barcode'))
}

function* watchGetBook() {
  yield takeLatest(bookConstants.GET_BOOK, fetchBookData)
}

export function* fetchBookByAuthorData() {
  const apiCallResponse = yield call(getBooksByAuthor, 'Seth Stephens');
  const { data } = apiCallResponse;
  const resultArray: Array<bookType> = [];

  data.forEach((element) => {
    const result: bookType = {
      author: element.author,
      barcode: element.barcode,
      category: element.category,
      id: element.id,
      isActive: element.isActive,
      name: element.name,
      pageSize: 123,
      printedYear: 123,
      publisher: 'null',
    }
    resultArray.push(result);
  });

  yield put(bookActions.updateBook(resultArray, 'author'))
}

function* watchBookByAuthor() {
  yield takeLatest(bookConstants.GET_BOOK, fetchBookByAuthorData)
}

export const bookSaga = [fork(watchGetBook), fork(watchBookByAuthor)]
