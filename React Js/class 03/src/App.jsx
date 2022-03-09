import React, { useState } from "react"
import Profile from "./Components/profile"
const App = () => {
    const foo = (e) => {
        console.log("HELLO WORLD" + e)
    }
    const [fullName, setFullName] = useState("jaffar")


    // let fullName = "Jaffar Aman"
    // console.log(fullNameFunction)
    let handleChange = () => {
        // fullName = "Sir Ali"
        // console.log(fullName);

        setFullName("JAFFAR AMAN")

    }

    console.log("hahahahahah")
    return (
        <>
            <h1>HELLO WORLD</h1>
            <Profile name="Jaffar Aman" age={22} city="karachi" helloFunction={foo} />
            {/* <button onClick={ ()=>foo("call back")  }  >CLICK</button> */}
            <h1>{fullName}</h1>
            <button onClick={handleChange}>CHANGE</button>
        </>


    )
}

export default App