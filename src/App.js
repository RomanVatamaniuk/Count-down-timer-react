import './App.css';
import Timer from './Components/Timer'
import Form from './Components/Form'
import { useState } from 'react'

function App() {
  let a = new Date().getFullYear()+1;
  const [date, setDate] = useState(a);
  const [time, setTime] = useState(a);
  return (
    <div>
      <Timer time={time}/>
      <Form date={date} setDate={setDate} time={time} setTime={setTime}/>
    </div>
  );
}

export default App;
