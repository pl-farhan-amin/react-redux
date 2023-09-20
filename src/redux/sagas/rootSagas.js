import { takeLatest } from "redux-saga/effects";
import handleGetUsers from "./handlers/user";
import { getUser } from "../reducers/userSlice";

export function* watcherSaga(){
    yield takeLatest(getUser.type,handleGetUsers);
}