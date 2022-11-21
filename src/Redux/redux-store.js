import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerProfile from "./Reducer-Profile";
import reducerDialog from "./Reducer-Dialog";
import reducerSideBar from "./Reducer-SideBar";
import reducerUsers from "./Reducer-Users";
import reducerAuth from "./Reducer-Auth";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import reducerApp from "./Reducer-App";
let reducers = combineReducers({
    ProfilePage: reducerProfile,
    DialogPage: reducerDialog,
    SideBar: reducerSideBar,
    usersPage: reducerUsers,
    Auth: reducerAuth,
    form: formReducer,
    app: reducerApp
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store