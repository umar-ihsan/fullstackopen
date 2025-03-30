import Course from './components/Course'

const App = () => {

 const courses = [{
   name: 'Half Stack application development',
   id:1,
   parts: [
     {
       name: 'Fundamentals of React',
       exercises: 10,
       id:1
     },
     {
       name: 'Using props to pass data',
       exercises: 7,
       id:2
     },
     {
       name: 'State of a component',
       exercises: 14,
       id:3
     },
     {
      name: 'Testing new component',
      exercises: 9,
      id:4
    },
    {
      name: 'Testing new Total',
      exercises: 9,
      id:5
    }
   ]
 },
 {
  name: 'Quarter Stack application development',
  id:2,
  parts: [
    {
      name: 'Fundamentals of React2',
      exercises: 10,
      id:1
    },
    {
      name: 'Using props to pass data 2',
      exercises: 7,
      id:2
    },
    {
      name: 'State of a component 2',
      exercises: 14,
      id:3
    },
    {
     name: 'Testing new component 2',
     exercises: 9,
     id:4
   }
  ]
}
 
]

 

 return (
   <div>
     <Course courses = {courses}/>
     
   </div>
 )
}

export default App