// const apiPromise = new Promise(function(){

// })


// const apiPromise = new Promise((resolve, reject) => {
//     var age = 25;
//     if (age === 25) {
//         resolve("promise successfully")
//     } else {
//         reject("error")
//     }
// })
// .then((data) => {
//         console.log(data)
//     })
// .catch(err => console.log(err))

// const foo = async () => {

//     const data = await fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())
//         .then(res => console.log(res))
//         .catch(err => console.log(err))

//     console.log("HELLO WORLD")

//     // console.log(data)
// }


// console.log(100)


// const foo = ()=>{
//         console.log(200)
// }

// setTimeout(  foo  , 3000    )



// console.log(300)



// console.log(array)
// const obj ={
//         name : "jaffar"
// }

// const map = array.map((element, index , array) => {
//     // console.log(`${index} ${element}`)
//     console.log(array)

// })


// const arr = [10, 15, 17 , 20 , 45 , 50]

const arr = [{
    id: 100,
    name: "Jaffar",
    age: 20
}, {
    id: 101,
    name: "Aman",
    age: 15
}, {
    id: 102,
    name: "ali",
    age: 25
}]

// const maps = arr.map(e => e.name)

// console.log(maps)
// const userName = prompt("enter your name")
// const search = arr.filter(e => e.name === userName)

// console.log(search);

// const userCheck = search.length !== 0 ? "USER TRUE" : "invalid user"

// console.log(userCheck)



// const search = arr.filter(e => e.age <= 18)
// console.log(search)


// const map = arr.map((e, ind, arr) => {
//     console.log(ind, e, arr)
// })
// console.log(arr)

// const map =  arr.map(e=> e)

// console.log(map)

// const filter = arr.filter((e) => {
//     return e.id === 102
// })

// console.log(filter)





/// classes ///

// function Std(name, age) {
//     this.name = name;
//     this.age = age
// }
// const obj1 = new Std("Jaffar", 20)
// console.log(obj1)


// class MyClass {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }

// }

// const std1 = new MyClass("Jaffar", 20)

// console.log(std1)


// class Std {
//     constructor(fname, lname, age) {

//         this.fname = fname
//         this.lname = lname
//         this.age = age
//     }
// }


// class Result extends Std {
//     constructor(fname, lname, age, sub1, sub2) {
//         super(fname,lname,age)
//         this.sub1 = sub1
//         this.sub2 = sub2
//     }
// }

// const result = new Result("Jaffar", "Aman", 20, 80, 100)
// console.log(result)

// const std1 = new Std("Ahmed", "Khan", 25)
// console.log(std1);



class Std {
    constructor(fname, lname, age) {

        this.fname = fname
        this.lname = lname
        this.age = age
    }
}

class Result extends Std {
    constructor(fname, lname, age, sub1, sub2) {
        super(fname, lname, age)
        this.sub1 = sub1
        this.
            sub2 = sub2
    }

    getName() {
        return `${this.fname} ${this.lname}`
    }
    // static getName(fname, lname) {
    //     return `${fname} ${lname}`
    // }

}


// const std1 = new Std("Jaffar", "aman")
// console.log(std1)

const myResult = new Result("jaffar", "aman", 20, 60, 50)
console.log(myResult);
const myName = Result.getName("jaffar", "aman")
console.log(myName)

