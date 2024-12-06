const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5001/api";

const customFetch = async (
  endpoint: string, // Endpoint must be a string
  method: string = "GET", // HTTP method is a string, defaults to "GET"
  body: any = null, // Body can be any type or replace with a more specific type like `object`
  headers: Record<string, string> = {} // Headers are key-value pairs of strings
) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json(); // Adjust return type if needed
};

export default customFetch;

// Example Usage:
const fetchUserData = async () => {
    try {
      const user = await customFetch("/users/123", "GET");
      console.log(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  