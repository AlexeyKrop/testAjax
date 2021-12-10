"use strcit";
const getImagesFromServer = () => {
  return fetch("https://repetitora.net/api/JS/Images").then((data) => {
    return data.json();
  });
};
