import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {SetUsersProfile} from "../../Readux/Reducer-Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        console.log('response.data')
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            console.log(response.data)
            console.log('response.data')
            this.props.SetUsersProfile(response.data)
        })
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
})





export default connect(mapStateToProps, {SetUsersProfile})(ProfileContainer)