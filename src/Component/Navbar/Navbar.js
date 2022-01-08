import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.main}>
            <nav>
                <div className={s.main_nav}>
                    <div >
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/profile">Profile</NavLink>
                    </div>
                    <div >
                        <NavLink className={navData => navData.isActive ? s.active : s.item}to="/dialogs">Dialogs</NavLink>
                    </div>
                    <div >
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/news">News</NavLink>
                    </div>
                    <div >
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/music">Music</NavLink>
                    </div>

                </div>
            </nav>
        </div>
    );
}
export default Navbar;