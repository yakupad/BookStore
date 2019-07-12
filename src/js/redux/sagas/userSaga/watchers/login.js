import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as userConstants,
  actions as userActions,
} from '../../../modules/userModule/userModule'
import { postLoginUser } from '../../../../common/api/index'

export function* fetchUserLoginData(action) {
  const apiCallResponse = yield call(postLoginUser, action.payload.data);
  const { data } = apiCallResponse;
  yield put(userActions.updateLoginUser(data))
}

export function* watchLoginUser() {
  yield takeLatest(userConstants.USER_LOGIN, fetchUserLoginData)
}
