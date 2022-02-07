import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import MyUsersContainer from "./Component/Users/Users-Container";
import ProfileContainer from "./Component/Profile/ProfileContainer";

const App = () => {


    return (

        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className={"contain"}>
                <Routes>
                    <Route path="/profile*" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
                    </Route>
                    <Route path='/dialogs*' element={<DialogsContainer/>}/>
                    <Route path='/users' element={<MyUsersContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
