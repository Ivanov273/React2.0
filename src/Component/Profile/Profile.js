import React from 'react';
import s from './Profile.module.css'
import Post from "./MyPosts/MyPost";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./PofileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost ProfilePage={props.ProfilePage}   dispatch={props.dispatch} />

        </div>
    );
}
export default Profile;