import { combineReducers, createStore } from "redux";
import handleCart from "./reducers/CartReducer";

 const rootReducer=combineReducers({
    handleCart
})

 const store=createStore(rootReducer);
 export default store;