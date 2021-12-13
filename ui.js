"use strcit";
// const renderImage = (btn) => {
//   btn.addEventListener("click", () => {
//     getImagesFromServer().then(getData);
//   });
// };
const renderTasks = (btn) => {
  btn.addEventListener("click", () => {
    getTasksFromServer().then(getTask);
  });
};
// const getData = (data) => {
//   data.forEach((element) => {
//     const img = document.createElement("img");
//     img.src = element.original;
//     document.querySelector("body").append(img);
//   });
// };
const getTask = (data) => {
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element.title;
    document.querySelector("#task-list").append(li);
  });
};
createTask("learn JS");
// renderImage(document.querySelector("#btn"));
renderTasks(document.querySelector("#task"));
