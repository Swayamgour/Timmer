import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [sec, setSec] = useState(0);
  const [second, setSecond] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [resume, setResume] = useState('pause');
  const [stop, setStop] = useState(false);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecond(second + 1);
       
      if (second === 100) {
        setSec(sec + 1);
        setSecond(0);
      } else if (sec == 59) {
        // setHour(hour+1)
        setMin(min + 1);
        setSec(0);
        setSecond(0);
      } else if (min == 59) {
        setHour(hour + 1);
        setSec(0);
        setSecond(0);
        setMin(0);
      }
    } , 10);
    return () => clearInterval(timer);
  } );

  const handelClick = () => {
    setHour(0);
    setMin(0);
    setSec(0);
  };

  const handelPause = () => {
    setStop(true)
    resume == 'pause' ? setResume('Resume') : setResume('pause');
  };
  return (
    <div>
      <h1>StopWatch</h1>
      <h1>
      {hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}:
      {sec < 10 ? '0' + sec : sec}:{second < 10 ? '0' + second : second}</h1>
      <br />
      <button onClick={handelClick}>Restart</button>
      <button onClick={handelPause}>{resume}</button>
    </div>
  );
}
