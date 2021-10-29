import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Word from './Word';
function Day() {
    
    const { day } = useParams();
    //const wordList = dummy.words.filter(word => word.day === day);
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setWords(data);
        });
    },[]);


    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {words.map(word =>(
                    <Word word = {word} key = {word.id}/>
            ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day
