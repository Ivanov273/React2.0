import React from 'react';
import s from './Header.module.css'
const Header = ()=>{
    return (
        <header className={s.main}>
            <div><img className={s.logo}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
            </div>
            <div className={s.Header_menu}>

            </div>
            <div className={s.Phone}>

            </div>
        </header>
    );
}

export default Header;