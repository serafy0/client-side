
function takeInput() {
    let number;

    while (!number || isNaN(number)) {
        number = Number(prompt("how many number will you enter"))
    }

    let users = []
    for (let i = 0; i < number; i++) {
        let name = prompt(`enter name for user${i + 1}`)
        let age
        while (!age || isNaN(age)) {
            age = Number(prompt(`enter age for user${i + 1}`))
        }

        users[i] = {name:name,age:age};




    }
    return users
}




function createTable() {
    document.write(`<table id="main-table" border="2" width="50%">
         <thead>
           <tr>
                <th>name</th>
                 <th>age</th>
             </tr>
        </thead>
         <tbody id="table-body">
            
         </tbody>
    </table>`)



}


  
function createTableByDOM() {
    let table = document.createElement("table");
    table.id = "main-table";
    table.border = "2";
    table.width = "50%";
  
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
  
    let nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    let ageHeader = document.createElement("th");
    ageHeader.textContent = "Age";
  
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(ageHeader);
  
    thead.appendChild(headerRow);
  
    let tbody = document.createElement("tbody");
    tbody.id = "table-body";
  
    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table)
  
    }



function styleTable(){

    let table = document.getElementById("main-table");
    table.style.borderCollapse = "collapse"
    table.style.width = "40%"

}

  


function addUsers(users) {
    let table = document.getElementById("table-body")
    console.log(table)

    for (let i = 0; i < users.length; i++) {

        let row = table.insertRow(0)
        let name = row.insertCell(0)
        let age = row.insertCell(1);

        name.innerHTML = users[i].name;
        age.innerHTML = users[i].age;
    }



}

function run(){

let input = takeInput();


// createTable()
createTableByDOM()


addUsers(input)
styleTable()

}
run();



