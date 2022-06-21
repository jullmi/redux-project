import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {cashReducer} from "./cashReduser";
import {customerReducer} from "./customerReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
