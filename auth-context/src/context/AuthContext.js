import { createContext } from "react"
export const AuthContext=createContext({
    userName:null,
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}
});