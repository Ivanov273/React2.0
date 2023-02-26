import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from "../../../img/rik.jpg";
import Preloader from "../../Common/Preloader";
import ProfileStratus from "./ProfileStatus";
import ProfileEdit from "./ProfileEdit";
import ProfileFormRedux from "./ProfileEdit";
import {UpdateDataToProfile} from "../../../Redux/Reducer-Profile";

const ProfileInfo = ({
                         profile,
                         ProfileThunksavePhoto,
                         isowner,
                         profilestatus,
                         UpdateProfileThunkStatus,UpdateDataToProfile
                     }) => {
    let [editmode, Seteditmode] = useState(true)
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhoto = (e) => {
        ProfileThunksavePhoto(e.target.files[0])
    }
    const onSubmit= (formData)=>{
         UpdateDataToProfile(formData).then(()=>{
             Seteditmode(true)
         })
    }
    const str = 'Hey fellow warriors'
    const rez=str.split(' ')
function  poe(r) {
        let arr=[]
    for (var i = 0; i < r.length; i++) {

        if (r[i].length > 5) {
           var e = r[i].split('').reverse('').join('')
            arr.push(e+' ')

        } else arr.push(r[i])
    }
    return console.log(arr)
}
    poe(rez)
    //console.log(rez[0])//.find(el=>el.length>5))
    console.log(rez.length)

    return <div>

        <div>
            <img className={s.userImage}
                 src={profile.photos.large != null ? profile.photos.small : userPhoto}/>
            {isowner && <input  type={"file"} onChange={onMainPhoto}/>}
        </div>
        {editmode
            ? <ProfileleData  profile={profile} editToProfile={() => {Seteditmode(false)}}/>
            : <ProfileFormRedux initialValues={profile}  onSubmit={onSubmit} profile={profile}/>}
        <ProfileStratus UpdateProfileThunkStatus={UpdateProfileThunkStatus} profilestatus={profilestatus}/>
    </div>
}
const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>:{contactValue}</div>
}
const ProfileleData = ({profile, editToProfile}) => {
    return <div>
        <button className={s.edit+' '+ s.button} onClick={editToProfile}>Редактировать</button>
        <div>
            <b>Полное имя - </b>{profile.fullName}
        </div>
        <div>
            <b>ID - </b>{profile.userId}
        </div>
        <div>
            <b>Ищу рабоу -</b>{profile.lookingForAJob ? <b>да</b> : <b>нет</b>}
        </div>
        <div>
            <b>aboutMe -</b>{profile.aboutMe ? profile.aboutMe : <b>нет</b>}
        </div>
        <div>
            <b>My professional skils -</b>{profile.lookingForAJobDescription }
        </div>
        <div>
            <b>Контакты :</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>

}

export default ProfileInfo;