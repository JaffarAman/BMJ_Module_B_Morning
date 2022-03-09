import React from "react"
import "./section.css"
import Img from "../Images/download.jpg"

function Section() {
    return (
        <div className="sectionBox">
            <section className="sectionContent">
                <p>New Product</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quae consequuntur sit possimus magnam dolore quisquam libero perferendis! Incidunt beatae repellendus alias ratione, dicta odio minus a provident. Pariatur, eius!</p>
            </section>
            <section className="sectionImg">
                <img src={Img} width="100%" alt="" />
            </section>
        </div>
    )

}

export default Section