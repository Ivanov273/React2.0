const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_TEXT_DIALOG = 'UPDATE-NEW-TEXT-DIALOG'
let initstate = {
    TextData: [
        {id: 1, text: '4444444'},
        {id: 2, text: 'acascascascsac'},
        {id: 3, text: 'dvsvsdacascascascsac'},
        {id: 4, text: 'acascascascsac'}
    ],
    DialogData: [
        {id: 1, name: 'Mikee'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Mikee'},
        {id: 4, name: 'Mikee'},
        {id: 5, name: 'Ylia'}
    ],
    newDialog: ''
}
const reducerDialog = (state = initstate,action)=> {

    switch (action.type) {
        case ADD_DIALOG: {

            let newnext = {
                id: 5,
                text: state.newDialog
            }
            let copyState = {...state}
             copyState.TextData = [...state.TextData]
            copyState.TextData.push(newnext)
            copyState.newDialog = ''
            return copyState
        }
        case UPDATE_NEW_TEXT_DIALOG: {
            let copyState = {...state}

            copyState.newDialog = action.newText
            return copyState
        }
        default:
            return state
    }

}
export const ActionCreatorAddDialog = () => ({type: ADD_DIALOG})
export const ActionCreatorUpdateDialogText = (text) => ({type: UPDATE_NEW_TEXT_DIALOG, newText: text})
export default reducerDialog