import { useState } from 'react'


const Button = ({onClick,text}) => {
      return (
        <button onClick={onClick}>{text}</button>
      )
}

const Line = ({text, value}) => {
  return (
    <p> {text} : {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(good + neutral + bad)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)


  const handleGood = () => {
    console.log("good increased to:", good + 1 )
    setGood(good + 1)
    console.log("all increased to:", all + 1 )
    setAll(all + 1)
    
    const newavg = (good * 1 + neutral * 0 + bad * -1) / all
    console.log("avg set to:", newavg )
    setAvg(newavg)

    const newpos = (good / all) * 100
    console.log("pos % set to:", newpos )
    setAvg(newpos)

  }

  const handleNeutral = () => {
    console.log("neutral increased to:", neutral + 1 )
    setNeutral(neutral + 1)
    console.log("all increased to:", all + 1 )
    setAll(all + 1)

    const newavg = (good * 1 + neutral * 0 + bad * -1) / all
    console.log("avg set to:", newavg )
    setAvg(newavg)

    const newpos = (good / all) * 100
    console.log("pos % set to:", newpos )
    setAvg(newpos)
  }

  const handleBad = () => {
    console.log("bad increased to:", bad + 1 )
    setBad(bad + 1)
    console.log("all increased to:", all + 1 )
    setAll(all + 1)

    const newavg = (good * 1 + neutral * 0 + bad * -1) / all
    console.log("avg set to:", newavg )
    setAvg(newavg)

    const newpos = (good / all) * 100
    console.log("pos % set to:", newpos )
    setAvg(newpos)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {handleGood} text = "Good"/>
      <Button onClick = {handleNeutral} text = "Neutral"/>
      <Button onClick = {handleBad} text = "Bad"/>

      <h1>statistics</h1>
      <Line text = "Good" value = {good} />
      <Line text = "Neutral" value = {neutral} />
      <Line text = "Bad" value = {bad} />
      <Line text = "All" value = {all} />
      <Line text = "Avg" value = {avg} />

    </div>
  )
}

export default App