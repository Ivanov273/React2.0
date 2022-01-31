const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initstate = {
    users: [

    ]
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
           console.log(state)
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
                users: [...state.users,...action.users]
            }
        default:
            return state

    }

}
export const FollowUserAC = (userid) => ({type: FOLLOW,userid})
export const UnFollowUserAC = (userid) => ({type: UNFOLLOW, userid})
export const SetUsersAC = (users) => ({type: SETUSERS, users})
export default reducerUsers