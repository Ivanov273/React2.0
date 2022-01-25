import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";

const App = () => {


    return (

            <div className="wrapper">
                <Header/>
                <Navbar  />
                <div className={"contain"}>
                    <Routes>
                    <Route path='/profile' element={<Profile   />}/>
                   <Route path='/dialogs*'   element={<DialogsContainer   />} />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
            </div>
           );
}

export default App;
