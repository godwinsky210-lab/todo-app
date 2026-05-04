const userParagraph = document.getElementById("user");

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  const { userId, id, title, completed } = data;
  userParagraph.textContent = `Hello👋🏿, I'm User${userId}. Today, I would ${title}. It is todo${id}. It is ${completed ? "" : "not"} completed.`;
}

getUser();
