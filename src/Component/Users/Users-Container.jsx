import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {FollowUserAC, SetUsersAC, UnFollowUserAC} from "../../Readux/Reducer-Users";

let mapStateToUsers = (state) => {
    return {
        Users: state.usersPage.users,
        nameButton: state.usersPage.nameButton
    }
}

let initMapDispatchToProps = (dispatch) =>{
    return {
        OnFollow : (userid)=>{
            dispatch(FollowUserAC(userid))
        },
        UnFollow : (userid)=>{
            dispatch(UnFollowUserAC(userid))
        },
        SetUsers : (users)=>{
            dispatch(SetUsersAC(users))
        }
    }
}
const MyUsersContainer = connect(mapStateToUsers,initMapDispatchToProps)(Users)


export default MyUsersContainer;