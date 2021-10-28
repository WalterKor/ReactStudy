## React JS #12 useEffect, fetch()로 API 호출
```javascript
    json-server --watch ./src/db/data.json --port 3001 //json-server 라이브러리 작동



    /*Word.js*/
    import React, {useState} from 'react'

    function Word({ word }) {
        
        /*useState 사용법*/
        const [isShow, setisShow] = useState(false)
        const [isDone, setIsDone] = useState(word.isDone)

        /*함수 사용한거 주의해서 보기*/
        function toggleShow() {
            setisShow(!isShow)
        }

        function toggleDone(params) {
            setIsDone(!isDone)
        }

        return (        
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    { isShow ? '숨기기' : '보기'}
                </button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>               
        )
    }

    export default Word

    
```
