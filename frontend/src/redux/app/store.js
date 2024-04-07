import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";
import {customerProductReducer} from "../reducers/productReducer";
import { cartReducer } from "../reducers/cartReducer";
import {orderReducer} from "../reducers/orderReducer";

const rootReducer = combineReducers({
   auth: authReducer,
   product: customerProductReducer,
   cart:cartReducer,
   order:orderReducer,
});

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;
