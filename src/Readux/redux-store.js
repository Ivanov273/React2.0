import {combineReducers, createStore} from "redux";
import reducerProfile from "./Reducer-Profile";
import reducerDialog from "./Reducer-Dialog";
import reducerSideBar from "./Reducer-SideBar";

let reducers = combineReducers({
    ProfilePage : reducerProfile,
    DialogPage : reducerDialog,
    SideBar : reducerSideBar
})
let store = createStore(reducers)
window.store = store
export default store