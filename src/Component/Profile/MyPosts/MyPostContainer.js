import React from 'react';

import {ActionCreatorAddPost, ActionCreatorUpdatePostText} from "../../../Readux/Reducer-Profile";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.newPostText,
        posts: state.ProfilePage.PostData
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        onPostChange: (text)=> {
                   dispatch(ActionCreatorUpdatePostText(text));
                    },
        onaddDialogs: ()=>{

                dispatch(ActionCreatorAddPost());

        }
    }
}
const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)


export default MyPostContainer;