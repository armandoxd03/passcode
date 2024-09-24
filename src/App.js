import './App.css';

function Key({label, onClick}){
  return(
    <button onClick={onClick}>
      {label}
    </button>
  )
}

function Display(){
  return(
<>0</>
  );
}

function App() {
  const onClickHandler = (e) => { 
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
  }


  return (
    <div className="App">
      <div className="Calc">
      <div className="Disp">
        <Display/>
      </div>
      <div className="Buttons">
        <Key label={1} onClick={onClickHandler}/>
        <Key label={2} onClick={onClickHandler}/>
        <Key label={3} onClick={onClickHandler}/>
        <Key label={"+"} onClick={onClickHandler}/>
        <Key label={4} onClick={onClickHandler}/>
        <Key label={5} onClick={onClickHandler}/>
        <Key label={6} onClick={onClickHandler}/>
        <Key label={"-"} onClick={onClickHandler}/>
        <Key label={7} onClick={onClickHandler}/>
        <Key label={8} onClick={onClickHandler}/>
        <Key label={9} onClick={onClickHandler}/>
        <Key label={"×"} onClick={onClickHandler}/>
        <Key label={"C"} onClick={onClickHandler}/>
        <Key label={0} onClick={onClickHandler}/>
        <Key label={"="} onClick={onClickHandler}/>
        <Key label={"÷"} onClick={onClickHandler}/>

      </div>
      </div>      
    </div>
  );
}

export default App;
