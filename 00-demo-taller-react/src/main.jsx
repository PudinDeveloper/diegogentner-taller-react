import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {

  const now = new Date();
  const a = 10;
  const b = 20;
  const myList = [
    'Primero',
    'Segundo'
  ];

  const courseInfo = [
    { key: "fundamentals", part: "Fundamentals of React", exercises: 10 },
    { key: "props", part: "Resizing", exercises: 17 },
    { key: "state", part: "State of component", exercises: 14 },
    { key: "fetch", part: "Fetching resources from an API", exercises: 9 }
  ];

  return (
    
  <div>
      <Header title="Adele es la mejor" />
      <Content courseInfo = { courseInfo } />
      <List items = {myList}/>
      <p>It is Now {now.toString()}</p>
      <p style={{color: a >= 10 ? "red" : "blue"}}>a + b is {a + b}</p>
  </div>
  )
}

const List = ({items}) => ( //si utilizo parentesis es directamente
  <ul>
    {items.map(item => {
      return (
        <li>{item}</li>
      )
    })}
  </ul>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)