import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/users';

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}
