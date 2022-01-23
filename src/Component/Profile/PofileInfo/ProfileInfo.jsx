import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return (
        <div>
            <img className={s.main_img}
                 src="https://bessarabiainform.com/wp-content/uploads/2019/02/continuous-integration-for-react-native.png" alt=""/>
        </div>
    );
}
export default ProfileInfo;