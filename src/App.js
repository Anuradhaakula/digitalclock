import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [time,setTime] = useState(new Date())

  useEffect(() => {
     const intervalId=setInterval(()=>{
      setTime(new Date())
     }, 1000);

     return ()=>{
      clearInterval(intervalId)
     }
  }, [])

  const options={
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }
    const dateString = time.toLocaleDateString("en-us",options)
  return (
    <div className="App">
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{dateString}</p>
    </div>
  );
}

export default App;
