import React from 'react';
import './Timer.css';
import { useState } from 'react';

const Timer = ({time}) =>{
    let newYears = `1 Jan ${time}`;
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    let totalSeconds = (newYearsDate - currentDate)/ 1000;

    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    
    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    setTimeout(()=>{
        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
    }, 1000)


    return(
        <div className="container">
        <h1>{`Time untill new ${time} year`}</h1>
            <div className="timer">
                <div className="time">
                    <p>{day}</p>
                    <span>Days</span>
                </div>
                <div className="time">
                    <p>{hour}</p>
                    <span>Hours</span>
                </div>
                <div className="time">
                    <p>{minute}</p>
                    <span>Minutes</span>
                </div>
                <div className="time">
                    <p>{second}</p>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    )
}
export default Timer;