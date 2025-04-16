import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Userprofile() {
    let {id}=useParams()
    let {name}=useParams()
  return (
    <>
    <div style={{textAlign:"center"}}>
        <h1>Userprofile</h1>
        <p>This is user profile{id}</p>
        <p>This is user profile{id?"welcome":"id not presented"(alert("Error"))}</p>
        <p>This is user profile Name:{name}</p>
        <Link to='/Posts'>PostPage</Link>
    </div>
    </>
  )
}

export default Userprofile