import React from 'react'
import s from './SideBar.module.css'
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = (props) => {
    let SideBarContent = props.SideBarData.map(b => <SideBarItem name={b.name} img={b.img}/>);

    return (
        <div className={s.SideBar}><p>Friends</p>
            <div className={s.SideBar_friends}>

                {SideBarContent}
            </div>
        </div>
    )
}
export default SideBar