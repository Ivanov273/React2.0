import React from 'react'
import s from "./UsersItem/UsersItem.module.css";
import axios from "axios";
import userPhoto from "./../../img/rik.jpg"

class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`).then(response => {
            this.props.SetUsers(response.data.items)
            console.log(response.data.items)

        })
    }
    SetUserPage=(p)=>{
        this.props.SetPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=10`).then(response => {
            this.props.SetUsers(response.data.items)




        })
}
    render() {
        let page = []
        let colPages = Math.ceil(this.props.TotalCount / this.props.pagesize)
        for (let i = 1; i <= 20; i++) {
            page.push(i)
        }

        return <div>
            <div>
                {page.map(p => {
                    return <span onClick={()=>this.SetUserPage(p)} className={this.props.currentPage==p && s.active }>{p}</span>

                })}

            </div>
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