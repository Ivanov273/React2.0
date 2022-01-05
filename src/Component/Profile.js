import React from 'react';
const Profile = () =>{
    return (
        <div className={"Profile"}>
            <div>
                <img className={"Profile_Content_img"}
                     src="https://ostrov-ok.by/assets/images/rekl-rassylka/egipet.jpg" alt=""/>
            </div>
            <div>
                <div className={"User_photo"}>
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