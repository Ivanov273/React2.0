import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar SideBarData={props.state.SideBar.SideBarData} />
                <div className={"contain"}>
                    <Routes>
                    <Route path='/profile' element={<Profile PostData={props.state.ProfilePage.PostData}/>}/>
                    <Route path='/dialogs*'   element={<Dialogs DialogData={props.state.DialogPage.DialogData} TextData={props.state.DialogPage.TextData} />} />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>   );
}

export default App;
