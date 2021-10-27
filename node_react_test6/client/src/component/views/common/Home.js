import React,{useEffect} from 'react'
import axios from 'axios'

function Home() {

    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])


    return (
        <div>
            homePage
        </div>
    )
}

export default Home
