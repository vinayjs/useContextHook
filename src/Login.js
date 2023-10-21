import React from "react"

function Login({setName}){
    return(
    <>
    <h2>Login here</h2>
    <input type="textarea" placeholder="write here" 
    onChange={(e)=> setName(e.target.value) } />
    </>
    )
}

export default Login