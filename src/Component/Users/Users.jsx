import React from 'react'
import s from "./UsersItem/UsersItem.module.css";
import {UnFollowUserAC} from "../../Readux/Reducer-Users";

const Users = (props) => {

    if (props.Users.length === 0) {
        props.SetUsers([{
            id: 0,
            followed: true,
            name: 'Dmitry',
            location: {country: 'China', city: 'Saratov'},
            message: 'it kamasutra',
            photo: 'http://www.graycell.ru/picture/big/rik.jpg'
        },
            {
                id: 1,
                followed: false,
                name: 'Dmitryw',
                location: {country: 'China', city: 'Saratov'},
                message: 'it kamasutra',
                photo: 'http://www.graycell.ru/picture/big/rik.jpg'
            },
            {
                id: 2,
                followed: false,
                name: 'Dmitrye',
                location: {country: 'China', city: 'Saratov'},
                message: 'it kamasutra',
                photo: 'http://www.graycell.ru/picture/big/rik.jpg'
            },
            {
                id: 3,
                followed: true,
                name: 'Dmitry',
                location: {country: 'China', city: 'Saratov'},
                message: 'it kamasutra',
                photo: 'http://www.graycell.ru/picture/big/rik.jpg'
            }

        ])
    }
    //debugger
    return <div>

        {
            props.Users.map(u => <div key={u.id}>
                <div className={s.main}>
                    <div className={s.users}>
                        <img className={s.usersPhoto} src={u.photo}/>
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
                        <div className={s.two}>{u.location.country}</div>
                        <div className={s.three}>{u.message}</div>
                        <div className={s.foor}> {u.location.city}</div>
                    </div>
                </div>
            </div>)
        }
    </div>


}
export default Users