import { useState } from "react";

function App() {

let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1
    setCounter(counter + 1)
    
  }

    const removeValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1
    setCounter(counter - 1)
    
  }

  return (
  <>
    <h1>Chai aur React</h1>
    <h3>Counter value: {counter}</h3>

    <br />
    
    <button 
      onClick={addValue}>
      Add value
    </button>

    <br />
    
    <button
      onClick={removeValue}>
      decrease value
    </button>
  </>  
  )
}

export default App
