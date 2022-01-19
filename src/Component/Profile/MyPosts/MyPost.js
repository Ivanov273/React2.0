import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let PostMass = props.ProfilePage.PostData.map(p=><Post message={p.text} like={p.like} />)
    let lementPost = React.createRef()
let addPost2 = ()=>{
   let text = props.ProfilePage.newPostText
    props.dispatch({type: 'ADD-POST'})

    //lementPost.current.value = '';

}
let OnPostChange = ()=>{

    let text = lementPost.current.value
    let newVar = {type: 'UPDATE-NEW-TEXT',newText:text}
    props.dispatch(newVar)


}
    return (
        <div>
            <div>
                <textarea name="" ref={lementPost}  value={props.ProfilePage.newPostText} onChange={OnPostChange}></textarea>
                <button onClick={addPost2}>добавить</button>
                <button>удалить</button>
            </div>
            {PostMass}
        </div>
    );
}
export default MyPost;