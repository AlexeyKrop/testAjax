"use strcit";
// const getImagesFromServer = () => {
//   return fetch("https://repetitora.net/api/JS/Images").then((data) => {
//     return data.json();
//   });
// };
const createTask = (title) => {
  return fetch(
    `https://repetitora.net/api/JS/Tasks?widgetId=1257&title=${title}`,
    {
      method: "POST",
    }
  );
};
const getTasksFromServer = () => {
  return fetch("https://repetitora.net/api/JS/Tasks?widgetId=1257").then(
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
