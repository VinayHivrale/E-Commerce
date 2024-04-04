import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import {customerProductReducer} from "../reducers/productReducer";
import { cartReducer } from "../reducers/cartReducer";

const rootReducer = combineReducers({
   auth: authReducer,
   product: customerProductReducer,
   cart:cartReducer
});

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;
