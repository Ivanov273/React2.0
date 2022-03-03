import React from 'react';
import {ActionCreatorAddPost} from "../../../Readux/Reducer-Profile";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.newPostText,
        posts: state.ProfilePage.PostData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onaddDialogs: (postvalue) => {
            dispatch(ActionCreatorAddPost(postvalue));
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer;