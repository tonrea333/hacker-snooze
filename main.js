//testing the hack news api
const hacknewApi = document.querySelector("#test");
const buttonClick = document.querySelector("#button");
;
//const topstoriesArray = [];





buttonClick.addEventListener("click", onClick);

function onClick() {



    const tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "row");
    const tableHeader = document.createElement("th");
    tableHeader.setAttribute("class", "header");
    const tableData = document.createElement("td");
    tableData.setAttribute("class", "adata");
    const tabledataDiv = document.querySelector("#data")












    //Firebase fetch for topstory IDs.
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then(function (bootdata) {
            return bootdata.json();

        })


        .then(function (data) {
            console.log(data[1], "data)")


            let i = 0;



            console.log(i, "i")

            fetch("https://hacker-news.firebaseio.com/v0/item/" + parseData + ".json?print=pretty")
                .then(function (bootdata) {
                    return bootdata.json();

                })
                .then(function (data) {
                    console.log(data, "data2")



                    tabledataDiv.appendChild(tableRow);
                    tableRow.appendChild(tableHeader);
                    tableHeader.append();
                    tableRow.appendChild(tableData);
                    tableData.append();
                    tabledataDiv.appendChild(tableRow);
                    const title = parseData.title;
                    const url = data.url;
                    const by = data.by;






                    //setInterval(function () {
                    //tableHeader.innerHTML = data[i++];
                    //if (i == 100) {
                    console.log("top 100")
                    // clearInterval()
                    //}
                    //}, 1000);


                    let a = title.link(url);
                    console.log(tableHeader.innerText);
                    tableHeader.innerHTML = a;
                    tableData.innerHTML = " by " + by;

                })

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