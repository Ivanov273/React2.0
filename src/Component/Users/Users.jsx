import React from 'react'
import s from "./UsersItem/UsersItem.module.css";
import axios from "axios";
import userPhoto from "./../../img/rik.jpg"


const Users = (props) => {
    let GetUsers = ()=> {
        if (props.Users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.SetUsers(response.data.items)
            })
        }
    }
    return <div>
        <button onClick={GetUsers}>GetUsers</button>
        {
            props.Users.map(u => <div key={u.id}>
                <div className={s.main}>
                    <div className={s.users}>
                        <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        <div className={s.button}>
                            {u.followed ? <button onClick={() => {
                                props.UnFollow(u.id)
                            }}>unfollow</button> : <button onClick={() => {
                                props.OnFollow(u.id)
                            }}>follow</button>}
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.one}>{u.name}</div>
                        <div className={s.two}>}</div>
                        <div className={s.three}></div>
                        <div className={s.foor}></div>
                    </div>
                </div>
            </div>)
        }
    </div>


}
export default Users