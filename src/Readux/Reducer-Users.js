

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETPAGE = 'SETPAGE'

let initstate = {
    users: [

    ],
    TotalCount: 50,
    PageSize: 10,
    currentPage: 1
}

const reducerUsers = (state = initstate, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
        ...state,
       users: state.users.map(u=>{
           if (u.id === action.userid){
               return {...u,followed: true}
           }
               return u
       })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userid){

                        return {...u,followed: false}

                    }
                    return u

                })

            }
        case SETUSERS:
            return {
                ...state,
                users: [...action.users]
            }
            case SETPAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state

    }

}
export const FollowUserAC = (userid) => ({type: FOLLOW,userid})
export const UnFollowUserAC = (userid) => ({type: UNFOLLOW, userid})
export const SetUsersAC = (users) => ({type: SETUSERS, users})
export const SetPagesAC = (page) => ({type: SETPAGE, page})
export default reducerUsers