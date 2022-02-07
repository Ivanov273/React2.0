import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from "../../../img/rik.jpg";
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) =>{
     if (!props.profile)
     {
         return <Preloader />
     }

    return         <div>
<div>
    <img className={s.main_img}
         src="https://bessarabiainform.com/wp-content/uploads/2019/02/continuous-integration-for-react-native.png" alt=""/>
</div>
        <div>
            <img className={s.userImage} src={props.profile.photos.large !=null ? props.profile.photos.small:userPhoto} />
        </div>

<div>
    {props.profile.fullName}
</div>
        <div>
    {props.profile.userId}
</div>



        </div>
}
export default ProfileInfo;