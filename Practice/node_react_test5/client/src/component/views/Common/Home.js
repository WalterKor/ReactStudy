import React,{useEffect} from 'react'
import axios from 'axios'

function Home() {
    
    useEffect(()=>{
        axios.get('/api/hello')
        .then( response => console.log(response.data))
    }, [])

    return (
        <div>
            home page
        </div>
    )
}

export default Home
