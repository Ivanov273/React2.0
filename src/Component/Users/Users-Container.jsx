import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {FollowUserAC, SetUsersAC,SetPagesAC, UnFollowUserAC} from "../../Readux/Reducer-Users";

let mapStateToUsers = (state) => {
    return {
        Users: state.usersPage.users,
        TotalCount: state.usersPage.TotalCount,
        pagesize: state.usersPage.PageSize,
        currentPage: state.usersPage.currentPage
    }
}

let initMapDispatchToProps = (dispatch) => {
    return {
        OnFollow: (userid) => {
            dispatch(FollowUserAC(userid))
        },
        UnFollow: (userid) => {
            dispatch(UnFollowUserAC(userid))
        },
        SetUsers: (users) => {
            dispatch(SetUsersAC(users))
        },
        SetPage: (page) => {
            dispatch(SetPagesAC(page))
        }
    }
}
const MyUsersContainer = connect(mapStateToUsers, initMapDispatchToProps)(Users)


export default MyUsersContainer;