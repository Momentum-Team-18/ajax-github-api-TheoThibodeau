let mainContainer = document.querySelector

let gitUrl = "https://api.github.com/users/TheoThibodeau";

fetch(gitUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json" },
})

.then((response) => {
    return response.json();
})

.then(function (data){
    console.log("You have been successfully subscribed", data)
});

let gitHubId = document.createElement('div');

    let gitHubPic = document.createElement('img');
    gitHubPic.src = gitUrl.avatar_url;
    // apply style to a class in css first, then add that class to the element with JS
    gitHubId.appendChild(gitHubPic);
    
    