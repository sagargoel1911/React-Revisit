import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function MainNavigation() {
  function clickHandler() {
    // auth.setUserName(prev=>{prev?null:"Sagar Goel"})
    if(auth.userName){
        auth.logout();
    }
    else{
        auth.login("Sagar Goel");
    }
  }
  const auth = useContext(AuthContext);
  return (
    <ul>
      <li>
        <NavLink to="/status"><button>Status</button></NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/info"><button>Personal Info</button></NavLink>
        </li>
      )}
      <li>
        <NavLink to="/">
          <button onClick={clickHandler}>
            {auth.isLoggedIn ? "Logout" : "Login"}
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/"><button>Home</button></NavLink>
      </li>
    </ul>
  );
}

export default MainNavigation;
