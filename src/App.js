import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import News from "./Component/News/News";
import Loginpage from "./Component/Login/Login";
import Music from "./Component/Music/Music";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import MyUsersContainer from "./Component/Users/Users-Container";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import HeaderContainer from "./Component/Header/HeaderContainer";
const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={"contain"}>
                <Routes>
                    <Route exact path='/' element={<ProfileContainer/>}/>
                    <Route path="/profile*" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/users' element={<MyUsersContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/login' element={<Loginpage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
