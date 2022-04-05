import reducerProfile, {ActionCreatorAddPost, ActionCreatorDeletePost} from "./Reducer-Profile";
import React from "react";
let state =  {
    PostData: [
        {id: 1, text: '5555555555555', like: 22},
        {id: 2, text: 'acascascascsac', like: 22},
        {id: 3, text: 'acascascascsac', like: 22},
        {id: 4, text: 'acascascascsac', like: 22},
        {id: 5, text: 'acascascascsac', like: 22},
        {id: 6, text: 'acascascascsac', like: 22},
        {id: 7, text: 'acascavdvdvdscascsac', like: 22}
    ]
}
it ('test for length',()=>{

    let action = ActionCreatorAddPost('it kamasutra')
    let newstate = reducerProfile (state,action)
    expect(newstate.PostData.length).toBe(8)
})
it ('test for has text',()=>{

    let action = ActionCreatorAddPost('it kamasutra')
    let newstate = reducerProfile (state,action)
    expect(newstate.PostData[7].text).toBe("it kamasutra")
})
it ('test for delete',()=>{

    let action = ActionCreatorDeletePost(5)
    let newstate = reducerProfile (state,action)
    expect(newstate.PostData.length).toBe(6)
})