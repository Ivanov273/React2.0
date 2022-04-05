import React from 'react';
import Post from "./Post/Post";
import LoginPostFormRedux from "./FormPost";

const MyPost = React.memo(props=> {
    let PostMass = [...props.posts].reverse().map(p => <Post message={p.text} key={p.id} like={p.like}/>)


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