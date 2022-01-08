import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () =>{
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialog_items}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to = '/dialogs/1'> Mike</NavLink></div>
                    <div className={s.dialog}>
                        <NavLink to = '/dialogs/2'> Denis</NavLink></div>
                    <div className={s.dialog}><NavLink to = '/dialogs/3'> Alex</NavLink></div>
                    <div className={s.dialog}><NavLink to = '/dialogs/4'> Roma</NavLink></div>
                    <div className={s.dialog}><NavLink to = '/dialogs/5'> Ylia</NavLink></div>
                    
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message_item}>Hi its message</div>
                <div className={s.message_item}>dont?</div>
                <div className={s.message_item}>have are you</div>
                <div className={s.message_item}>i have</div>
                <div className={s.message_item}>i love you</div>
            </div>
        </div>
    )
}
export default Dialogs