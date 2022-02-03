import React from 'react'
import s from "./UsersItem/UsersItem.module.css";
import axios from "axios";
import userPhoto from "./../../img/rik.jpg"

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.SetUsers(response.data.items)
        })
    }



    render(){
        return <div>
            {
                this.props.Users.map(u => <div key={u.id}>
                    <div className={s.main}>
                        <div className={s.users}>
                            <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            <div className={s.button}>
                                {u.followed ? <button onClick={() => {
                                    this.props.UnFollow(u.id)
                                }}>unfollow</button> : <button onClick={() => {
                                    this.props.OnFollow(u.id)
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
}

export default Users