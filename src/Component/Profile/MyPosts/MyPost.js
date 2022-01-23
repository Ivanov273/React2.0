import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {ActionCreatorAddPost, ActionCreatorUpdatePostText} from "../../../Readux/Reducer-Profile";

const MyPost = (props) => {

    let PostMass = props.ProfilePage.PostData.map(p => <Post message={p.text} like={p.like}/>)

    let addPost2 = () => {

        props.dispatch(ActionCreatorAddPost())
    }
    let OnPostChange = (e) => {
        let text = e.target.value
        let newVar = ActionCreatorUpdatePostText(text)
        props.dispatch(newVar)
    }
    return (
        <div>
            <div>
                <textarea   value={props.ProfilePage.newPostText} placeholder='Enter your message'
                          onChange={OnPostChange}></textarea>
                <button onClick={addPost2}>добавить</button>
                <button>удалить</button>
            </div>
            {PostMass}
        </div>
    );
}
export default MyPost;