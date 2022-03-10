import {LoginAPI, usersAPI as loginAPI, usersAPI} from "../api/api";

const SETAUTH = 'SETAUTH'
const DELETE_SETAUTH = 'DELETE_SETAUTH'

let initstate = {
    userid: '',
    login: '',
    email: '',
    isAuth: false
}
const reducerAuth = (state = initstate, action) => {
    switch (action.type) {
        case SETAUTH:
           return {
               ...state,
               ...action.payload
           }
           case DELETE_SETAUTH:
           return {
               ...state,
              ...action.payload
           }
        default:
            return state
    }
}
export const SetAuth = (id,login,email,isAuth) => ({type: SETAUTH,payload:{id,login,email,isAuth}})
export const SetAuthdelete = (id,login,email,isAuth) => ({type: DELETE_SETAUTH,payload:{id,login,email,isAuth}})
export const AuthThunk = (dispatch)=> {
    return (dispatch)=> {
        usersAPI.apiAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data
                dispatch(SetAuth(id,login,email,true))
           }
    })
}
}
export const LoginThunk = (email,password,rememberMe)=> {

    return (dispatch)=> {
        LoginAPI.authorize(email,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(AuthThunk())
           }
    })
}
}
export const deleteLogin = ()=> {
    return (dispatch)=> {
        LoginAPI.deleteauthorize().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuth(null,null,null,false))
           }
    })
}
}

export default reducerAuth