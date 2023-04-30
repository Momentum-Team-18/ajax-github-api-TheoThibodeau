let mainContainer = document.querySelector("#mainContainer");
console.log(mainContainer);

let gitUrl = "https://api.github.com/users/TheoThibodeau";
console.log(gitUrl);

fetch(gitUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json" },
})

.then(function(response) {
    return response.json();
})

.then(function(info) {
    
    //profile pic
    let firstDiv = document.createElement('div');

    let gitHubPic = document.createElement('img');
    gitHubPic.src = info.avatar_url;
    gitHubPic.classList.add("gitHubPic");

    firstDiv.appendChild(gitHubPic);
    mainContainer.appendChild(firstDiv);

    //location & personal info
    let secondDiv = document.createElement('div');
    let locationGit = document.createElement('p');
    
    locationGit.innerText = `Location : ${info.location} \n gitUrl: TheoThibodeau \n GitHub Username: TheoThibodeau`
    console.log(locationGit);

    secondDiv.appendChild(locationGit);
    mainContainer.appendChild(secondDiv);

    //GitHub Repos
});

.then(function(info){
    fetch(, {
        method: "GET",
        headers: {"Content-Type": "application/json" },)
});










// let createUserCard = function(userData) {
//     let query = ["name", "avatar_url", "location", "html_url", "login", "repos_url_"]

// for (let type of query){
//     let 
// }
    
// };


// let gitHubId = document.createElement('div');


    