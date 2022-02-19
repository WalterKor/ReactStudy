import React, { useEffect} from 'react';
import axios from 'axios';

function Landingpage() {

    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response))
    },[])

  return (
    <div>Landingpage</div>
  )
}

export default Landingpage