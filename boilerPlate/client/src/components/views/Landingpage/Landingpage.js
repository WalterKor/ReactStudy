import React, { useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

function Landingpage(props) {

    useEffect(()=>{
        axios.get('http://localhost/api/hello')
        .then(response => console.log(response.data))
    },[])
  
    const onClickHandler = ()=>{
      axios.get('/api/users/logout').then(response => {
        if(response.data.success){
          props.history.push('/login')
        }else{
          alert('로그아웃이 실패했습니다.')
        }
      })
    }


  return (
    <div>Landingpage
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  )
}

export default withRouter(Landingpage);