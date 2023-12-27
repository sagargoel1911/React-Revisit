import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


function Status() {
  const auth = useContext(AuthContext);
  return (
    <div>You're currently {auth.isLoggedIn?"Logged In":"Logged Out"}</div>
  )
}

export default Status