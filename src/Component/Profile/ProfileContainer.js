import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileThunk, ProfileThunkStatus, UpdateProfileThunkStatus} from "../../Readux/Reducer-Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthContainer} from "../../HOC/AuthHOC";


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
        if (!userid) {
            userid = 22189
        }
        this.props.ProfileThunk(userid)
        this.props.ProfileThunkStatus(userid)
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}
                     UpdateProfileThunkStatus={this.props.UpdateProfileThunkStatus}
                     />
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    profilestatus: state.ProfilePage.profilestatus

})

//const ProfileContainerwithRouter = withRouter(RedirectComponent)
export default compose(connect(mapStateToProps, {ProfileThunk, ProfileThunkStatus, UpdateProfileThunkStatus}),
    withRouter,WithAuthContainer
)(ProfileContainer)


