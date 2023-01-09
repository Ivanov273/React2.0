import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_STATUS = 'EDIT_STATUS'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_PHOTO = 'SET_PHOTO'

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
    profilestatus: 'sssscscs cs',
    profilephoto: ''
}
const reducerProfile = (state = initstate, action) => {

    switch (action.type) {
        case ADD_POST :
            let newelement = {
                id: 9,
                text: action.newPostText,
                like: 5555555555
            }
            return {
                ...state,
                PostData: [...state.PostData, newelement],
                newPostText: action.newPostText
            }

        case     SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.usersprofile
            }
        case     DELETE_POST:
            return {
                ...state,
                PostData: state.PostData.filter(p => p.id != action.idposts)
            }
        case     EDIT_STATUS:
            return {
                ...state,
                profilestatus: action.newprofilestatus
            }

        case     SET_PHOTO:
            return {
                ...state,profile: {...state.profile,photos:action.file}
            }

        default:
            return state
    }
}
export const ActionCreatorAddPost = (newtext) => ({type: ADD_POST, newPostText: newtext})
export const ActionDeletePost = (idposts) => ({type: DELETE_POST, idposts})
export const ActionCreatorEditStatust = (newprofilestatus) => ({type: EDIT_STATUS, newprofilestatus: newprofilestatus})
export const SetUsersProfile = (usersprofile) => ({type: SET_USERS_PROFILE, usersprofile})
export const ActionCreatorSavePhoto = (file) => ({type: SET_PHOTO, file})
export const ProfileThunk = (userid) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userid)
        dispatch(SetUsersProfile(response.data))
    }
}
export const ProfileThunkStatus = (userid) => {
    return async (dispatch) => {
        let response = await usersAPI.apiProfileStatus(userid)
        dispatch(ActionCreatorEditStatust(response.data))
    }
}
export const UpdateProfileThunkStatus = (status) => {
    return async (dispatch) => {
        let response = await usersAPI.apiUpdateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(ActionCreatorEditStatust(status))
        }
    }
}
export const UpdateDataToProfile = (data) => {

    return async (dispatch,getState) => {
        const userId =  getState().Auth.userid
        const response = await usersAPI.apiUpdateDataToProfile(data)
        if (response.data.resultCode === 0) {
            dispatch(ProfileThunk(userId))
        }else {
            dispatch(stopSubmit('profileform',{_error:response.data.messages[0]}))
                //{'contacts':{'facebook': response.data.messages[0]}})) парсинг ошибки
            return Promise.reject(response.data.messages[0])
        }
    }
}
export const ProfileThunksavePhoto = (file) => {
    return async (dispatch) => {
        let response = await usersAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
           dispatch(ActionCreatorSavePhoto(response.data.data.photos))
        }
    }
}

export default reducerProfile