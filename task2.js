import axios from "axios";

function getData() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
    responseType: "application/json",
  })
    .then(function (response) {
      console.log(`Ini adalah value response ==> ${response.data}`);
    })
    .catch((error) => {
      console.log(`${error}`);
    });
}

getData();
