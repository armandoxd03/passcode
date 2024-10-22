import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <>{display}</>
  );
}

function Key({ label, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const outputs = [
    "Having A Strong Work Ethic",
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared"
  ];

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.innerHTML);
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(outputs[value]);
      } else {
        setNum1(value);
        setDisp(outputs[value]);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(outputs[value]);
      } else {
        setNum2(value);
        setDisp(outputs[value]);
      }
    }
    console.log(num1 + '|' + op + '|' + num2);
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
    console.log(num1 + '|' + op + '|' + num2);
  }

  const eqClickHandler = () => {
    if (num1 !== null && num2 !== null) {
      let result;
      if (op === "+") {
        result = outputs[num1] + " and " + outputs[num2];
      } else if (op === "-") {
        result = outputs[num1];
      } else {
        result = "ERROR";
      }
      setDisp(result);
    }
  }

  const clrClickHandler = () => {
    setNum1(null);
    setNum2(null);
    setOp(null);
    setDisp("10 Things That Require Zero Talent");
  }

  return (
    <div className="App">
      <h1>Calculator of John Roy Ducut - IT3A</h1>
      <div className="Calc">
        <div className="Disp">
          <Display display={disp} />
        </div>
        <div className="Border">
          <div className="Buttons">
            <Key label={1} onClick={numClickHandler} />
            <Key label={2} onClick={numClickHandler} />
            <Key label={3} onClick={numClickHandler} />
            <Key label={4} onClick={numClickHandler} />
            <Key label={5} onClick={numClickHandler} />
            <Key label={6} onClick={numClickHandler} />
            <Key label={7} onClick={numClickHandler} />
            <Key label={8} onClick={numClickHandler} />
            <Key label={9} onClick={numClickHandler} />
            <Key label={0} onClick={numClickHandler} />
            <Key label={"+"} onClick={opClickHandler} className="cyan-button" />
            <Key label={"-"} onClick={opClickHandler} className="cyan-button" />
            <Key label={"="} onClick={eqClickHandler} />
            <Key label={"RESET"} onClick={clrClickHandler} className="blue-button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
