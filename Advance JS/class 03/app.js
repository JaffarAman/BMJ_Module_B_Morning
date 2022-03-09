
// var keyword
// var firstName = "Jaffar"

// var firstName = "Umer"

// // console.log(firstName);

// function foo() {
//     var firstName = "Jaffar"
// }

// foo()
// console.log(firstName)


// let keyword

// let firstName = "aman"

// function foo1() {
//     let firstName = "jaffar";

// }

// if (20 > 10) {
//     let firstName = "jaffar";
//     console.log(firstName)

// }

// foo1()


////back ticks///
// let firstName = "Jaffar"
// let lastName = "aman"

// document.write(`my name is ${firstName} ${lastName}` )


// const obj = {
//     name  : "jaffar aman",
//     age : 20,
//     gender  : "Male",

// }

// let {namess , age} = obj

// document.write(`My full name is ${namess}`)

// const array = ["jaffar", ["umer"], "sufiyan", "ameen"];

// let arr1 =  array[0]
// let arr2 =  array[1]

// console.log(arr2)

// let [arr1, arr2, arr3, arr4] = array

// arr1 = prompt("enter")

// const [nestedArr1] = arr2

// console.log(nestedArr1);



///ARROW FUNCTION////

// function fun_name() {
//     return "HELLO CLASS 2"
// }


// console.log(fun_name())
// var fun_name = function () {
//     alert("HELLO CLASS")
// }

// fun_name()

// let fullName= "Jaffar Aman"




///return without use return keyword
// const foo = ()=>{
//     return "HELLO CLASS"
// }

///return without use return keyword
// const foo = () => fullName



// const functionValue = foo()
// console.log(functionValue)


// parameter Arrow function

// const add = (num1 , num2)=>{
//     console.log(num1 + num2)
// }

// add(20,50)


// single parameter Arrow function
// const printName = name => {
//     document.write(name)
// }

// printName("Jaffar Aman")




//without parameters
// const newFoo = _=>{
//         console.log("HELLO WORLD")
// }

// newFoo()

// const foo = (name, fname) => {
//     return "HELLO WORLD"
// }




// const foo100 = ()=> {
//     let aa = "jaff";

//     console.log(this.aa)
// }
// foo100()
// console.log(aa)


// const btn = document.getElementById("btn")
// btn.addEventListener("click" , function(e){
//         console.log(e.target)
// })


// const arr = ["jaffar" , "aman" , "ahmed"]

// const arr1 = []

// var a = [10]
// var b = [20]

// const arr = ["jaffar", "aman", "ahmed"]

// const arr2 = ["umer", "talha", "Ali"]

// const merge = [...arr, ...arr2 , 100 ,200]

// console.log(merge);

// const obj = {
//         name : "Jaffar",
//         section : "web & mobile"
// }
// const arr= [     {   ...obj     }     ]
// console.log(arr)


// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
// }

// const updateMyVehicle = {
//     type: 'car',
//     year: 2021,
//     color: 'yellow'
// }

// const merge = {
//     ...updateMyVehicle,
//     color : "red"

// }

// console.log(merge);


// rest opt
// const addition = (...jaffar)=>{

//     let add = 0;
//     for(let i = 0 ; i < jaffar.length ; i++){
//             add += jaffar[i]
//     }
//     return add

// }

// let result = addition(20,30,40,8,100 )

// console.log(result)



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    }
    )


