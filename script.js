"use strcit";
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const getTask = () => {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Tasks?widgetId=12349`
  );
  console.log(
    promise.then((arr) => {
      console.log(arr.data);
    })
  );
};
btn.addEventListener("click", () => {
  getTask();
});

// const getDataTasks = (tasks) => {
//   tasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.innerHTML = task.title;
//     body.append(li);
//   });
// };
// const createTask = (title) => {
//   const promise = axios.post(
//     `https://repetitora.net/api/JS/Tasks?widgetId=12349&title=${title}`
//   );
//   return promise.then((data) => {
//     console.log(data);
//   });
// };
// createTask("learn Js").then(() => {
//   debugger;
//   console.log(data);
// });
