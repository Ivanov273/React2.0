import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SETAUTH = 'SETAUTH'
const SETCAPTCHA = 'SETCAPTCHA'

let initstate = {
    userid: '',
    login: '',
    email: '',
    isAuth: 'false',
    dataurl: ''
}
const reducerAuth = (state = initstate, action) => {
    switch (action.type) {
        case SETAUTH:
            case SETCAPTCHA:

            return {
                ...state,
                ...action.payload

            }
        default:
            return state
    }
}
export const SetAuth = (userid, login, email, isAuth) => ({type: SETAUTH, payload: {userid, login, email, isAuth}})
export const SetCaptcha = (dataurl) => ({type: SETCAPTCHA,payload: {dataurl}})
export const AuthThunk = () => async (dispatch) => {
    let response = await usersAPI.apiAuth()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(SetAuth(id, login, email, true))
    }
}
export const AuthThunkLogin = (email, password, rememberMe,captcha) => async (dispatch) => {
    let response = await usersAPI.apiLogin(email, password, rememberMe,captcha)
        if (response.data.resultCode === 0) {
            dispatch(AuthThunk())
        } else if (response.data.resultCode === 10){
            dispatch(AuthThunkCaptcha())
            dispatch(AuthThunk())
        }else{
            dispatch(stopSubmit('loginform', {_error: response.data.messages[0]}))
        }
}
export const AuthThunkDeleteLogin = () => {
    return async (dispatch) => {
        let response = await usersAPI.apiDeleteLogin()
                    if (response.data.resultCode === 0) {
                dispatch(SetAuth(null, null, null, false))
            }
    }
}
export const AuthThunkCaptcha = () => {
    return async (dispatch) => {
        let response = await usersAPI.apiCaptcha()

        dispatch(SetCaptcha(response.data.url))
    }
}

export default reducerAuth