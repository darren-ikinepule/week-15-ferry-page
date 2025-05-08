# JokePage Component

The `JokePage` component is a React functional component that fetches and displays random jokes from an external API. It provides a button to fetch a new joke and displays a loading state while the joke is being fetched.

## Features

- Fetches a random joke from the [Official Joke API](https://official-joke-api.appspot.com/random_joke).
- Displays the joke's setup and punchline.
- Shows a loading message while fetching the joke.
- Displays a default message on the first render.

## Code Overview

### State Variables

- `joke`: An object containing the joke's `setup` and `punchline`.
- `isLoading`: A boolean indicating whether the joke is currently being fetched.

### Functions

- `fetchRandomJoke`: An asynchronous function that:
  - Resets the `joke` state.
  - Sets the `isLoading` state to `true`.
  - Fetches a random joke from the API.
  - Updates the `joke` state with the fetched data.
  - Sets the `isLoading` state to `false`.

### Conditional Rendering

- Displays the joke's `setup` and `punchline` if available.
- Shows "Click for a joke" on the first render.
- Displays "Loading..." while the joke is being fetched.

## Usage

To use the `JokePage` component, import and include it in your React application:

```jsx
import { JokePage } from "./components/JokePage";

function App() {
  return (
    <div>
      <h1>Joke App</h1>
      <JokePage />
    </div>
  );
}

export default App;