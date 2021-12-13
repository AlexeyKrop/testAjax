"use strcit";
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
