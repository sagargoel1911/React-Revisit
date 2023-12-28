import { AuthContext } from "./context/AuthContext";

import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import Status from "./components/Status";
import PersonalInfo from "./components/PersonalInfo";
import Intro from "./components/Intro";
import MainNavigation from "./components/MainNavigation";
import useAuth from "./hooks/auth-hook";
function App() {
  const {userName,login,logout} = useAuth();
  let routes;
  if (userName) {
    routes = (
      <Routes>
      <Route path="/" exxact Component={Intro}/>
        <Route path="/status" exact Component={Status} />
        <Route path="/info" exact Component={PersonalInfo} />
        <Route element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
      <Route path="/" exxact Component={Intro}/>
        <Route path="/status" exact Component={Status} />
        <Route element={<Navigate to="/" />} />
      </Routes>
    );
  }
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ userName, isLoggedIn: !!userName, login:login,logout:logout }}
      >
        <MainNavigation />
        <main>{routes}</main>
      </AuthContext.Provider>
    </div>
  );
}

export default App;