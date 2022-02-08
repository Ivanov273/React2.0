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
export default reducerAuth