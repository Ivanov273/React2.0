import React from 'react';
import {connect} from 'react-redux';
import {followUsersThunkCreator, getUsersThunkCreator, unfollowUsersThunkCreator} from '../../Readux/Reducer-Users';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {WithAuthContainer} from "../../HOC/AuthHOC";
import {compose} from "redux";
import {
    SetcurrentPage,
    Setisfetching, Setisfetchingprogress,
    SetPageSize,
    SetTotalCount,
    SetUsers,
    SetUsersage
} from "../../Readux/Users-selectors";


class UserContainer extends React.Component {


    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pagesize)

    }

    SetUserPage = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pagesize)
    }

    render() {
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
        Users: SetUsersage(state),
        TotalCount: SetTotalCount(state),
        pagesize: SetPageSize(state),
        currentPage: SetcurrentPage(state),
        isfetching: Setisfetching(state),
        isfetchingprogress: Setisfetchingprogress(state),

    }
}

export default compose(connect(mapStateToUsers, {
    getUsersThunkCreator,
    followUsersThunkCreator,
    unfollowUsersThunkCreator
}),
    //WithAuthContainer
)(UserContainer)



