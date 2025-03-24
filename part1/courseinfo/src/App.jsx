

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
    <Part part= {props.part1} excersize= {props.excersize1} />
    <Part part= {props.part2} excersize= {props.excersize2} />
    <Part part= {props.part3} excersize= {props.excersize3} /> 
   </div>
  )
}

const Total = (props) => {
  return(
   <h3>Number of total excersises : {props.excersize1 + props.excersize2 + props.excersize3}</h3>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1={part1} part2={part2} part3={part3} excersize1={exercises1} excersize2={exercises2} excersize3={exercises3} /> 
      <Total excersize1={exercises1} excersize2={exercises2} excersize3={exercises3} />
    </div>
  )
}

export default App