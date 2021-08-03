//Hack news "ask" page

//Const needed for page

const buttonClickTwo = document.querySelector("#button2");
const hackButtonNews = document.querySelector("#hacklogo");
//Event listner for ask news
buttonClickTwo.addEventListener("click", askClick);

//Event listner to return to main page
hackButtonNews.addEventListener("click", hackClick)

//Function redirects user back to main page

function hackClick() {
    location.href = "index.html"
}



function askClick() {
    fetch("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
        .then(function (bootdata) {
            return bootdata.json();
        })
        .then(function (data) {
            console.log(data)

            let i = 0
            for (let i = 0; i < data.length; i++) {
                data[i] = data[i] + 1;

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
                        const tabledataDiv = document.querySelector("#data2")

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
                        const text = data.text;
                        const by = data.by;
                        //const score = data.score;
                        console.log(title)
                        //console.log(url)
                        console.log(by)

                        //setInterval(function () {
                        //tableHeader.innerHTML = data[i++];
                        //if (i == 100) {

                        // clearInterval()
                        //}
                        //}, 1000);


                        //let a = title.link(url);
                        console.log(tableHeader.innerText);
                        tableHeader.innerHTML = title;
                        tableData.innerHTML = " by " + by;
                        //tableData2.innerHTML = "Score: " + " " + score;

                    })
            }





        })

}