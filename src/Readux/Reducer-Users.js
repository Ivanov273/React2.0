const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETPAGE = 'SETPAGE'
const TOGLE = 'TOGLE'
const TOGLE_PROGRESS = 'TOGLE_PROGRESS'

let initstate = {
    users: [],
    TotalCount: 50,
    PageSize: 10,
    currentPage: 1,
    isfetching: true,
    isfetchingprogress: []
}

const reducerUsers = (state = initstate, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {

                        return {...u, followed: false}

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
        case TOGLE:
            return {
                ...state,
                isfetching: action.fetching
            }
            case TOGLE_PROGRESS:
            return {
                ...state,
                isfetchingprogress: action.isfetching ?
                    [...state.isfetchingprogress,action.id]
                    : state.isfetchingprogress.filter(id => id!=action.id)
            }
        default:
            return state

    }

}

export const OnFollow = (userid) => ({type: FOLLOW, userid})
export const UnFollow = (userid) => ({type: UNFOLLOW, userid})
export const SetUsers = (users) => ({type: SETUSERS, users})
export const SetPage = (page) => ({type: SETPAGE, page})
export const Togle = (fetching) => ({type: TOGLE, fetching})
export const TogleProgressFetching = (isfetching,id) => ({type: TOGLE_PROGRESS, isfetching,id})
export default reducerUsers