import React, {useState} from "react"
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const [input,setInput]=useState("")
  const [fahrenhite,setFarhenhite]=useState()
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
    setFarhenhite("");
    setInput("");
  }

  const backspace = () => {
   setInput(input.slice(0,-1))
    
  }
  
  const convert1 = () => {
    setResult(eval(result+input)+273)

  } 
  const convert2 = () => {
    setFarhenhite(eval(input*(9/5)+ 32))
  }
 
  return (
    <div className="container">
      <div className="input1">
        <div className="celsius">
          <h3>Celsius:</h3>
          <input className="middle" type="number"  onChange={(e) => {setInput(e.target.value)}} value={input}/>
        </div>
        

      </div>
      <div className="output">
        <div className="output1">
          <input type="number" value={result}/>
          <button onClick={convert1} >Convert to Kelvin</button>
        </div>  
        
      
        <div className="output2">
          <input type="number" value={fahrenhite}/>
          <button onClick={convert2} >Convert to Fahrenhite</button>

        </div>
      </div>  
      <div className="others">
        <button onClick={clear}>Clear</button>
        <button onClick={backspace}>Backspace</button>
      </div>
    </div>
    
  );
}

export default App;
