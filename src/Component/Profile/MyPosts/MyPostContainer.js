import React from 'react';

import {ActionCreatorAddPost, ActionCreatorUpdatePostText} from "../../../Readux/Reducer-Profile";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (props) => {

    //let state = props.store.getState()
    //let posts = state.ProfilePage.PostData
    //let newPostText = state.ProfilePage.newPostText

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let newText = store.getState().ProfilePage.newPostText
                    let onaddDialogs = () => {
                        store.dispatch(ActionCreatorAddPost())
                    }
                    const updateOnPostChange = (text) => {
                        let newVar = ActionCreatorUpdatePostText(text)
                        store.dispatch(newVar)
                    }
                    return <MyPost newPostText={newText}
                                   posts={store.getState().ProfilePage.PostData}
                                   onaddDialogs={onaddDialogs}
                                   onPostChange={updateOnPostChange}/>
                }
            }

        </StoreContext.Consumer>
    );
}
export default MyPostContainer;