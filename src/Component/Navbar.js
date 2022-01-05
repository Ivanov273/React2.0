import React from 'react';
const Navbar = () => {
    return(
        <div className={"Navbar"}>
            <nav>
                <div className={"Navbar_nav"}>
                    <a className={"Navbar_item"} href="#">Profile</a>
                    <a className={"Navbar_item"} href="#">Messages</a>
                    <a className={"Navbar_item"} href="#">News</a>
                    <a className={"Navbar_item"} href="#">Music</a>
                    <a className={"Navbar_item"} href="#">Setting</a>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;