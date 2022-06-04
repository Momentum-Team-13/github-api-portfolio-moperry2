let gitHubProfileUrl = "https://api.github.com/users/moperry2";
let gitHubRepoUrl = "https://api.github.com/users/moperry2/repos";
// add /repos to end of URL, repos aren't in profile but profile are in repos

fetch(gitHubProfileUrl, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(function (response) {
    // the response is the promised data
    return response.json();
    //put the output in json format
  })
  .then(function (profileData) {
    buildProfile(profileData);
  });

function buildProfile(profileData) {
  let profileDiv = document.getElementById("profile");

  // create elements and add them to the page
  //profile pic-avatar
  let imageElement = document.createElement("img");
  imageElement.classList.add("img");
  imageElement.src = profileData.avatar_url;
  profileDiv.appendChild(imageElement);
  //name
  let nameElement = document.createElement("p");
  nameElement.classList.add("name");
  nameElement.innerText = profileData.name;
  profileDiv.appendChild(nameElement);
  //location
  let locationElement = document.createElement("div");
  locationElement.innerText = `Location: ${profileData.location}`;
  profileDiv.appendChild(locationElement);
  //GitHub url
  let urlElement = document.createElement("a");
  urlElement.href = `${profileData.html_url}`;
  urlElement.innerText = `GitHub URL: ${profileData.login}`;
  profileDiv.appendChild(urlElement);
  //USERNAME
  let usernameElement = document.createElement("div");
  usernameElement.innerText = `Username: ${profileData.login}`;
  profileDiv.appendChild(usernameElement);
}
//   urlto get all my repos
fetch(gitHubRepoUrl, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    buildRepos(response);
  });
function buildRepos(repoData) {
  let repoDiv = document.getElementById("repos");
  for (let i = 0; i < repoData.length; i++) {
    let repoLink = document.createElement("a");
    repoLink.href = `${repoData[i].html_url}`;
    repoLink.classList.add("repo-link");
    repoLink.innerText = `GitHub Repos ${repoData[i].name}`;
    repoDiv.appendChild(repoLink);
  }
}
