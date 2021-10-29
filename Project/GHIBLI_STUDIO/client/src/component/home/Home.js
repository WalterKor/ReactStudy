import React from 'react'
import styles from '../../static/css/home/home.css'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

function Home() {
    return (
        <div className="content_box">
            <Content1/>
            <Content2/>
            <Content3/>                            
        </div>
    )
}

export default Home
