import React from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Student_List from './Student_List'
import Student_Details from './Student_Details'



const App = () => {
  return (
    <>

    <Router>

     <Routes>

        <Route  path='/'  element={<Home />}  />
        <Route path='/student_list' element={<Student_List/>}   />
        <Route   path='/student_detail/:id' element={<Student_Details/>}                            />

     </Routes>

    </Router>
    
    </>
  )
}

export default App