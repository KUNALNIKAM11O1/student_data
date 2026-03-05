import React from 'react'

import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <NavLink to="/student_list">
  <button>Student List</button>
   </NavLink>
   </>
  )
}

export default Home