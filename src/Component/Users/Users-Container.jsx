import React from 'react';
import {connect} from 'react-redux';
import {OnFollow, UnFollow, SetUsers, SetPage, Togle, TogleProgressFetching} from '../../Readux/Reducer-Users';
import Users from './Users';
import Preloader from "../Common/Preloader";
import {usersAPI} from "../../api/getUsersApi";

class UserContainer extends React.Component {


    componentDidMount() {

        this.props.Togle(true)
        usersAPI.getUsersApi(this.props.currentPage,this.props.pagesize).then(data => {

            this.props.SetUsers(data.items)
            this.props.Togle(false)
        })
    }

    SetUserPage = (p) => {
        this.props.Togle(true)
        this.props.SetPage(p)
        usersAPI.getUsersApi(p).then(data => {
            this.props.SetUsers(data.items)
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
                   isfetching={this.props.isfetching}
                   currentPage={this.props.currentPage}
                   TogleProgressFetching={this.props.TogleProgressFetching}
                   isfetchingprogress={this.props.isfetchingprogress}
            />
        </>
    }
}

let mapStateToUsers = (state) => {
    return {
        Users: state.usersPage.users,
        TotalCount: state.usersPage.TotalCount,
        pagesize: state.usersPage.PageSize,
        currentPage: state.usersPage.currentPage,
        isfetching: state.usersPage.isfetching,
        isfetchingprogress: state.usersPage.isfetchingprogress
    }
}


export default connect(mapStateToUsers, {OnFollow, UnFollow, SetUsers, SetPage, Togle,TogleProgressFetching})(UserContainer)


