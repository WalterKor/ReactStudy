import React from 'react'
import FooterCss from '../../static/css/common/FooterContent.css';


function FooterContent() {
    function page1() {
        document.location.href="/www.naver.com"
    }
    return (
        <div className="Footer">
                <div>humanity engineering ©2021 Created by Walter</div>
            <diV className="LinkIcon">
                <img onClick={page1} src="https://img.icons8.com/fluency/48/000000/github.png"/>
                <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
                <img src="https://img.icons8.com/ios-filled/50/000000/circled-v.png"/>
            </diV>
        </div>
    )
}

export default FooterContent

