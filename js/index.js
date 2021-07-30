const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
    const usersRequest = await fetch(
        `https://randomuser.me/api/?results=${numUsers}`
    );
    const data = await usersRequest.json();
    // console.log(data);
    const usersResults = data.results; 
    //data contains all the json files info, data.results parses down info to just array 
    // console.log(usersResults);

    displayUsers(usersResults);
};

getData(1);

const displayUsers = function (usersResults) {
    randomFolks.innerHTML="";

    for (const user of usersResults) {
        const country = user.location.country;
        const firstName = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${firstName}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User's Avatar" />
        `;
    randomFolks.append(userDiv)
    }
};

selectUserNumber.addEventListener("change", function(e) {
    const numUsers = e.target.value;
    getData(numUsers); 
});



