import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function MainNavigation() {
  const [name, setName] = useState("");
  function clickHandler() {
    if (auth.userName) {
      auth.logout();
    } else {
      auth.login(name);
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
        {!auth.isLoggedIn && <input value={name} onChange={(event) => setName(event.target.value)} />}
        <NavLink to="/">
          <button onClick={clickHandler}>
            {auth.isLoggedIn ? "Logout" : "Login"}
          </button>
        </NavLink>
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
