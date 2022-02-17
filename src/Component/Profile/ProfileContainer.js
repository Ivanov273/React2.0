import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileThunk, SetUsersProfile} from "../../Readux/Reducer-Profile";
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
            userid = 2
        }
        this.props.ProfileThunk(userid)
    }


    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let RedirectComponent = WithAuthContainer(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,

})

const ProfileContainerwithRouter = withRouter(RedirectComponent)
export default compose(connect(mapStateToProps, {ProfileThunk}),
    withRouter,
    WithAuthContainer)(ProfileContainerwithRouter)


