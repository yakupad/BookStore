import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import {
  constants as userConstants,
  actions as userActions,
} from '../../../modules/userModule/userModule'
import { postCreateUser } from '../../../../common/api/index'

export function* fetchUserCreateData(action) {
  const apiCallResponse = yield call(postCreateUser, action.payload.data);
  const { data } = apiCallResponse;
  yield put(userActions.updateCreateUser(data))
}

export function* watchCreateUser() {
  yield takeLatest(userConstants.USER_CREATE, fetchUserCreateData)
}
