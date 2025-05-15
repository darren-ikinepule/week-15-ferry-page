try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setNewPost(data);
  } catch (err) {
    console.error("Error creating post:", err);
    setError(err.message || "An error occurred");
  } finally {
    setIsLoading(false);
  }   
};

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
