
let contentBox = document.getElementById("contentBox")


const addBook = () => {
    let inputTitle = document.getElementById("inputTitle")
    let inputText = document.getElementById("inputText")

    if (inputTitle.value.length > 3 && inputText.value.length > 3) {

        const obj = {
            title: inputTitle.value,
            text: inputText.value
        }
        const string = JSON.stringify(obj)
        localStorage.setItem("todo", string)

        getItem()
        inputTitle.value = "";
        inputText.value = "";
    }

    else {
        alert("Please Check Input Value Your Input Is Empty ...")
    }

}

const titleEditList = (t) => {
    let titleUpdate = prompt("Enter Title", t.parentNode.previousSibling.previousSibling.innerHTML);
    t.parentNode.previousSibling.previousSibling.innerHTML = titleUpdate;
}

const editDiv = (t) => {
    let textUpdate = prompt("Enter Title", t.parentNode.previousSibling.innerHTML);
    t.parentNode.previousSibling.innerHTML = textUpdate;
    console.log(textUpdate)
}


const clearContentBox = () => {
    contentBox.innerHTML = ""
}

const delDiv = (e) => {
    e.parentNode.parentNode.remove()
}


const getItem = () => {

    const obj = JSON.parse(localStorage.getItem("todo"))
    console.log(obj)

    let div = document.createElement("div")
    div.className = "col-lg-3 col-md-5 col-sm-9 my-div"
    let h2 = document.createElement("h2")
    h2.className = "my-h2"
    let para = document.createElement("p")
    para.className = "my-para"

    let title = document.createTextNode(obj.title)
    let text = document.createTextNode(obj.text)

    h2.appendChild(title)
    para.appendChild(text)
    div.appendChild(h2)
    div.appendChild(para)
    contentBox.appendChild(div)

    let titleEditBtn = document.createElement("button");
    titleEditBtn.className = "fal fa-h2 btn btn-primary titleEditBtn"
    titleEditBtn.setAttribute("onclick", "titleEditList(this)");

    let editBtn = document.createElement("button");
    editBtn.className = "far fa-text btn btn-primary textEditBtn"
    editBtn.setAttribute("onclick", "editDiv(this)");

    let delBtn = document.createElement("button");
    delBtn.className = "fas fa-trash btn btn-primary delBtn"
    delBtn.setAttribute("onclick", "delDiv(this)");

    let btnSec = document.createElement("section")
    btnSec.className = "buttonSection"
    btnSec.appendChild(titleEditBtn)
    btnSec.appendChild(editBtn)
    btnSec.appendChild(delBtn)

    div.appendChild(btnSec)
    console.log(div)
}

getItem()