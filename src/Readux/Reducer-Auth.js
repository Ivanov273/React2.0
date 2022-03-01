import {LoginAPI, usersAPI as loginAPI, usersAPI} from "../api/api";

const SETAUTH = 'SETAUTH'
const SETLOGIN = 'SETLOGIN'

let initstate = {
    userid: '',
    login: '',
    email: '',
    isAuth: false,
    login2: 'adasdasd',
    password: null,
    rememberMe: false
}
const reducerAuth = (state = initstate, action) => {
    switch (action.type) {
        case SETAUTH:
           return {
               ...state,
               ...action.data,
               isAuth : true
           }
           case SETLOGIN:
           return {
               ...state,
               login2: action.login,
               password: action.password,
               rememberMe : action.rememberMe
           }
        default:
            return state
    }
}
export const SetAuth = (id,login,email) => ({type: SETAUTH,data:{id,login,email}})
export const setLogin = (login,password,rememberMe) => ({type: SETLOGIN,login,password,rememberMe})
export const AuthThunk = (dispatch)=> {
    return (dispatch)=> {
        usersAPI.apiAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data
                dispatch(SetAuth(id,login,email))
           }
    })
}
}
export const LoginThunk = (login,password,rememberMe)=> {
    debugger
    return (dispatch)=> {
        LoginAPI.authorize(login,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                //let {id,login,email} = response.data.data
                console.log('assssassssssa')
                dispatch(setLogin(login,password,rememberMe))
           }
    })
}
}

export default reducerAuth