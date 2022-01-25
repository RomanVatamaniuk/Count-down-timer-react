import React from 'react';
//import { useState } from 'react'
import './Form.css'

const Form = ({date, setDate, time, setTime})=>{

    const handleDate = (e) =>{
        e.preventDefault();
        setTime(date)
        console.log(time)
    }

    return(
    <div className="form" onSubmit={handleDate}>
        <form>
            <input type="number" min={date} max="3000"  className="input" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            <input value='Set Time' type="submit" className="setter" />
        </form>
    </div>
    )
};

export default Form;