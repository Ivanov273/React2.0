import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let PostMass = props.PostData.map(p=><Post message={p.text} like={p.like} />)
    let lementPost = React.createRef()
let addPost2 = ()=>{
   let text = lementPost.current.value
    props.addPost(text)
    lementPost.current.value = '';

}
    return (
        <div>
            <div>
                <textarea name="" ref={lementPost} cols="30" rows="1"></textarea>
                <button onClick={addPost2}>добавить</button>
                <button>удалить</button>
            </div>
            {PostMass}
        </div>
    );
}
export default MyPost;