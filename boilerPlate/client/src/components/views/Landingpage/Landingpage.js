import React, { useEffect} from 'react';
import axios from 'axios';

function Landingpage() {

    useEffect(()=>{
        axios.get('http://localhost/api/hello')
        .then(response => console.log(response.data))
    },[])

  return (
    <div>Landingpage</div>
  )
}

export default Landingpage