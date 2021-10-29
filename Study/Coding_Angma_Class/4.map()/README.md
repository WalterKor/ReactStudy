## React JS #9 더미 데이터 구현, map() 반복문
### Day.js Component

```javascript
import React from 'react'
import dummy from '../db/data.json'

function Day() {

    const day = 2;
    const wordList = dummy.words.filter(word => word.day === day);


    return (
        <div>
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


```
