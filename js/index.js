const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api/?results=5");
    const data = await usersRequest.json();
    // console.log(data);
    const usersResults = data.results; 
    //data contains all the json files info, data.results parses down info to just array 
    console.log(usersResults);
};

getData();

const displayUsers = function (usersResults) {
    randomFolks.innerHTML("");
};