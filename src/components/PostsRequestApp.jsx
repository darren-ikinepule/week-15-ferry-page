import { useState } from "react";

export default function PostRequestApp() {
  // State variables using useState:
  const [formData, setFormData] = useState({  // Stores the data for the new post.
    title: "Why",
    body: "Who where",
    userId: 1,
  });

  const [newPost, setNewPost] = useState(null);    // Stores the response data (the newly created post) from the API.
  const [error, setError] = useState(null);      // Stores any error that occurs during the API request.
  const [isLoading, setIsLoading] = useState(false); // Stores the loading state of the API request.

  // Function to handle changes in the input fields:
  const handleInputChange = (e) => {
    const { name, value } = e.target;  // Get the name and value of the input field that changed.
    setFormData({
      ...formData,                 // Spread the current form data to keep existing values.
      [name]: name === "userId" ? parseInt(value, 10) : value,  // Update the specific field.  If it's userId, parse the value as an integer.
    });
  };

  // Function to send a POST request to create a new post:
  const createPost = async () => {
    setIsLoading(true);  // Set loading to true before making the request.
    setError(null);      // Clear any previous errors.
    setNewPost(null);    // Clear any previous new post data.

    try {
      // Make a POST request to the JSONPlaceholder API:
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",            // Specify the HTTP method as POST.
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON.
          },
          body: JSON.stringify(formData), // Convert the form data to a JSON string.
        }
      );

      // Check if the response was successful:
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Throw an error if the status code is not in the 200-299 range.
      }

      // Parse the JSON response:
      const data = await response.json();

      setNewPost(data);  // Update the newPost state with the data from the response.
    } catch (err) {
      // Handle errors during the API request:
      console.error("Error creating post:", err);  // Log the error to the console.
      setError(err.message || "An error occurred"); // Update the error state with the error message.
    } finally {
      setIsLoading(false); // Set loading to false after the request is complete (success or error).
    }
  };

  // The JSX structure of the component:
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Task 2: POST Request Assessment
      </h1>
      <p className="mb-4">
        Create a new post by sending data to the JSONPlaceholder API and display
        the response.
      </p>
      <code className="block bg-gray-100 p-2 mb-4 rounded">
        POST https://jsonplaceholder.typicode.com/posts
      </code>

      {/* Form to input the post data: */}
      <div className="p-4 border border-gray-300 rounded bg-gray-50 mb-6">
        <h2 className="text-lg font-bold mb-4">Enter Post Data</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="titleInput">
            Title:
          </label>
          <input
            type="text"
            id="titleInput"
            name="title"
            value={formData.title}         // Bind the input value to the formData.title state.
            onChange={handleInputChange} // Call handleInputChange when the input changes.
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="bodyInput">
            Body:
          </label>
          <textarea
            id="bodyInput"
            name="body"
            value={formData.body}        // Bind the textarea value to the formData.body state.
            onChange={handleInputChange}  // Call handleInputChange when the textarea changes.
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="userIdInput">
            User ID:
          </label>
          <input
            type="number"
            id="userIdInput"
            name="userId"
            value={formData.userId}       // Bind the input value to the formData.userId state.
            onChange={handleInputChange}  // Call handleInputChange when the input changes.
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Button to trigger the createPost function: */}
        <button
          onClick={createPost}          // Call createPost when the button is clicked.
          disabled={isLoading}          // Disable the button while loading.
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          {isLoading ? "Creating..." : "Create Post"}  {/* Display "Creating..." or "Create Post" based on loading state. */}
        </button>
      </div>

      {/* Container to display the API response: */}
      <div className="p-4 border border-gray-300 rounded bg-gray-50 min-h-40">
        <h2 className="text-lg font-bold mb-4">API Response</h2>

        {/* Display error message if there's an error: */}
        {error && (
          <div className="text-red-500 mb-4">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Display loading message while the request is in progress: */}
        {isLoading && <p className="text-gray-600">Sending request...</p>}

        {/* Display message when there's no response yet: */}
        {!isLoading && !error && !newPost && (
          <p className="italic text-gray-500">
            The response will appear here after clicking the Create Post
            button...
          </p>
        )}

        {/* Display the new post data if the request was successful: */}
        {!isLoading && !error && newPost && (
          <div className="p-4 border border-gray-200 rounded shadow-sm">
            <h3 className="font-bold text-lg mb-2">Created Post Details</h3>
            <div className="space-y-2">
              <p>
                <strong>Post ID:</strong> {newPost.id}
              </p>
              <p>
                <strong>Title:</strong> {newPost.title}
              </p>
              <p>
                <strong>Body:</strong> {newPost.body}
              </p>
              <p>
                <strong>User ID:</strong> {newPost.userId}
              </p>
            </div>
            <p className="mt-4 text-sm italic text-gray-500">
              Note: With JSONPlaceholder, this post is not actually saved to the
              server.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

