const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api/?results=5");
    const data = await usersRequest.json();
    // console.log(data);
    const usersResults = data.results; 
    //data contains all the json files info, data.results parses down info to just array 
    // console.log(usersResults);

    displayUsers(usersResults);
};

getData();

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



