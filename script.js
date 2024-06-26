let add = document.getElementById("add");
let clear = document.getElementById("clear");


function getAndUpdate(){
    console.log("Updating list...");
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}
function update() {
    console.log("Updating list...");
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        
    }
    

    populateTable();
}

function populateTable() {
    let tableBody = document.getElementById("tableBody");
    let str = "";
    let itemJsonArrayStr = localStorage.getItem('itemsJson');
    let itemJsonArray = JSON.parse(itemJsonArrayStr);

    itemJsonArray.forEach((element, index) => {
        str += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                </tr>`;
    });
    tableBody.innerHTML = str;
}

function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    let itemJsonArrayStr = localStorage.getItem('itemsJson');
    let itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    populateTable();
    update();
}

add.addEventListener("click", getAndUpdate);
populateTable();
function clearStorage(){
    console.log("clearing the storage")
    localStorage.clear();
    update();
}