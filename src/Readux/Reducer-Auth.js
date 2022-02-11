import {usersAPI} from "../api/api";

const SETAUTH = 'SETAUTH'

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
               ...action.data,
               isAuth : true
           }
        default:
            return state
    }
}
export const SetAuth = (id,login,email) => ({type: SETAUTH,data:{id,login,email}})
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

export default reducerAuth