import React from 'react'
import ReactDOM from 'react-dom/client'

// App Const allow to execute de React App.
const App = () => {

  //Variable Declaration
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of component';
  const exercises3 = 14;

  // Return from App const 
  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

/////////////////////////////////////////////////////////// 
// Props allows to share information between components. //
///////////////////////////////////////////////////////////

// Header const that appears in App return information.
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Content const that appears in App return information.
const Content = (props) => {
  return (
    <div>
      <p>{props.part1}: {props.exercises1}</p>
      <p>{props.part2}: {props.exercises2}</p>
      <p>{props.part3}: {props.exercises3}</p>
    </div>
  )
}

// Total const that appears in App return information.
const Total = (props) => {
  return (
    <p>Number of exercises: {props.total} </p>
  )
}

// React Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)