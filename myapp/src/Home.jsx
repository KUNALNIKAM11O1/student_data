import React from 'react'

import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <NavLink to="/student_list">
  <button>Student  Data List</button>
   </NavLink>
   </>
  )
}

export default Home