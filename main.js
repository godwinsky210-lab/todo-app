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

const todopatchTitleInputElement = document.getElementById(
  "todoPatchTitleInput",
);
const todoPutIdInputElement = document.getElementById("todoPutIdInput");
const todoPutUserIdInputElement = document.getElementById("todoPutUserIdInput");
const todoPutCompletedInputElement = document.getElementById(
  "todoPutCompletedInput",
);
const todoPutTitleInputElement = document.getElementById("todoPutTitleInput");
const todoPutButtonElement = document.getElementById("todoPutButton");
const todoPutParagraphElement = document.getElementById("todoPutParagraph");

const todoDeleteParagraphElement = document.getElementById(
  "todoDeleteParagraph",
);
const todoDeleteIdInputElement = document.getElementById("todoDeleteIdInput");
const todoDeleteButtonElement = document.getElementById("todoDeleteButton");

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

todoPutButtonElement.addEventListener("click", async function putTodo() {
  const todoId = todoPutIdInputElement.value;
  const userId = todoPutUserIdInputElement.value;
  const completed = todoPutCompletedInputElement.checked;
  const title = todoPutTitleInputElement.value;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        id: todoId,
        title,
        userId,
        completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  );

  const todo = await response.json();
  const {
    title: todoTitle,
    userId: todoUserId,
    id,
    completed: todoCompleted,
  } = todo;

  console.log({
    todoTitle,
    todoUserId,
    id,
    todoCompleted,
  });

  todoPutParagraphElement.textContent = `Hello👋🏿, I am User ${todoUserId}. My updated todo is ${todoTitle} and id is ${id}. It has ${todoCompleted ? "" : "not "}been completed`;
});

todoDeleteButtonElement.addEventListener("click", async function deleteTodo() {
  const todoId = todoDeleteIdInputElement.value;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      method: "DELETE",
    },
  );
  const todo = await response.json();
  const { title, userId, id, completed } = todo;
  console.log({ title, userId, id, completed });
  todoDeleteParagraphElement.textContent = `Hello👋🏿, I am User ${userId}. My todo is ${title} and id is ${id}. It has ${completed ? "" : "not"} been completed`;
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
const todoPatchIdElement = document.getElementById("todoPatchIdElement");

todoPatchButtonElement.addEventListener("click", async function PatchTodo() {
  const userId = todoPatchUserIdInputElement.value || null;
  const completed = todoPatchCompletedInputElement.checked;
  const title = todoPatchTitleInputElement.value || null;
  const id = todoPatchIdElement.value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PATCH",
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
    id: newId,
    completed: todoCompleted,
  } = todo;
  console.log({ todoTitle, todoUserId, newId, todoCompleted });
  todoPatchParagraphElement.textContent = `Hello👋🏿, I am User ${todoUserId}. My todo is ${todoTitle}. It has ${todoCompleted ? "" : "not"} been completed`;
});
