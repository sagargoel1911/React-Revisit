import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Input from "./Input";
import useForm from "../hooks/form-hook";



function MainNavigation() {
  const {formState,inputHandler}=useForm({
    "firstName":{
      value:"",
      isValid:false
    },
    "lastName":{
      value:"",
      isValid:false
    }
  },false)
  function clickHandler(event) {
    event.preventDefault();
    const fullName= formState.inputs["firstName"].value+" "+formState.inputs["lastName"].value;
    if (auth.userName) {
      auth.logout();
    } else {
      auth.login(fullName);
    }
  }
  const auth = useContext(AuthContext);
  return (
    <ul>
      <li>
        <NavLink to="/status">
          <button>Status</button>
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/info">
            <button>Personal Info</button>
          </NavLink>
        </li>
      )}
      <li>
        {!auth.isLoggedIn && <Input onInput={inputHandler} id="firstName"/>}
        {!auth.isLoggedIn && <Input onInput={inputHandler} id="lastName"/>}
        <NavLink to="/">
          <button onClick={clickHandler} disabled={!formState.isValid && !auth.isLoggedIn}>
            {auth.isLoggedIn ? "Logout" : "Login"}
          </button>
        </NavLink>
        {!auth.isLoggedIn && !formState.isValid && <>Please fill form</>}
      </li>
      <li>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNavigation;
