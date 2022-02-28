import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from "../../../img/rik.jpg";
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={s.main}>
<div>
        <div>
            <img className={s.userImage}
                 src={props.profile.photos.large != null ? props.profile.photos.small : userPhoto}/>
        </div>

        <div>
            {props.profile.fullName}
        </div>
</div>
        <ProfileStatus status={'hi i`m Mike'}  profilestatus={props.profilestatus} updateStatus={props.updateStatus} />

    </div>
}
export default ProfileInfo;