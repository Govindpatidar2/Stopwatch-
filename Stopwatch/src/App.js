import React, { useState } from 'react';
import './App.css';

const StopwatchApp = () => {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0});
  const [position, setPosition] = useState();

  let newHour = time.hour;
  let newMin = time.min;
  let newSec = time.sec;

  const start = () => {
    watchFun();
    setPosition(setInterval(watchFun, 1000));
  };
  const stop = () => {
    clearInterval(position);
  };

  const reset = () => {
    clearInterval(position);
    setTime({ hour: 0, min: 0, sec: 0});
  };

  const watchFun = () => {
    if (newSec === 60) {
      newSec = 0;
      newMin++;
    }
    if (newMin === 60) {
      newMin = 0;
      newHour++;
    }
    newSec++;
    return setTime({ hour: newHour, min: newMin, sec: newSec});
  };

  return (
    <>
      <div className="mystop">
        <h1>
          {time.hour + ' : ' + time.min + ' : ' + time.sec }
        </h1>
        <div className="btn">
          <button className="start" onClick={start}>
            Start
          </button>
          <button className="stop" onClick={stop}>
            Stop
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopwatchApp;
