/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");
const getUser = async () => {
  const data = await axios
    .get("https://api.github.com/users/gaearon")
    .then(data => {
      const user = data.data;
      console.log("1!");
      return { user };
    })
    .then(data => {
      console.log("2!");
      const user = data.user;
      const profile = user.login;
      const friends = axios
        .get(`https://api.github.com/users/${profile}/followers`)
        .then(friends => {
          const friendData = friends.data;
          const card = createCard(user);
          cards.appendChild(card);
          friendData.forEach(friend => {
            const name = friend.login;
            const profile = axios
              .get(`https://api.github.com/users/${name}`)
              .then(profile => {
                const user = profile.data;
                const element = createCard(user);
                cards.appendChild(element);
              });
          });
        });
    })
    .catch(error => {
      console.log(error);
    });
};

getUser();
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const createCard = user => {
  const card = document.createElement("div");
  const avatar_url = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const login = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const html_url = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  avatar_url.src = user.avatar_url;
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  name.textContent = user.name;
  login.classList.add("username");
  login.textContent = user.login;
  location.textContent = `Location: ${user.location}`;
  profile.textContent = "Profile: ";
  html_url.href = user.html_url;
  html_url.textContent = user.html_url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  card.appendChild(avatar_url);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(html_url);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
};

// avatar_url: "https://avatars3.githubusercontent.com/u/16449564?v=4";
// bio: null;
// blog: "";
// company: null;
// created_at: "2015-12-27T05:13:48Z";
// email: null;
// events_url: "https://api.github.com/users/kizmet/events{/privacy}";
// followers: 2;
// followers_url: "https://api.github.com/users/kizmet/followers";
// following: 4;
// following_url: "https://api.github.com/users/kizmet/following{/other_user}";
// gists_url: "https://api.github.com/users/kizmet/gists{/gist_id}";
// gravatar_id: "";
// hireable: null;
// html_url: "https://github.com/kizmet";
// id: 16449564;
// location: null;
// login: "kizmet";
// name: "Bryant Patton";
// node_id: "MDQ6VXNlcjE2NDQ5NTY0";
// organizations_url: "https://api.github.com/users/kizmet/orgs";
// public_gists: 0;
// public_repos: 43;
// received_events_url: "https://api.github.com/users/kizmet/received_events";
// repos_url: "https://api.github.com/users/kizmet/repos";
// site_admin: false;
// starred_url: "https://api.github.com/users/kizmet/starred{/owner}{/repo}";
// subscriptions_url: "https://api.github.com/users/kizmet/subscriptions";
// type: "User";
// updated_at: "2019-07-05T20:43:17Z";
// url: "https://api.github.com/users/kizmet";
