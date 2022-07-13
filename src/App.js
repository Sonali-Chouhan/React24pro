import React from "react";
import UserCreate from "./Component/Admin/Usercreate"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import UserList from "./Component/Admin/Userlist"
import PagenotFound from "./Component/PagenotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingUp from "./Component/SingUp";
import Singin from "./Component/Singin";

const App = () => {
  const gettoken = localStorage.getItem("Token");
  return (
    <div>
      {gettoken ? (
          <>
           <Routes>
           
              <Route path="/usercreate" element={<UserCreate/>}/>
              <Route path="/usercreate/:id" element={<UserCreate/>} />
              <Route path="/userlist" element={<UserList />} />
            </Routes>
          </>
        ) : (
        <Routes>
              <Route path="/" element={<Singin />} />
              <Route path="/singup" element={<SingUp />} />
               <Route path="*" element={<PagenotFound />} /> 
            </Routes>
        )}
    </div>
  );
};
export default App;
