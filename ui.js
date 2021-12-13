"use strcit";
// const renderImage = (btn) => {
//   btn.addEventListener("click", () => {
//     getImagesFromServer().then(getData);
//   });
// };
const btn = document.querySelector("#task");
btn.addEventListener("click", () => {
  getTasksFromServer().then(getTask);
});
// const getData = (data) => {
//   data.forEach((element) => {
//     const img = document.createElement("img");
//     img.src = element.original;
//     document.querySelector("body").append(img);
//   });
// };
const getTask = (data) => {
  // document.querySelector("#task-list").innerHTML = "";
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element.title;
    document.querySelector("#task-list").append(li);
  });
};
debugger;
createTask("2ad59d33-3e89-4214-9f09-ab5f2bc2183d");

// renderImage(document.querySelector("#btn"));
// renderTasks(document.querySelector("#task"));
