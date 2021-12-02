"use strcit";
window.addEventListener("DOMContentLoaded", () => {
  const req = () => {
    getResourse("http://localhost:3000/animals")
      .then((data) => getCards(data.data))
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
    let res = await axios(url);
    // if (!res.ok) {
    //   console.log("Ошибка");
    // }
    return res;
  }
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", req);
});
