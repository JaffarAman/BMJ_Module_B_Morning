import React from "react"
import Logo from "../Images/logo.png"
import "./header.css"


const Header = () => {
    return (
        <section className="headerBox">
            <div className="logo">
                <img src={Logo} width="80" alt="" />
            </div>
            <div className="navlinks">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>FEEDBACK</li>
                </ul>
            </div>
        </section>
    )
}

export default Header