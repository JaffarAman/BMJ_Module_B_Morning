// alert("HELLO CLASS")



// console.log("1st")
// setTimeout(() => {
//     console.log("2nd")
// }, 3000)
// console.log("3rd")







// class MyClass1 {

//     constructor(name, age, session) {
//         this.fullName = name;
//         this.stdAge = age
//         this.stdSession = session

//     }
//     getName(name) {
//         return this.name
//     }


// }

// class MyClass2 extends MyClass1 {
//     constructor(name, age, session, sub1, sub2) {
//         super(name, age, session)
//         this.sub1 = sub1
//         this.sub2 = sub2
//     }
// }


// const std1 = new MyClass1("Jaffar", 20, "local storage")
// const std2 = new MyClass1("Aman", 21, "local storage")
// const std3 = new MyClass1("Ameen", 19, "local storage")


// const myStd = new MyClass2("Jaffar Aman", 20, " classes", "js", "react")
// console.log(myStd);




// const obj = {
//     fullName: "Jaffar",
//     getName: function () {
//         return this.fullName
//     }
// }

// var fullName = "Jaffar Aman"

// const obj1 = {
//     fullName: "Jaffar",
//     getName: () => {
//         return this.fullName
//     }
// }

// console.log(obj.getName())
// console.log(obj1.getName())


//this
// const fullname = "jaffar"

// console.log(this.fullname)



////// local storage /////
// session 
// cookie

// const namess = document.getElementById("name")
// const td2 = document.getElementById("td2")
// const input = document.getElementById("input")
// const cellnumber = document.getElementById("cellnumber")

// // const obj= {
//     myname : ""
// }

// const profilePage = (e) => {
//     if (input.value < 3) {
//         alert("please enter name")
//     } else {
//         // localStorage.setItem(key , value)
//         localStorage.setItem("myName", input.value)
//         localStorage.setItem("cellnumber", cellnumber.value)
//         window.location.assign("./profile.html")

//     }

// }

// const getValue = () => {
//     const value = localStorage.getItem("myName")
//     const value2 = localStorage.getItem("cellnumber")

//     console.log(value)

//     namess.innerHTML = value
//     td2.innerHTML = value2
// }





///local storage///
const name = document.getElementById("input")
const cellnumber = document.getElementById("cellnumber")
const table = document.getElementById("table")



const profilePage = () => {

    const getData = JSON.parse(localStorage.getItem("todo")) || []

    console.log(getData)

    const obj = {
        name: name.value,
        cellnumber: cellnumber.value
    }
    getData.push(obj)

    // console.log(JSON.stringify(getData))
    localStorage.setItem("todo", JSON.stringify(getData))
    printData()
}


const printData = () => {

    const obj = JSON.parse(localStorage.getItem("todo"))


    obj.map((e) => {
        return table.innerHTML += `

        <tr>
        <td>${e.name}</td>
        <td>${e.cellnumber}</td>
        </tr>
        `
    })


}

// printData()

localStorage

