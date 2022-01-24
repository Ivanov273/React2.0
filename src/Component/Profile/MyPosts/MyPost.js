import React from 'react';
import Post from "./Post/Post";

const MyPost = (props) => {

    let PostMass = props.posts.map(p => <Post message={p.text} like={p.like}/>)
    let addPost = () => {
        props.onaddDialogs()
    }
    let OnPostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    }
    return (
        <div>
            <div>
                <textarea value={props.newPostText} placeholder='Enter your message'
                          onChange={OnPostChange}></textarea>
                <button onClick={addPost}>добавить</button>
                <button>удалить</button>
            </div>
            {PostMass}
        </div>
    );
}
export default MyPost;