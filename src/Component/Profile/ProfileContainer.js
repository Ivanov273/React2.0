import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileStatusThunk, ProfileThunk, UpdateProfileStatusThunk} from "../../Readux/Reducer-Profile";
import {Navigate, useParams} from "react-router-dom";
import {WithAuthContainer} from "../../HOC/AuthHOC";
import {compose} from "redux";


const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userid = this.props.params.userId
        if(!userid){
            userid = 22189
        }
        this.props.ProfileThunk(userid)
        this.props.ProfileStatusThunk(userid)
    }


    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.UpdateProfileStatusThunk} />
        </div>
    }
}

let RedirectComponent = WithAuthContainer(ProfileContainer)

let mapStateToProps = (state) => ({
    profilestatus: state.ProfilePage.profilestatus,
    profile: state.ProfilePage.profile

})

const ProfileContainerwithRouter = withRouter(RedirectComponent)
export default compose(connect(mapStateToProps, {ProfileThunk,ProfileStatusThunk,UpdateProfileStatusThunk}),
    withRouter,
    WithAuthContainer
)(ProfileContainerwithRouter)


