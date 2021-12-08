"use strcit";
const sendForm = () => {
  const form = document.querySelector(".form");
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    sendData(formData).then((data) => {
      console.log(data);
    });
  });
};
sendForm();
