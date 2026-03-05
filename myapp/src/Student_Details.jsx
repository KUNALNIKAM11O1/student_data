import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

 const inititalStudents = [
         {id:1,name:"Amit",course:"React",age:22 },
  {id:2,name:"Sumit",course:"Node",age:23 },
  {id:3,name:"Sanket",course:"React",age:21 },
  {id:4,name:"Pratik",course:"JavaScript",age:20 },
  {id:5,name:"Ajay",course:"Node",age:21 },
  {id:6,name:"Vijay",course:"React",age:22 },
  {id:7,name:"Raj",course:"React",age:22 },
   ];


const Student_Details = () => {

 
   const {id} = useParams()

   const student = inititalStudents.find(s => s.id === Number(id))

   if(!student) {
    return <h3>Student not found</h3>
   }

  return (
    <>
    
    <h1>Student Details</h1>
    <p>Name : {student.name}</p>
    <p>Course : {student.course}</p>
    <p>Age : {student.age}</p>
   
    
    </>

   

  )
}

export default Student_Details