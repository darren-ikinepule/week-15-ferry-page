const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const button = document.querySelector("button");

const url = "https://official-joke-api.appspot.com/random_joke";

const fetchRandomJoke = async (url) => {
  setup.textContent = "loading setup...";
  punchline.textContent = "loading punchline...";

  const response = await fetch(url);
  const result = await response.json();

  setup.textContent = result.setup;
  punchline.textContent = result.punchline;
};

button.addEventListener("click", () => fetchRandomJoke(url));