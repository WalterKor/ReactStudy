import React, { useState } from 'react'

function Hello() {
    // let name = 'Mike';
    const [name, setName] = useState('Mike');

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike"
        console.log(name);
        // document.getElementById("name").innerText = name;
        setName(newName)
    }


    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    )
}

export default Hello
