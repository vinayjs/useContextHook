 import React from "react";
 import { useContext } from "react";
 import { ManageState } from "./App";
 
 function  User(){
    const{names} = useContext(ManageState)
    return (
        <>
        <h1>User:{names} </h1>
        </>
    )
}

export default User;