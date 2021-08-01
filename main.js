//testing the hack news api
const hacknewApi = document.querySelector("#test");
const buttonClick = document.querySelector("#button");
const tableRow = document.createElement("tr");
const tableHeader = document.createElement("th");
const tableData = document.createElement("td");
const tabledataDiv = document.querySelector("#data");






buttonClick.addEventListener("click", onClick);

function onClick() {


    tabledataDiv.appendChild(tableRow);
    tableRow.appendChild(tableHeader);
    tableHeader.append("A great story");
    tableRow.appendChild(tableHeader);
    tableHeader.append("by a great person");


    // fetch("https://hacker-news.firebaseio.com/v0/")
    //.then(function(bootdata){
    //  return bootdata.json();

    //})
    //.then(function(data) {
    //  console.log(data, "data)")
    // })

}
