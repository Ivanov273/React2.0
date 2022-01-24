import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar store={props.store} />
                <div className={"contain"}>
                    <Routes>
                    <Route path='/profile' element={<Profile store={props.store}  />}/>
                    <Route path='/dialogs*'   element={<DialogsContainer store={props.store}  />} />
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>   );
}

export default App;
