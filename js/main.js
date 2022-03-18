//replace with your user:
const GITHUB_URL = "https://api.github.com/users/OrnitB";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById("myName");
    myName.innerText = data.name;
  });