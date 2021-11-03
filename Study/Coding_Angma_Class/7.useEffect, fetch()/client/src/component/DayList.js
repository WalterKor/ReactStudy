import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DayList() {

    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onClick() {
        setCount(count + 1);        
    }    
       
    /*useEffect 렌더링이 다 끝난 직후*/
    useEffect(()=>{
        console.log("Count Change!!")
    });

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
            <button onClick={onClick}>{count}</button>                          
        </div>
    )
}

export default DayList
