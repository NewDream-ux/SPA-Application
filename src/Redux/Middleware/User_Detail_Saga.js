import { USER_DETAILS, SET_USER_DETAILS, FAVOURITE_LIST, SET_FAVOURITE_LIST, REMOVE_FAVOURITE_LIST } from "../ReduxConstant";
import { takeEvery, put } from "redux-saga/effects";
import { apiEndPoints } from "../../Constants/Constant";

function* getUserData() {
    const { useList } = apiEndPoints;
    let result = yield fetch(useList);
    result = yield result.json();
    yield put({ type: SET_USER_DETAILS, data: result })
}

function* getFavouriteData(favData) {
    yield put({ type: SET_FAVOURITE_LIST, data: favData.data })
}

export default function* UserDetailSaga() {
    yield takeEvery(USER_DETAILS, getUserData);
    yield takeEvery(FAVOURITE_LIST, getFavouriteData);
}