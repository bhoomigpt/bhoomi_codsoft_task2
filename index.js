let itemsArray=[ ]
const screen = document.getElementById("screen")
const ulEl = document.getElementById("items") 

const itemsFromLocalStorage = JSON.parse( localStorage.getItem("listItems"))

if (itemsFromLocalStorage) {
    itemsArray = itemsFromLocalStorage
    load()
}

function addItems(){
    itemsArray.push(screen.value)
    screen.value = ""
    localStorage.setItem("items", JSON.stringify(itemsArray))
    load()
}

function load() {
    let listItems = " "
    for ( let i=0 ; i < itemsArray.length ; i++){
        listItems += `
        <div class="container">
            <li> ${itemsArray[i]} </li>
            <button value="${i}" onclick="deleteItem('${i}')"> Delete </button>
        </div>
        `
    }
    ulEl.innerHTML = listItems
}

function allDelete(){
    itemsArray = []
    localStorage.clear()
    load()
}

function deleteItem(value){
    itemsArray.splice(value,1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    load()
}
