import React from 'react';

import {ActionCreatorAddPost, ActionCreatorUpdatePostText} from "../../../Readux/Reducer-Profile";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    let state = props.store.getState()
    let posts = state.ProfilePage.PostData
    let newPostText = state.ProfilePage.newPostText
    let onaddDialogs = () => {
        props.store.dispatch(ActionCreatorAddPost())
    }
    const updateOnPostChange = (text) => {
        let newVar = ActionCreatorUpdatePostText(text)
        props.store.dispatch(newVar)
    }
    return (
        <MyPost newPostText={newPostText} posts={posts} onaddDialogs={onaddDialogs} onPostChange={updateOnPostChange}/>
    );
}
export default MyPostContainer;