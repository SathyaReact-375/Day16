import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PostList from '../Pages/PostList'
import UserList from '../Pages/Userlist'
import MovieList from '../Pages/MovieList'


function Task1() {
  const navi=useNavigate()
  return (
    <>
    <div style={{textAlign:"center"}}>
    <h1>Task1</h1>
    <h2>Dynamic Routing in React</h2>
    <p>
    Dynamic routing in React allows routes to adapt at runtime based on data or user interactions. 
    It uses variables or parameters in the URL to display different content, and React Router is 
    commonly used for implementing it.
     </p>
        <h3>Use cases:</h3>
        <ul style={{listStyleType:'none'}}>
        <li>Product pages: For e-commerce websites, URLs like <code>/products/:productId</code> show specific products.</li>
        <li>User profiles: Social platforms use routes like <code>/users/:userId</code> to display user profiles dynamically.</li>
        <li>Blog posts: In blogs, <code>/posts/:postSlug</code> links to individual articles by unique slugs.</li>
        <li>Nested routes: Useful for organizing hierarchical content under categories.</li>
        </ul>
        <h1>Task2</h1>
        <p>Completed click the contact page</p>
        <h1>Task3</h1>
        <p>Completed click the contact page</p>
        <h1>Task4</h1>
        <p>Completed click the contact page and click the user link see the changes</p>
        <h1>Task5</h1>
        <p>Completed click the contact page and click the user link see the changes</p>
       <h1>Task6</h1>
        <p>Completed click the contact page and click the without Id link see the changes</p>
        <h1>Task7</h1>
        <Link to="/About">About</Link>
        <h1>Task8</h1>
        <button onClick={()=>{
            navi("/Contact")
        }}>navigate</button>
        <h1>Task9</h1>
        <p>Completed</p>
        <h1>Task10</h1>
        <p>Completed click contact page-click-withoutidlink </p>
        <h1>Task11</h1>
        <p>Completed click contact page-click-user-click-Postpage </p>
        <h1>Task12</h1>
        <p>Completed</p>
        <h1>Task13</h1>
        <p>Completed</p>
        <UserList/>
        <h1>MiniProject1</h1>
        <PostList/>
        <h1>MiniProject2</h1>
        <MovieList/>
    </div>
    </>
  )
}

export default Task1