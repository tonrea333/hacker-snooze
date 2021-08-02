//testing the hack news api
//const hacknewApi = document.querySelector("#test");
const buttonClick = document.querySelector("#button");
const askButton = document.querySelector("#ask");
//const topstoriesArray = [];


//Button to action "ask listing"
askButton.addEventListener("click", onClick2);
//function to redirect user to ask page
 function onClick2(){
 //let pageTwoJava = askButton.link()
location.href = "index2.html"

 }
//Button to action listing 100 top stories
buttonClick.addEventListener("click", onClick);

function onClick() {


    //Firebase fetch for topstory IDs.
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then(function (bootdata) {
            return bootdata.json();

        })

        .then(function (data) {
           
            let i = 0


            //function articleGen() {
            // setInterval(function () {
            // for(let i = 0; i < data.length; i++){
            // data[i] = data[i] + 1;
            // }}, 1000)
            //let y = 0
            //function x() {
            //    y = y + 1

                for (let i = 0; i < data.length; i++) {
                    data[i] = data[i] + 1;

                    //let i =0 

                    //new_arr = data.map(i => i +1)
                    //console.log(new_arr)

                   
                    fetch("https://hacker-news.firebaseio.com/v0/item/" + data[i] + ".json?print=pretty")
                        .then(function (bootdata) {
                            return bootdata.json();

                        })
                        .then(function (data) {
                            console.log(data, "data2")
                            console.log(i, "i")
                            const tableRow = document.createElement("tr");
                            tableRow.setAttribute("class", "row");
                            const tableHeader = document.createElement("th");
                            tableHeader.setAttribute("class", "header");
                            const tableData = document.createElement("td");
                            tableData.setAttribute("class", "adata");
                            const tableData2 = document.createElement("td");
                            tableData2.setAttribute("class", "adata");
                            const tabledataDiv = document.querySelector("#data")

                            tabledataDiv.appendChild(tableRow);
                            tableRow.appendChild(tableHeader);
                            tableHeader.append();
                            tableRow.appendChild(tableData);
                            tableData.append();
                            tabledataDiv.appendChild(tableRow);
                            tableRow.appendChild(tableData);
                            tableData.append();
                            tableRow.appendChild(tableData2);
                            tableData2.append();

                            const title = data.title;
                            const url = data.url;
                            const by = data.by;
                            const score = data.score;
console.log(title)
console.log(url)
console.log(by)

                            //setInterval(function () {
                            //tableHeader.innerHTML = data[i++];
                            //if (i == 100) {
                           
                            // clearInterval()
                            //}
                            //}, 1000);


                            let a = title.link(url);
                            console.log(tableHeader.innerText);
                            tableHeader.innerHTML = a;
                            tableData.innerHTML = " by " + by;
                            tableData2.innerHTML = "Score: "+" "+ score;

                        })
                    // } articleGen()
                }
            //} setInterval(x, 1000);

        })



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