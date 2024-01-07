import React from 'react'
import { useParams } from 'react-router-dom';
function PersonalInfo() {
  const {userName}=useParams()
  return (
    <div>Name: {userName}</div>
  )
}

export default PersonalInfo