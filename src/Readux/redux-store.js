import {combineReducers, createStore} from "redux";
import reducerProfile from "./Reducer-Profile";
import reducerDialog from "./Reducer-Dialog";
import reducerSideBar from "./Reducer-SideBar";
import reducerUsers from "./Reducer-Users";
import reducerAuth from "./Reducer-Auth";

let reducers = combineReducers({
    ProfilePage : reducerProfile,
    DialogPage : reducerDialog,
    SideBar : reducerSideBar,
    usersPage: reducerUsers,
    Auth: reducerAuth
})
let store = createStore(reducers)
window.store = store
export default store