import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../img/rik.jpg";

let Users = (props) => {
    let page = []
    let colPages = Math.ceil(props.TotalCount / props.pagesize)
    for (let i = 1; i <= 20; i++) {
        page.push(i)
    }
    return <div>
        <div>
            {page.map(p =>
               <span onClick={() => props.SetUserPage(p)}
                             className={props.currentPage == p && s.active}>{p}</span>

            )}

        </div>
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