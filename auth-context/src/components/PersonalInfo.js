import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
function PersonalInfo() {
  const auth=useContext(AuthContext);
  return (
    <div>Name: {auth.userName}</div>
  )
}

export default PersonalInfo