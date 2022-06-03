let gitHubUrl = "https://api.github.com/users/moperry2";
// add /repos to end of URL, repos aren't in profile but profile are in repos
let profileDiv = document.getElementById("profile");

fetch(gitHubUrl, {
  method: "GET",
  headers: { "Content-Type": "apllication/json" },
})
  .then(function (response) {
    // the response is the promised data
    return response.json();
    //put the output in json format
  })
  .then(function (data) {
    // dtat referes to what the above promise returned (response.json())
    console.log("Response from GitHub API: ", data);
    //consol log the data
    buildProfile(data);
  });

function buildProfile(profileData) {
  //   names = profileData.map(function (repo) {
  //     return repo.name;
  //   });

  //   console.log(names);
  //   console.log(profileData);

  // create elemetns and add them to the page
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
  //profileData is the data from the promise
}
//   urlto get all my repos
let gitHubUrl2 = "https://api.github.com/users/moperry2/repos";
fetch(gitHubUrl2, {
  method: "GET",
  headers: { "Content-Type": "apllication/json" },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (repoData) {
    buildRepos(repoData);
  });
function buildRepos(repoData) {
  console.log(repoData);
  for (let repo of repoData) {
    console.log(repo.name);
  }
}
// }
// })
