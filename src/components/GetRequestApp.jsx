import { useState } from "react";
import NavBar from "./NavBar"; // Importing the NavBar component for navigation.

export default function GetRequestApp() {
  // State variables using the useState hook:
  const [posts, setPosts] = useState([]);       // Stores the fetched posts (initially an empty array).
  const [error, setError] = useState(null);       // Stores any error that occurs during the fetch operation (initially null).
  const [isLoading, setIsLoading] = useState(false); // Stores the loading state (initially false).

  // Function to fetch posts from the JSONPlaceholder API:
  const fetchPosts = async () => {
    setIsLoading(true); // Set loading to true before starting the fetch.
    setError(null);     // Clear any previous errors.

    try {
      // Use the fetch API to make a GET request:
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=1` // URL to fetch posts for userId 1.
      );

      // Check if the response is successful (status code 200-299):
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Throw an error if the response is not ok.
      }

      // Parse the JSON response:
      const data = await response.json();

      setPosts(data); // Update the 'posts' state with the fetched data.
    } catch (err) {
      // Handle errors during the fetch or JSON parsing:
      console.error("Error fetching data:", err); // Log the error to the console.
      setError(err.message || "An error occurred"); // Update the 'error' state with the error message.  Handles if err is not an object.
    } finally {
      setIsLoading(false); // Set loading to false after the fetch is complete (success or error).
    }
  };

  // The JSX structure of the component:
  return (
    <>
    <NavBar/>
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Task 1: GET Request Assessment
      </h1>
      <p className="mb-4">
        Fetch and display posts from user ID 1 using the JSONPlaceholder API.
      </p>
      <code className="block bg-gray-100 p-2 mb-4 rounded">
        GET https://jsonplaceholder.typicode.com/posts?userId=1
      </code>

      {/* Button to trigger the fetchPosts function: */}
      <button
        onClick={fetchPosts}
        disabled={isLoading} // Disable the button while loading.
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        {isLoading ? "Loading..." : "Fetch Posts"} {/* Display "Loading..." or "Fetch Posts" based on the loading state. */}
      </button>

      {/* Container to display the fetched data, error, or loading message: */}
      <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50 min-h-40">
        {/* Display error message if there's an error: */}
        {error && (
          <div className="text-red-500 mb-4">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Display loading message while fetching data: */}
        {isLoading && <p className="text-gray-600">Loading posts...</p>}

        {/* Display a message if there are no posts and no error, and not loading: */}
        {!isLoading && !error && posts.length === 0 && (
          <p className="italic text-gray-500">
            Posts will appear here after clicking the Fetch Posts button...
          </p>
        )}

        {/* Display the fetched posts if there are any and no error: */}
        {!isLoading && !error && posts.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Posts from User 1</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id} // Use post.id as the key for each post item.
                  className="p-4 border border-gray-200 rounded shadow-sm"
                >
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <p className="my-2">{post.body}</p>
                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Post ID:</strong> {post.id}
                    </p>
                    <p>
                      <strong>User ID:</strong> {post.userId}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
