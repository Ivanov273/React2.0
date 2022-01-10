import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return (
        <div>
            <img className={s.main_img}
                 src="https://ostrov-ok.by/assets/images/rekl-rassylka/egipet.jpg" alt=""/>
        </div>
    );
}
export default ProfileInfo;