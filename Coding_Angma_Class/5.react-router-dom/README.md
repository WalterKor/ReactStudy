## React JS #10 라우터 구현 react-router-dom
```javascript
/*App.js*/
<Route exact path="/day/:day" component={Day}/> //pathVariable

/*Day.js*/
    import React from 'react'
    import dummy from '../db/data.json'
    import { useParams } from 'react-router-dom' //Url param 값을 가져오기위해서
    function Day() {
        
        const day =  parseInt(useParams().day); //이렇게 사용한다. 
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



```
