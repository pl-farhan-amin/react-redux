import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import cartReducer from "./reducers/cartSlice";
import createSagaMiddleware from 'redux-saga';
import userReducer from "./reducers/userSlice";
import { watcherSaga } from "./sagas/rootSagas";

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    cartReducer: cartReducer,
    userReducer: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({ reducer: rootReducer, middleware });

sagaMiddleware.run(watcherSaga);

export default store;