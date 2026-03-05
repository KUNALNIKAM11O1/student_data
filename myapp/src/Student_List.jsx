import React from 'react'

import { useState } from 'react'

const Student_List = () => {

    const inititalStudents = [
         {id:1,name:"Amit",course:"React",age:22 },
  {id:2,name:"Sumit",course:"Node",age:23 },
  {id:3,name:"Sanket",course:"React",age:21 },
  {id:4,name:"Pratik",course:"JavaScript",age:20 },
  {id:5,name:"Ajay",course:"Node",age:21 },
  {id:6,name:"Vijay",course:"React",age:22 },
  {id:7,name:"Raj",course:"React",age:22 },
   ];

  const [data,setData] = useState(inititalStudents)

  const filterReact =()=>{
    const result =  inititalStudents.filter(s => s.course === "React");
    setData(result)
  }

  const showAll =()=>{
    setData(inititalStudents)
  }

  const filterAge =()=>{
    const output = inititalStudents.filter(a => a.age >=21 );
    setData(output)
  }

  const showEvery=()=>{
    setData(inititalStudents)
  }

    
  return (
  <>
  
  <h1>Student List</h1>

  <button className='btn btn-primary ms-2' onClick={showAll} >All</button>
  <button className='btn btn-success ms-4' onClick={filterReact}>React</button>
  <button className='btn btn-warning ms-2' onClick={filterAge}>Adults</button>
  <button className='btn btn-danger ms-2' onClick={showEvery}>All Age</button>


 {data.length === 0 ? (
        <p>No students available</p>
      ) : (
        data.map(student => ( <div key={student.id}>
            <p>
              {student.name} - {student.course}
            </p>
          </div>
        ))
      )}



  </>
  )
}

export default Student_List