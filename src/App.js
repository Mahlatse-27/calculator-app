import { useState } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState("")
  const [result, setResult] = useState("")

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalculator = value => {

    if (
      operators.includes(value) && data === '' ||
      operators.includes(value) && operators.includes(data.slice(-1))
    ){
      return; 
    }

    setData(data + value)
  }

  const createDigits = () => {
    const digits = [];

    for(let i = 1; i < 10; i++ ){
      digits.push(
        <button 
          className="primary-btn" 
          onClick={() => updateCalculator(i.toString())} 
          key={i}> 
            {i}
        </button>
      )
    }

    return digits
  }


  return (
    <div className="App">
      <div className="calc-container">

        <div className="calc-display">
        { result ? <span className="result">(0)</span> : ''} &nbsp;<span>{data || "0" }</span>
        </div>

        <div className="btns">
          <div className="btns-container">
            <div className="left-btns">
              <button> AC </button>
              <button> +/- </button>
              <button> % </button>
              { createDigits() }
              <button className="primary-btn span-two" onClick={() => updateCalculator('0')}> 0 </button>
              <button className="primary-btn" onClick={() => updateCalculator('.')}> . </button>
            </div>

            <div className="right-btns">
              <button onClick={() => updateCalculator('/')}> / </button>
              <button onClick={() => updateCalculator('*')}> * </button>
              <button onClick={() => updateCalculator('-')}> - </button>
              <button onClick={() => updateCalculator('+')}> + </button>
              <button> = </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
