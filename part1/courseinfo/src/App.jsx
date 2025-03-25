

const Header = (props) => {
   return (
    <h1>Course Name is : {props.course}</h1>
   )
}

const Part = (props) => {
  return (
    <p>{props.part} : {props.excersize}</p>
  )
}

const Content = (props) => {
  return (

   <div>
    <Part part= {props.course.parts[0].name} excersize= {props.course.parts[0].exercises} />
    <Part part= {props.course.parts[1].name} excersize= {props.course.parts[1].exercises} />
    <Part part= {props.course.parts[2].name} excersize= {props.course.parts[2].exercises} /> 
   </div>
  )
}

const Total = (props) => {
  return(
   <h3>Number of total excersises : {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</h3>
  )
}



const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  

  return (
    <div>
      <Header course = {course.name} />
      <Content course={course} /> 
      <Total course={course} />
    </div>
  )
}

export default App