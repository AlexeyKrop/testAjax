"use strcit";
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn"),
    form = document.querySelector("form");
  const req = (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    formData.append("id", Math.random());
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    axios.post("http://localhost:3000/animals", obj);
  };

  form.addEventListener("submit", (e) => {
    req(e);
  });
});
