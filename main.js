//testing the hack news api
const hacknewApi = document.querySelector("#test");
const buttonClick = document.querySelector("#button");
const tableRow = document.createElement("tr");
const tableHeader = document.createElement("th");
const tableData = document.createElement("td");
const tabledataDiv = document.querySelector("#data");
//const topstoriesArray = [];





buttonClick.addEventListener("click", onClick);

function onClick() {


    tabledataDiv.appendChild(tableRow);
    tableRow.appendChild(tableHeader);
    tableHeader.append("A great story");
    tableRow.appendChild(tableHeader);
    tableHeader.append("by a great person");

    //Firebase fetch for topstory IDs.
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then(function (bootdata) {
            return bootdata.json();

        })
        .then(function (data) {
            console.log(data[1], "data)")
            //topstoriesArray.push(data)
            console.log(topstoriesArray, "story")

            fetch( "https://hacker-news.firebaseio.com/v0/item/"+data[1]+".json?print=pretty")
            .then(function (bootdata){
                return bootdata.json();
            })
            .then(function (data){
                console.log(data, "data2")
            })
        })
       
       
       
       
        //for(let i = 0; i <data.length; i++) {
           // console.log(data.length[i])
       // }
}




//printArray()
    //function printArray(topstoriesArray) {
        //for (let i = 0; i < topstoriesArray.length; i++) {
          //  if (topstoriesArray[i] instanceof Array) {
             //   printArray(topstoriesArray[i]);
           // } else {
            //    console.log(topstoriesArray[i]);
            //}
        //}
   // } 