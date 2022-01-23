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

  //  props.addMessage

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar SideBarData={props.state.SideBar.SideBarData} />
                <div className={"contain"}>
                    <Routes>
                    <Route path='/profile' element={<Profile ProfilePage={props.state.ProfilePage} dispatch={props.dispatch} />}/>
                    <Route path='/dialogs*'   element={<Dialogs DialogPage={props.state.DialogPage}  dispatch={props.dispatch} />} />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>   );
}

export default App;
