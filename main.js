//testing the hack news api
const hacknewApi = document.querySelector("#test");
const buttonclick = document.querySelector("#button");

buttonclick.addEventListener("click", onClick);

function onClick(){
    fetch("https://hacker-news.firebaseio.com/v0/")
    .then(function(bootdata){
        return bootdata.json();

    })
    .then(function(data) {
        console.log(data, "data)")
    })
}
