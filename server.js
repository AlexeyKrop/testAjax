"use strcit";
// const getImagesFromServer = () => {
//   return fetch("https://repetitora.net/api/JS/Images").then((data) => {
//     return data.json();
//   });
// };
// const createTask = (title) => {
//   return fetch(
//     `https://repetitora.net/api/JS/Tasks?widgetId=2525&title=${title}`,
//     {
//       method: "POST",
//     }
//   );
// };
const createTask = (id) => {
  return fetch(
    `https://repetitora.net/api/JS/Tasks?widgetId=2525&taskId=${id}`,
    {
      method: "DELETE",
    }
  );
};
const getTasksFromServer = () => {
  return fetch("https://repetitora.net/api/JS/Tasks?widgetId=2525").then(
    (data) => {
      return data.json();
    }
  );
};

// const createTasks = (title) => {
//   return fetch(
//     `https://repetitora.net/api/JS/Tasks?widgetId=125&title=${title}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   ).then((data) => {
//     return data.json();
//   });
// };
