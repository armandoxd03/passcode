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
  const [disp, setDisp] = useState("INPUT CODE");
  const [inputPin, setInputPin] = useState("");
  const [savedPin, setSavedPin] = useState("1234567890");
  const [step, setStep] = useState(null);

  const numClickHandler = (e) => {
    e.preventDefault();
    const index = e.target.innerHTML;
    setInputPin((prev) => prev + index);
    setDisp((prev) => (inputPin + index));
  };

  const clrClickHandler = () => {
    setInputPin("");
    setDisp("INPUT CODE");
    setStep(null);
  };

  const checkPinHandler = () => {
    if (step === "verify") {
      if (inputPin === savedPin) {
        setDisp("ENTER NEW CODE");
        setStep("newPin");
      } else {
        setDisp("INVALID CODE");
        setStep(null);
      }
    } else if (step === "newPin") {
      if (inputPin.length >= 8) {
        setSavedPin(inputPin);
        setDisp("CHANGE CODE SUCCESSFUL");
        setStep(null);
      } else {
        setDisp("CODE SHOULD BE 8 DIGITS OR MORE");
      }
    } else {
      setDisp(inputPin === savedPin ? "OPEN" : "LOCKED");
    }
    setInputPin("");
  };

  const updatePinHandler = () => {
    setDisp("ENTER CURRENT CODE");
    setStep("verify");
    setInputPin("");
  };

  const nameHandler = () => {
    setDisp("JOHN ROY DUCUT");
  };

  const subjHandler = () => {
    setDisp("CPEITEL3");
  };

  return (
    <div className="App">
      <h1>PIN Lock</h1>
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
            <Key label={"Reset"} onClick={clrClickHandler} className="blue-button" />
            <Key label={0} onClick={numClickHandler} />
            <Key label={"Enter"} onClick={checkPinHandler} className="green-button" />
            <Key label={"PIN"} onClick={updatePinHandler} className="red-button" />
            <Key label={"NAME"} onClick={nameHandler} className="orange-button" />
            <Key label={"SUBJ"} onClick={subjHandler} className="purple-button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
