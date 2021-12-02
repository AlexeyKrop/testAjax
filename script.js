"use strcit";
window.addEventListener("DOMContentLoaded", () => {
  const req = () => {
    // let request = new XMLHttpRequest();
    // request.open("GET", "http://localhost:3000/animals");
    // request.send();
    // request.addEventListener("load", () => {
    //   if (request.readyState === 4 && request.status === 200) {
    //     let data = JSON.parse(request.response);
    //     getCards(data);
    //   } else {
    //     console.error("Что-то пошло не так");
    //   }
    // });
    getResourse("http://localhost:3000/animals")
      .then((data) => getCards(data))
      .catch((rer) => console.log("Ошибка"));
  };
  const getCards = (dataCards) => {
    dataCards.forEach((dataCard) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                        <p class="animals__view">${dataCard.view}</p>
                        <img src=${dataCard.picture} class='animals__image'>`;
      document.querySelector(".app").append(card);
    });
  };
  async function getResourse(url) {
    let res = await fetch(url);
    if (!res.ok) {
      console.log("Ошибка");
    }
    return res.json();
  }
  getResourse("http://localhost:3000/animals");
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", req);
});
