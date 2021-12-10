"use strcit";
const renderImage = (btn) => {
  btn.addEventListener("click", () => {
    getImagesFromServer().then(getData);
  });
};

const getData = (data) => {
  data.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.original;
    document.querySelector("body").append(img);
  });
};
renderImage(document.querySelector("#btn"));
