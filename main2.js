//Hack news "ask" page

//Const needed for page

const buttonClickTwo = document.querySelector("#button2");


buttonClickTwo.addEventListener("click", askClick);

function askClick() {
    fetch("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
        .then(function (bootdata) {
            return bootdata.json();
        })
        .then(function (data) {
console.log(data)
        })

}