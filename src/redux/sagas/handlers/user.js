import { put } from "redux-saga/effects";
import { setUser, userRequestFail } from "../../reducers/userSlice";
import { BASE_URL } from "../../../constants";

export default function* handleGetUsers() {
    try {
        const response = yield fetch(BASE_URL);
        const data = yield response.json();
        yield put(setUser(data));
      } catch (error) {
        yield put(userRequestFail(error.message));
      }
    
}