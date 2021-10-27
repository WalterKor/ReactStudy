import React, { useState } from 'react'
import UserName from './UserName';

function Hello({age}) {    
    console.log(age);
    const [name, setName] = useState("Mike")
    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";


    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
        setName(newName)
        
    }


    return (
        <div>
            <h1>state</h1>
            <h2>{name}({age}) : {msg}</h2>
            <UserName name={name}/>
            <button onClick={changeName}>Change</button>
        </div>
    )
}

export default Hello
