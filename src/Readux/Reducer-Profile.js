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

    if (action.type === 'ADD-POST') {

        let newtext = {
            id: 9,
            text: state.newPostText,
            like: 5555555555
        }

        state.PostData.push(newtext)
        state.newPostText = ''

    } else if (action.type === 'UPDATE-NEW-TEXT-PROFILE') {
        state.newPostText = action.newText

    }

    return state
}
export const ActionCreatorAddPost = () => ({type: ADD_POST})
export const ActionCreatorUpdatePostText = (text) => ({type: UPDATE_NEW_TEXT_PROFILE, newText: text})
export default reducerProfile