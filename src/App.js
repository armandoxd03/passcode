import './App.css';
import { useState } from "react";

function Display({ display }) {
  return <>{display}</>;
}

function Key({ label, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const values = [
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

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const numClickHandler = (e) => {
    e.preventDefault();
    const index = parseInt(e.target.innerHTML);
    if (op === null) {
      setNum1(index);
      setDisp(values[index]);
    } else {
      setNum2(index);
      setDisp(values[index]);
    }
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  };

  const eqClickHandler = (e) => {
    e.preventDefault();
    if (op === "+") {
      setDisp(values[num1] + " + " + values[num2]);
    } else if (op === "-") {
      setDisp(values[num1] + " - " + values[num2]);
    } else {
      setDisp("ERROR");
    }
  };

  const clrClickHandler = (e) => {
    setNum1(null);
    setNum2(null);
    setOp(null);
    setDisp("10 Things That Require Zero Talent");
  };

  return (
    <div className="App">
      <h1>Calculator of John Roy Ducut - IT3A</h1>
      <div className="Calc">
        <div className="Disp">
          <Display display={disp} />
        </div>  
        <div className="Border">
          <div className="Buttons">
            <Key label={"What I learned?"} onClick={() => setDisp("John Roy Ducut")} className="full-width red-button" />
            <Key label={"What I want to learn?"} onClick={() => setDisp("John Roy Ducut")} className="full-width red-button" />
            <Key label={"How will I learn"} onClick={() => setDisp("John Roy Ducut")} className="full-width red-button" />
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
            <Key label={"Reset"} onClick={clrClickHandler} className="blue-button" />
            <Key label={"Ducut"} onClick={() => setDisp("John Roy Ducut")} className="full-width red-button" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
