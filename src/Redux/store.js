import {configureStore} from "@reduxjs/toolkit";
import combineReducer from "./Reducer/RootReducer";
import UserSaga from "./Middleware/User_Detail_Saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
 const store = configureStore({
    reducer:combineReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(UserSaga);

 export default store;