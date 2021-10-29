import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DayList() {

    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(()=>{
        fetch('http://localhost:3001/days')
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setDays(data);
        })
    },[]);

    /*랜더링되고 난 이후 작동*/

    return (
        <div>
            <ul className="list_day">
                {days.map(day =>(
                    <li key={day.id}>
                        <Link to = {`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>  
            
        </div>
    )
}

export default DayList
