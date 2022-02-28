import React from 'react';
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} profilestatus={props.profilestatus} updateStatus={props.updateStatus} />
            <MyPostContainer  />

        </div>
    );
}
export default Profile;