import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    ProfileThunk,
    ProfileThunksavePhoto,
    ProfileThunkStatus,
    UpdateDataToProfile,
    UpdateProfileThunkStatus
} from "../../Redux/Reducer-Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthContainer} from "../../HOC/AuthHOC";


function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {
    refreshProfile(){
        let userid = this.props.match.params.userId
        if (!userid) {
            userid = this.props.userid
        }

        this.props.ProfileThunk(userid)
        this.props.ProfileThunkStatus(userid)
    }
    componentDidMount() {
        this.refreshProfile()
    }

componentDidUpdate(prevProps, prevState, snapshot) {
   if (this.props.match.params.userId != prevProps.match.params.userId) {
       this.refreshProfile()
   }
}

    render() {
let isowner = !this.props.match.params.userId
        return <div>
            <Profile {...this.props} profile={this.props.profile} isowner={isowner} profilephoto={this.props.profilephoto}
                     UpdateProfileThunkStatus={this.props.UpdateProfileThunkStatus} ProfileThunksavePhoto={this.props.ProfileThunksavePhoto}
                     UpdateDataToProfile={this.props.UpdateDataToProfile}
                     />
        </div>
    }
}

let mapStateToProps = (state) => {

    return({
     profile: state.ProfilePage.profile,
     profilestatus: state.ProfilePage.profilestatus,
     userid: state.Auth.userid,
     isAuth: state.Auth.isAuth,
        profilephoto: state.ProfilePage.profilephoto

 })}

//const ProfileContainerwithRouter = withRouter(RedirectComponent)
export default compose(connect(mapStateToProps, {ProfileThunk, ProfileThunkStatus, UpdateProfileThunkStatus,ProfileThunksavePhoto,UpdateDataToProfile}),
    WithAuthContainer,
    withRouter
)(ProfileContainer)


