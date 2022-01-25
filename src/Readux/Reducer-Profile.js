const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_PROFILE = 'UPDATE-NEW-TEXT-PROFILE'

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
    newPostText: ''
}
const reducerProfile = (state = initstate, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newtext = {
                id: 9,
                text: state.newPostText,
                like: 5555555555
            }
            let copyState = {...state}
            copyState.PostData = [...state.PostData]
            copyState.PostData.push(newtext)
            copyState.newPostText = ''
            return copyState
        }
        case     UPDATE_NEW_TEXT_PROFILE: {
            let copyState = {...state}
            copyState.newPostText = action.newText
            return copyState
        }
        default:
            return state
    }
}
export const ActionCreatorAddPost = () => ({type: ADD_POST})
export const ActionCreatorUpdatePostText = (text) => ({type: UPDATE_NEW_TEXT_PROFILE, newText: text})
export default reducerProfile