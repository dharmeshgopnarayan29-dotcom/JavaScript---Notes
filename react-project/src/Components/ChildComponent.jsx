import React from "react";

function ChildComponent(user) {
    return
    <div>
        <h5>Name : {user?.name} </h5>
        <h5>Age : {user?.age} </h5>
        <img src={user?.picture} alt="" />
    </div>
}

export default ChildComponent;