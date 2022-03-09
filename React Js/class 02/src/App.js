// import React from "react"
// import "./style.css"
// import car1 from "./Images/car1.jpg"
// import car2 from "./Images/car2jpg.jpg"

// function App() {
//   const myName = "Talha";
//   const styleObj = {
//     backgroundColor: "red",
//     color: "white",
//     width: "50%"
//   }
//   return (
//     <>

//       <h1 className="heading" id="heading2" >HELLO {myName} </h1>


//       <img src={car1} width="300" />
//       <img src={car2} width="300" />




//     </>
//   );
// }

// export default App;
import React from "react"
import Header from "./Components/Header.jsx"
import Img from "./Components/ImgComponent.jsx"
function App() {
  return (
    <>
      <Header />
      <Img />
    </>
  )
}

export default App
