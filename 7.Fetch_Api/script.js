//Fetch Api provides an interface for fetching(sending/receiving) the resources
//It uses Request and Response objects
//The fetch() method is used to fetch a resource(data)
//let promise = fetch(url.[options]);

const URL = "https://catfact.ninja/facts";
const factPara = document.querySelector("#fact");

const getFacts = async () => {
        console.log("Getting data...");
        let response = await fetch(URL);
        console.log(response);
        let data = await response.json();
        factPara.innerText = data.data[0].fact;
};

getFacts();


//AJAX: Asynchronous JS & XML
//JSON : Javascript Object Notation


fetch("https://randomuser.me/api/")
    .then((rawdata) => {
        return rawdata.json()
    })
    .then((data) => {
        console.log(data.results[0].name.first);
    })
    .catch((err) => {
        console.log(err);
    })