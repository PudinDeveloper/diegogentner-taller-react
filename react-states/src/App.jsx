import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  setTimeout(
    () => { 
    setData("Llegaron los datos")
    setIsLoading(false)
    },
    2000
  )

  const incrementByOne = () => setCounter(counter + 1);
  const decrementByOne = () => setCounter(counter - 1);
  const resetToZero = () => setCounter(0);

  let toRender;
  if (isLoading) {
    toRender = <h1>Cargando</h1>
  } else {
    toRender = <h1>Llegaron los datos</h1>
  }

  return (
    <div>
      <div>{toRender}</div>
      <div>{counter}</div>
      <button onMouseMove={incrementByOne} disabled={counter >= 50}>Increment</button>
      <button onMouseMove={decrementByOne} disabled={counter <= -50}>Decrement</button>
      <button onMouseMove={resetToZero}>Reset</button>
    </div>
  )
}

export default App;


// setInterval(
//     () => setCounter(counter + 1),
//     1000
//   )