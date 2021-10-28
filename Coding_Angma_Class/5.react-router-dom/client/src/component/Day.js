import React from 'react'
import dummy from '../db/data.json'
import { useParams } from 'react-router-dom'
function Day() {
    
    const day =  parseInt(useParams().day);
    const wordList = dummy.words.filter(word => word.day === day);

    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {wordList.map(word =>(
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day
