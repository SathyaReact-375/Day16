import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Navbar'
import Userprofile from './Pages/Userprofile'
import Posts from './Pages/Posts'
import UserList from './Pages/Userlist'
import Userdetails from './Userdetails'
import PostList from './Pages/PostList'
import PostDetails from './Pages/PostDetails'
import MovieList from './Pages/MovieList'
import MovieDetails from './Pages/MovieDetails'

function App() {
  return (
    <>
    <BrowserRouter basename="/Day16">
    <Navbar/>
    <Routes>
  <Route path="/" element={<Home />}>
  
  </Route>
  <Route path="/About" element={<About />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path='/Userprofile/:id?/:name' element={<Userprofile/>}/>
  <Route path="/Posts" element={<Posts />} />
  <Route path="/UserList" element={<UserList />} />
  <Route path="/Userdetails/:id" element={<Userdetails />} />
  <Route path='/Postlist' element={<PostList/>}/>
  <Route path="/post/:id" element={<PostDetails />} />
  <Route path="/MovieList" element={<MovieList />} />
   <Route path="/movie/:id" element={<MovieDetails />} />

  </Routes>
 </BrowserRouter>
    </>
  )
}

export default App