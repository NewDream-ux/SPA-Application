import {combineReducers} from "redux";
import  UserDetailReducer  from "./User_Detail_Reducer";
import FavDetailReducer from "./Favourite_Detail_Reducer";

export default combineReducers({
    UserDetailReducer,
    FavDetailReducer
});
