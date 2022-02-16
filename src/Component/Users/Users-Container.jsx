import React from 'react';
import {connect} from 'react-redux';
import {followUsersThunkCreator, getUsersThunkCreator, unfollowUsersThunkCreator} from '../../Readux/Reducer-Users';
import Users from './Users';
import Preloader from "../Common/Preloader";
import {Navigate} from "react-router-dom";
import {WithAuthContainer} from "../../HOC/AuthHOC";


class UserContainer extends React.Component {


    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pagesize)

        /*
                this.props.Togle(true)
                usersAPI.getUsersApi(this.props.currentPage,this.props.pagesize).then(data => {

                    this.props.SetUsers(data.items)
                    this.props.Togle(false)
                })
        */
    }

    SetUserPage = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pagesize)
    }

    render() {
        if(!this.props.Auth) return <Navigate to={"/login"} />
        return <>
            {
                this.props.isfetching ? <Preloader/> : null

            }
            <Users SetUserPage={this.SetUserPage}
                   currentPage={this.props.currentPage}
                   Users={this.props.Users}
                   TotalCount={this.props.TotalCount}
                   isfetchingprogress={this.props.isfetchingprogress}
                   followUsersThunkCreator={this.props.followUsersThunkCreator}
                   unfollowUsersThunkCreator={this.props.unfollowUsersThunkCreator}
            />
        </>
    }
}
let RedirectComponent = WithAuthContainer(UserContainer)

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,

})
let mapStateToUsers = (state) => {
    return {
        Users: state.usersPage.users,
        TotalCount: state.usersPage.TotalCount,
        pagesize: state.usersPage.PageSize,
        currentPage: state.usersPage.currentPage,
        isfetching: state.usersPage.isfetching,
        isfetchingprogress: state.usersPage.isfetchingprogress,
        Auth: state.Auth.isAuth
    }
}


export default connect(mapStateToUsers, {
    getUsersThunkCreator,
    followUsersThunkCreator,
    unfollowUsersThunkCreator
})(RedirectComponent)


