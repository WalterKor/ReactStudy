import React from 'react'
import './common.css';
function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_Header">
                Hello,  STUDIO GHIBLI!
            </div>
            <div className="Footer_Nav">
                <div className="About">About</div>
                <div className ="Company">Company</div>
                <div className = "FollowMe">Follow Me</div>
            </div>
            <div className="Footer_Contents">
                <div className="content1"></div>
                <div className="content2"></div>
                <div className="content3"></div>
            </div>
        </div>
    )
}

export default Footer
