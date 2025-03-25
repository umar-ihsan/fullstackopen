import { useState } from 'react'


const Button = (props) => {
     return(
      <button onClick={props.onClick}>{props.text}</button>
     )
    
}

const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

     
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [best, setBest] = useState(0)



  function getRandomInt(min, max) { 

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {

     const rand = getRandomInt(1,7) 
     console.log("Random number is ",{rand})
     setSelected(rand)
  }

  const bestAnecdote = () => {

    
    const maxVotes = Math.max(...votes)
    const maxIndex = votes.indexOf(maxVotes)
    setBest(maxIndex)

  }

  const handleVote = () => {
    
    const newvotes = [...votes]
    newvotes[selected]++
    setVotes(newvotes)
    bestAnecdote()
 }

  return (

    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <br />
      <Button onClick={handleClick} text="Next Anectdote" />
      <Button onClick={handleVote} text="Vote" />

      <h1>Anecdote with most Votes</h1>
      {anecdotes[best]}




    </div>
  )
}

export default App