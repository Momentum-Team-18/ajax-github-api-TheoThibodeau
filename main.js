// let mainContainer = document.querySelector("#mainContainer");
let firstDiv = document.querySelector("#firstDiv");
let secondDiv = document.querySelector("#secondDiv");
let thirdDiv = document.querySelector("#thirdDiv");

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

    let gitHubPic = document.createElement('img');
    gitHubPic.src = info.avatar_url;
    gitHubPic.classList.add("gitHubPic")
    // firstDiv.classList.add("#firstDiv");

    firstDiv.appendChild(gitHubPic);

    //location & personal info
    let locationGit = document.createElement('h5');
    locationGit.innerText = `Location : ${info.location} \n GitHub Username: ${info.login} \n GitHub Url: ${info.url}`;

    secondDiv.appendChild(locationGit);
}
);
   
fetch("https://api.github.com/users/TheoThibodeau/repos",
    {   method: "GET",
        headers: {"Content-Type": "application/json"},
})

.then(function(response) {
    return response.json();
})

.then(function(info) {
for(let i=0; i < info.length; i++) {
    let repoLink = document.createElement('a');
    let repoName = document.createTextNode(info[i].name);
    repoLink.appendChild(repoName);
    repoLink.title = info[i].name;
    repoLink.href = info[i].html_url;
    thirdDiv.appendChild(repoLink);
};

});