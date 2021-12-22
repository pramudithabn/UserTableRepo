import React from "react";

const UserProfile = (props) => {
    return (
        <div> <h1>User Profile</h1> :
            <div><h5> First Name : </h5>{props.first_name}</div>
            <div><h5> Last Name : </h5>{props.last_name}</div>
            <div><h5>email : </h5>{props.email}</div>
            <div><img src={props.img}/></div>
        </div>
    )
}

export default UserProfile