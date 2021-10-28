import React from 'react'

function Hello() {
    function showName() {
        console.log('Mike');
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(e) {
        console.log(e.target.value);
    }
    
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show Name</button>
            <button onClick={()=>{
                showAge(10);
            }}>Show Age</button>

            <input type="text" onChange={showText}/>

        </div>
    )
}

export default Hello

