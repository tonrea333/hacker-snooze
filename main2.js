//Hack news "ask" page

//Const needed for page

const buttonClickTwo = document.querySelector("#button2");
const hackButtonNews = document.querySelector("#hacklogo");
//Event listner for ask news
buttonClickTwo.addEventListener("click", askClick);

//Event listner to return to main page
hackButtonNews.addEventListener("click", hackClick)

//Function redirects user back to main page

function hackClick(){
    location.href = "index.html"
}



function askClick() {
    fetch("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
        .then(function (bootdata) {
            return bootdata.json();
        })
        .then(function (data) {
console.log(data)
        })

}