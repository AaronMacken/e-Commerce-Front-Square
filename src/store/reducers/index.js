// root reducer file
import { combineReducers } from "redux";
import checkoutReducers from './checkoutReducers';

const rootReducer = combineReducers({
    checkoutItems: checkoutReducers
});

export default rootReducer;
