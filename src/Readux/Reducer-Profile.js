import {profileAPI} from "../api/ProfileApi";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_PROFILE = 'UPDATE-NEW-TEXT-PROFILE'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

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
    profile: null
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

        default:
            return state
    }
}
export const ActionCreatorAddPost = () => ({type: ADD_POST})
export const ActionCreatorUpdatePostText = (text) => ({type: UPDATE_NEW_TEXT_PROFILE, newText: text})
export const SetUsersProfile = (usersprofile) => ({type: SET_USERS_PROFILE, usersprofile})
export const ProfileThunk = (userid) =>{
    return (dispatch)=>{
        profileAPI.getProfile(userid).then(response => {

            dispatch(SetUsersProfile(response.data))
        })
    }
}
export default reducerProfile