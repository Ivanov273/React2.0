import React from 'react';
import s from './Profile.module.css'
import Post from "./MyPosts/MyPost";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./PofileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost PostData={props.PostData} addPost={props.addPost} />
            csacsacsacsacsacsaca
        </div>
    );
}
export default Profile;