import React from 'react';
import {connect} from 'react-redux';
import {OnFollow, UnFollow, SetUsers, SetPage, Togle} from '../../Readux/Reducer-Users';
import axios from 'axios';
import Users from './Users';
import Preloader from "../Common/Preloader";

class UserContainer extends React.Component {


    componentDidMount() {
        this.props.Togle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`,{
            withCredentials: true
        }).then(response => {
            this.props.SetUsers(response.data.items)
            this.props.Togle(false)
        })
    }

    SetUserPage = (p) => {
        this.props.Togle(true)
        this.props.SetPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=10`,{
            withCredentials: true
        }).then(response => {
            this.props.SetUsers(response.data.items)
            this.props.Togle(false)

        })
    }

    render() {
        return <>
            {
                this.props.isfetching ? <Preloader/> : null

            }
            <Users SetUserPage={this.SetUserPage}
                   Users={this.props.Users}
                   TotalCount={this.props.TotalCount}
                   pagesize={this.props.pagesize}
                   UnFollow={this.props.UnFollow}
                   OnFollow={this.props.OnFollow}
                   currentPage={this.props.currentPage}/>
        </>
    }
}

let mapStateToUsers = (state) => {
    return {
        Users: state.usersPage.users,
        TotalCount: state.usersPage.TotalCount,
        pagesize: state.usersPage.PageSize,
        currentPage: state.usersPage.currentPage,
        isfetching: state.usersPage.isfetching
    }
}


export default connect(mapStateToUsers, {OnFollow, UnFollow, SetUsers, SetPage, Togle})(UserContainer)


