import React from "react";
import { useState, createContext} from "react";
import User from "./User";
import Login from "./Login";

 export const ManageState = createContext(null)

function App() { 
  const [names, setName] = useState('')
  
  return (
    <ManageState.Provider value={{names, setName}}>
    <User  /> 
    <Login  />
    </ManageState.Provider>
  );
}

export default App;
