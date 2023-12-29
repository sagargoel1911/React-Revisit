import React, { useContext, useReducer } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function inputReducer(state,action){
  switch(action.type){
    case "TOUCH": {
      return {
        ...state,
        isTouched: true
      };
    }
    case "CHANGE":{
      return {
        ...state,
        value: action.value,
        isValid:action.value.trim().length>0
      }
    }
    default: return state; 
  }
}

function MainNavigation() {
  const [inputState, dispatch] = useReducer(inputReducer,{
    value:"",
    isTouched: false,
    isValid: false
  });
  function clickHandler(event) {
    event.preventDefault();
    if (auth.userName) {
      auth.logout();
    } else {
      auth.login(inputState.value);
    }
  }
  function touchHandler(){
    dispatch({
      type:"TOUCH",
    })
  }
  function changeHandler(event){
    dispatch({
      type:"CHANGE",
      value:event.target.value
    })
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
        {!auth.isLoggedIn && <input value={inputState.value} onChange={changeHandler} onBlur={touchHandler} />}
        <NavLink to="/">
          <button onClick={clickHandler} disabled={!inputState.isValid && !auth.isLoggedIn}>
            {auth.isLoggedIn ? "Logout" : "Login"}
          </button>
        </NavLink>
        {!auth.isLoggedIn && inputState.isTouched && !inputState.isValid && <>Please enter something</>}
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
