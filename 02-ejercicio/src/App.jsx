import { useState } from 'react'
import './index.css'
import Statistics from './components/Statistics';

function App() {
  const [count, setCount] = useState(0);

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Functions
  const inrementGood = () => {setGood(good + 1)}
  const incrementNeutral = () => {setNeutral(neutral + 1)}
  const incrementNegative = () => {setBad(bad + 1)}
  const all = good + neutral + bad;
  const average = ((good-bad)/(all));
  const positive = ((good*100)/(all));


  return (
    <div className="App">
      <h1>Give feedback!</h1>
      <button onClick = { inrementGood }>good</button>
      <button onClick = { incrementNeutral }>neutral</button>
      <button onClick = { incrementNegative }>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App
