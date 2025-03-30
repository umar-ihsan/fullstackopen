

const Header = ({name}) => {
    return (
     <h1>Course Name is : {name}</h1>
    )
  }
  
  const Part = (props) => {
   return (
     <p>{props.part} : {props.excersize}</p>
   )
  }
  
  const Content = ({parts}) => {
   return (
  
    parts.map(part => (
      <Part key = {part.id} part = {part.name} excersize = {part.exercises} />
   )) 
  
   )
  }
  
  const Total = ({parts}) => {
   return(
    parts.reduce((sum,part)=> sum + part.exercises
    ,0) 
  )
    
  }
  
  
  const Course = ({courses}) => {
    console.log(courses.name)
     return (
      <div>
       {courses.map(course => (
        <div key={course.id}> 
          <Header name={course.name} />
          <Content parts={course.parts}/>
          <Total   parts={course.parts}/>
        </div>
       ))}
      </div>
     )
  }

  export default Course