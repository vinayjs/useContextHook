import React from "react"
import { useContext } from "react"
import { ManageState } from "./App"

function Login(){
    const {setName} = useContext(ManageState)

    return(
    <>
    <h2>Test here:</h2>
    <input type="textarea" placeholder="write here" 
    onChange={(e)=> setName(e.target.value)} />
    </>
    )
}

export default Login