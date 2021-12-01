"use strcit";
window.addEventListener("DOMContentLoaded", () => {
  const req = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/animals");
    request.send();
    request.addEventListener("load", () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.response);
        getCards(data);
      } else {
        console.error("Что-то пошло не так");
      }
    });
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
  req();
});
