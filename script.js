"use strcit";
const sendData = (data) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
const getData = () => {
  fetch("db.json")
    .then((responce) => responce.json())
    .then((data) => sendData(data));
};
getData();
