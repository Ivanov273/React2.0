import React from 'react';
import s from './Profile.module.css'
const Profile = () =>{
    return (
        <div className={s.Profile}>
            <div>
                <img className={s.main_img}
                     src="https://ostrov-ok.by/assets/images/rekl-rassylka/egipet.jpg" alt=""/>
            </div>
            <div>
                <div className={s.user_photo}>
                    <img
                        src="https://doctor-veterinar.ru/media/k2/items/cache/675d28c04794e3c683f4419536c4c15f_L.jpg"
                        alt=""/></div>
                <div>My posts</div>
                <div>New posts</div>
                <div>posts1</div>
                <div>posts1</div>
            </div>
        </div>
    );
}
export default Profile;