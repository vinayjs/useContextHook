import React from "react";
import { useState } from "react";
import User from "./User";
import Login from "./Login";

function App() {
   
  const [names, setName] = useState('')
  return (
    <>
    <User names={names} /> 
    <Login setName={setName} />
    </>
  );
}

export default App;
