const todoGetParagraphElement = document.getElementById("todoGetParagraph");
const todoGetButtonElement = document.getElementById("todoGetButton");
const todoGetInputElement = document.getElementById("todoGetInput");

const todoPostUserIdInputElement = document.getElementById(
  "todoPostUserIdInput",
);
const todoPostCompletedInputElement = document.getElementById(
  "todoPostCompletedInput",
);
const todoPostTitleInputElement = document.getElementById("todoPostTitleInput");
const todoPostButtonElement = document.getElementById("todoPostButton");
const todoPostParagraphElement = document.getElementById("todoPostParagraph");

// const todopatchTitleInputElement = document.getElementById(
//   "todoPatchTitleInput",
// );

todoGetButtonElement.addEventListener("click", async function getTodo() {
  const todoId = todoGetInputElement.value;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  );
  const todo = await response.json();
  const { title, userId, id, completed } = todo;
  console.log({ title, userId, id, completed });
  todoGetParagraphElement.textContent = `Hello👋🏿, I am User ${userId}. My todo is ${title} and id is ${id}. It has ${completed ? "" : "not"} been completed`;
});

todoPostButtonElement.addEventListener("click", async function postTodo() {
  const userId = todoPostUserIdInputElement.value;
  const completed = todoPostCompletedInputElement.checked;
  const title = todoPostTitleInputElement.value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
    body: JSON.stringify({
      title,
      userId,
      completed,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const todo = await response.json();
  const {
    title: todoTitle,
    userId: todoUserId,
    id: todoId,
    completed: todoCompleted,
  } = todo;
  console.log({ todoTitle, todoUserId, todoId, todoCompleted });
  todoPostParagraphElement.textContent = `Hello👋🏿, I am User ${todoUserId}. My todo is ${todoTitle} and id is ${todoId}. It has ${todoCompleted ? "" : "not"} been completed`;
});

const todoPatchButtonElement = document.getElementById("todoPatchButton");
const todoPatchParagraphElement = document.getElementById("todoPatchParagraph");
const todoPatchUserIdInputElement = document.getElementById(
  "todoPatchUserIdInputElement",
);
const todoPatchCompletedInputElement = document.getElementById(
  "todoPatchCompletedInput",
);
const todoPatchTitleInputElement = document.getElementById(
  "todoPatchTitleInput",
);
todoPatchButtonElement.addEventListener("click", async function PatchTodo() {
  const userid = todoPatchUserIdInputElement.value;
  const completed = todoPatchCompletedInputElement.checked;
  const title = todoPatchTitleInputElement.value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      userid,
      completed,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const todo = await response.json();
  const {
    title: todoTitle,
    userid: todoUserId,
    id: todoId,
    completed: todoCompleted,
  } = todo;
  console.log({ todoTitle, todoUserId, todoId, todoCompleted });
  todoPatchParagraphElement.textContent = `Hello👋🏿, I am User ${todoUserId}. My todo is ${todoTitle} and id is ${todoId}. It has ${todoCompleted ? "" : "not"} been completed`;
});
