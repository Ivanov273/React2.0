import React from 'react';
import s from './Navbar.module.css'
const Navbar = () => {
    return(
        <div className={s.main}>
            <nav>
                <div className={s.main_nav}>
                    <a className={`${s.item} ${s.active}`} href="#">Profile</a>
                    <a className={s.item} href="#">Messages</a>
                    <a className={s.item} href="#">News</a>
                    <a className={s.item} href="#">Music</a>
                    <a className={s.item} href="#">Setting</a>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;