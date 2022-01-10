import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let PostMass = props.PostData.map(p=><Post message={p.text} like={p.like} />)

    return (
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="1"></textarea>
                <button>добавить</button>
                <button>удалить</button>
            </div>
            {PostMass}
        </div>
    );
}
export default MyPost;