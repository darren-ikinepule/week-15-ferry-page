import { useState } from "react";
import NavBar from "./NavBar";

const url = "https://official-joke-api.appspot.com/random_joke";

const JokePage = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomJoke = async () => {
    setJoke({});
    setIsLoading(true);

    const response = await fetch(url);
    const result = await response.json();

    setJoke(result);
    setIsLoading(false);
  };

  const isFirstRender = !joke.setup && !isLoading;

  return (
    <>
      <NavBar />
      <div className="joker-container">
        {joke.setup && (
          <div>
            <p>{`${joke.setup}`}</p>
            <p>{`${joke.punchline}`}</p>
          </div>
        )}
        <p>{isFirstRender && "Click for a joke"}</p>
        <p>{isLoading && "Loading..."}</p>
        <button onClick={fetchRandomJoke}>New Joke!</button>
      </div>
    </>
  );
};

export default JokePage;
