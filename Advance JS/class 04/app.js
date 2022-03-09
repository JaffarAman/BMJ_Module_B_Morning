// alert("HELLO CLASS...")



// if (age === 20) {
//     console.log("TRUE")

// } else {
//     console.log("FALSE")
// }


// var check = age === 20 ? true : false;

// console.log(check)


// var age = 28;
// var check = (age > 20 && age < 30) ? "hello world" : "hello class"
// console.log(check);


// var check = age === 20 ? "Allow" : age === 25 ?
//     "Allow" : age == 28 ? "allow" : "not allow"

// age = 20, 25, 30

// if (age === 20) {
//     console.log(true)
// } else if (age === 25) {
//     console.log(true)

// } else if (age === 30) {
//     console.log(true)

// } else {
//     console.log(false)
// }

// var age = +prompt("enter age");
// var check = (age === 20) ? true : (age === 20 ? true : age === 30 ? true : false);

// console.log(check)




// Promises//


// setTimeout(function name(params) {

// } , timer)



// console.log(1)

// setTimeout(() => {
//     console.log(3)
// }, 3000)


// console.log(2)


// const mypromise = new Promise(function (resolve, reject) {
//     var biryaniDone = true;
//     if (biryaniDone) {
//         resolve(true)
//     } else {
//         reject(false)
//     }

// }
// )
//     .then(function (response) {
//         console.log("response", response)
//     })
//     .catch((err) => {
//         console.log("err", err)
//     })


// console.log(mypromise)



// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => response.json())
// .then(res=>{
//         console.log(res)
// }).catch(err=>{
//         console.log(err)
// })


// console.log(data)




// const myPromise = new Promise((resolve, reject) => {

//     const data = fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())
//     if (data) {
//         resolve(data)
//     } else {
//         reject("error")
//     }

// })

//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

// console.log(myPromise)





// const myPromise = new Promise((resolve, reject) => {
//     const data = true
//     if (data) {
//         resolve(data)
//     } else {
//         reject("something wrong!")
//     }
// })
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
// console.log(myPromise)



// async await

// const data = async () => {
//     await fetch "jaffar aman"
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
//     // const add = 2 + 5

// }
// data()





// const getApi = async () => {

//     await fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())

//         .then(res => console.log(res))
//         .catch(err => console.log(err))



// }

// for in && For of ///



// const firstName = "Jaffar";
// const lastName = "Aman";
// const age = 20;
// const isOnline = true;

// const obj = {
//     firstName,
//     lastName,
//     age,
//     isOnline
// }

// const arr = [500, 800, 600, 700, 800]

// for (const key in obj) {
//     console.log(key, obj[key])
// }


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }


// for (const items of obj) {
//     console.log(items)
// }



// console.log(obj);


/////SET/////


// const myData = ["jaffar", "umer", "bilal", "sufiyan", "umer"]

// const mySet = Array.from(new Set(myData))

// console.log("myData", myData);
// console.log("mySet", mySet);



///ARRAY.FROM()

// const string = "Jaffar"
// console.log(Array.from(string))


// // ARRAY.OF()
// const string = "Jaffar"
// const arrayOf = Array.of(string)
// console.log(arrayOf)


// console.log("mySet", [...mySet])