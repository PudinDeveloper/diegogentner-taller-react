import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
// import bootstrap from 'bootstrap'

const HelloWorld = (props) => {
  return (
    <div> 
      <h1>{props.title}</h1>
    </div>
  )
}

const App = () => {

  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    
  <div>
      <HelloWorld title="Adele es la mejor" />
      <p>It is Now {now.toString()}</p>
      <p style={{color: a >= 10 ? "red" : "blue"}}>a + b is {a + b}</p>
  </div>
  )
}

const List = () => {
  const myList
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
