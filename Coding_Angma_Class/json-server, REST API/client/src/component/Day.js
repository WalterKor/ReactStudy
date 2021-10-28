import React from 'react'
import dummy from '../db/data.json'
import { useParams } from 'react-router-dom'
import Word from './Word';
function Day() {
    
    const day =  parseInt(useParams().day);
    const wordList = dummy.words.filter(word => word.day === day);

    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {wordList.map(word =>(
                    <Word word = {word} key = {word.id}/>
            ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day
