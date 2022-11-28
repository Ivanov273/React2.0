import React from 'react';
import {Route, Routes, useParams} from "react-router-dom";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import MyUsersContainer from "./Component/Users/Users-Container";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import HeaderContainer from "./Component/Header/HeaderContainer";
import LoginContainer from "./Component/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializeThunk} from "./Redux/Reducer-App";
import Preloader from "./Component/Common/Preloader";

const withRouter = WrappedComponent => props => {

    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};
class App extends React.Component {
    componentDidMount() {
        this.props.InitializeThunk()
    }
    render() {
        if(!this.props.initialize)
        {
            return <Preloader />
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"contain"}>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<MyUsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/login' element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}
let mapStateToprops=(state)=>({
    initialize: state.app.initialize,
    isAuth: state.Auth.isAuth
})
export default compose (
    withRouter,
connect (mapStateToprops,{InitializeThunk}))(App)

