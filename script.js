"use strcit";
const sendForm = () => {
  const form = document.querySelector(".form");
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        ContentType: "application/json",
      },
    });
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    sendData(obj);
  });
};
sendForm();
