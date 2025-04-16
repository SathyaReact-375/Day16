import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
    <div style={{textAlign:"center"}}>
        <h1>This is Contact page</h1>
        <Link to="/Userprofile/1/sathya">user</Link>
        <Link to="/Userprofile/id:?">without id</Link>
        <Link to="/About">default Home</Link>
  
    </div>
    </>
  )
}

export default Contact