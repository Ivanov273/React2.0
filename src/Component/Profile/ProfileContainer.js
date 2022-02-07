import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {SetUsersProfile} from "../../Readux/Reducer-Profile";
import {useParams} from "react-router-dom";


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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userid}`).then(response => {

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



const ProfileContainer2 = withRouter(ProfileContainer)

export default connect(mapStateToProps, {SetUsersProfile})(ProfileContainer2)