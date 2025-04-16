import axios from "axios";

/// Axios Version
function getDataByAxios() {
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

/// Fetch Version
async function getDataByFetch() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(`Error ==> ${error}`);
  }
}

hitAPI();
getData();
