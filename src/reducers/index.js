import auth from "./auth";
import { combineReducers } from "redux";
import cartitems from "./cartitems";


const AllReducers = combineReducers({
    auth:auth,
    cartitems:cartitems
})


export default AllReducers;