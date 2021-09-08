import changeTheNumber from "./changeNumber";

import { combineReducers } from 'redux';
import listReducer from "./listReducer";
import cartReducer from "./cartReducer";
// import userReducer from "./userReducer,js";


const rootReducer = combineReducers({
    changeTheNumber,
    listReducer,
    cartReducer,
    // userReducer
})

export default rootReducer;