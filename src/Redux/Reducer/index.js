import { combineReducers} from "@reduxjs/toolkit";
import User from "./CreateSlice";
import login from "./SinginSlice";
import Register from "./SingupSlice";
import list from "./UserlistSlice"



export default combineReducers({
    User,
    login,
    Register,
    list

})