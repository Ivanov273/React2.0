import {ProfileAPI, usersAPI} from "../api/api";
const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'
const UPDATE_STATUS_PROFILE = 'UPDATE_STATUS_PROFILE'

let initstate = {
    PostData: [
        {id: 1, text: '5555555555555', like: 22},
        {id: 2, text: 'acascascascsac', like: 22},
        {id: 3, text: 'acascascascsac', like: 22},
        {id: 4, text: 'acascascascsac', like: 22},
        {id: 5, text: 'acascascascsac', like: 22},
        {id: 6, text: 'acascascascsac', like: 22},
        {id: 7, text: 'acascavdvdvdscascsac', like: 22}
    ],
    profile: null,
    profilestatus: '5grgergerg'
}
const reducerProfile = (state = initstate, action) => {

    switch (action.type) {
        case ADD_POST :
            let newelement = {
                id: 9,
                text: action.postvalue,
                like: 5555555555
            }
            return {
                ...state,
                PostData: [...state.PostData, newelement]
            }
            case     SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.usersprofile
            }
            case     SET_STATUS_PROFILE:
            return {
                ...state,
                profilestatus: action.status
            }
            case     UPDATE_STATUS_PROFILE:
            return {
                ...state,
                profilestatus: action.status
            }

        default:
            return state
    }
}
export const ActionCreatorAddPost = (postvalue) => ({type: ADD_POST,postvalue})
export const SetUsersProfile = (usersprofile) => ({type: SET_USERS_PROFILE, usersprofile})
export const SetStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status})
export const ProfileThunk = (userid) =>{
    return (dispatch)=>{
        usersAPI.getProfile(userid).then(response => {

            dispatch(SetUsersProfile(response.data))
        })
    }
}
export const ProfileStatusThunk = (userid) =>{
    return (dispatch)=>{
        ProfileAPI.getStatus(userid).then(response => {

            dispatch(SetStatusProfile(response.data))
        })
    }
}
export const UpdateProfileStatusThunk = (status) =>{
    return (dispatch)=>{
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(SetStatusProfile(status))
        })
    }
}
export default reducerProfile