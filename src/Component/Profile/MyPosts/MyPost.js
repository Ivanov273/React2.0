import React from 'react';
import Post from "./Post/Post";
import LoginPostFormRedux from "./FormPost";

const MyPost = React.memo(props=> {
    console.log('render')
    console.log(props)
    let PostMass = props.posts.map(p => <Post message={p.text} key={p.id} like={p.like}/>)
    let addPosts = (formData) => {
        props.onaddDialogs(formData.post)
    }
    return (
        <div>
            <div>
                <LoginPostFormRedux onSubmit={addPosts}/>
            </div>
            {PostMass}
        </div>
    );
})

export default MyPost;