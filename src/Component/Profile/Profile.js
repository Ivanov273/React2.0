import React from 'react';
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props} UpdateDataToProfile={props.UpdateDataToProfile} UpdateProfileThunkStatus={props.UpdateProfileThunkStatus} profilephoto={props.profilephoto} profilestatus={props.profilestatus} profile={props.profile} isowner={props.isowner} ProfileThunksavePhoto={props.ProfileThunksavePhoto} />
            <MyPostContainer  />

        </div>
    );
}
export default Profile;