import React from 'react';
import s from './Profile.module.css'
import Post from "./MyPosts/MyPost";
import MyPost from "./MyPosts/MyPost";
const Profile = () =>{
    return (
        <div>
            <div>
                <img className={s.main_img}
                     src="https://ostrov-ok.by/assets/images/rekl-rassylka/egipet.jpg" alt=""/>
            </div>
<MyPost/>
          </div>
    );
}
export default Profile;