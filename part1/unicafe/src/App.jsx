import { useState } from 'react'


const Button = ({onClick,text}) => {
      return (
        <button onClick={onClick}>{text}</button>
      )
}


const Statistics = ({good, neutral, bad}) => {
    
  if (good == 0 && bad == 0 && neutral ==0){
    return ( 
      <h3>No feedback given</h3>
    )
  }


      return (
        <table>

          <tbody>
           <StatisticLine text = "Good" value = {good} />
           <StatisticLine text = "Neutral" value = {neutral} />
           <StatisticLine text = "Bad" value = {bad} />
           <StatisticLine text = "All" value = {good + bad + neutral} />
           <StatisticLine text = "Average" value = {(good * 1 + neutral * -1) / (good + bad + neutral) } />
           <StatisticLine text = "Positive" value = {good / (good + bad + neutral) + "%" } />
          </tbody>

        </table>
      )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr> 
      <td>{text}</td> 
      <td>{value}</td> 
    </tr>
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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>

    </div>
  )
}

export default App