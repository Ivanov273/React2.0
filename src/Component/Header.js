import React from 'react';
const Header = ()=>{
    return (
        <header className={"Header"}>
            <div><img className={"img_logo"}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
            </div>
            <div className={"Header_menu"}>

            </div>
            <div className={"Phone"}>

            </div>
        </header>
    );
}
const user = [{name:"54545454"}]
const user2 = {...user}
//user.name = "rty"
user[0].name = "3333333333"
console.log(user2[0].name)
export default Header;