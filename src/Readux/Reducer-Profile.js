import {ProfileAPI, usersAPI} from "../api/api";
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_PROFILE = 'UPDATE-NEW-TEXT-PROFILE'
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
    newPostText: 'It kamasutra',
    profile: null,
    profilestatus: '5grgergerg'
}
const reducerProfile = (state = initstate, action) => {

    switch (action.type) {
        case ADD_POST :
            let newelement = {
                id: 9,
                text: state.newPostText,
                like: 5555555555
            }
            return {
                ...state,
                PostData: [...state.PostData, newelement],
                newPostText: ''
            }
        case     UPDATE_NEW_TEXT_PROFILE:
            return {
                ...state,
                newPostText: action.newText
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
export const ActionCreatorAddPost = () => ({type: ADD_POST})
export const ActionCreatorUpdatePostText = (text) => ({type: UPDATE_NEW_TEXT_PROFILE, newText: text})
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