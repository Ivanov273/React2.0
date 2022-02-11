import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileThunk, SetUsersProfile} from "../../Readux/Reducer-Profile";
import {Navigate, useParams} from "react-router-dom";


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
        if(!this.props.Auth) return <Navigate to={"/login"} />
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    Auth: state.Auth.isAuth
})



const ProfileContainer2 = withRouter(ProfileContainer)

export default connect(mapStateToProps, {ProfileThunk})(ProfileContainer2)