import React from 'react'
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log('token',token)
    if(!token){
        window.location.href = '/'
    }
  return (
    <div>userProfile</div>
  )
}

export default UserProfile