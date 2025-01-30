// Create a Promise that resolves after 5 seconds
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 5000);  // Resolves after 5 seconds
});

// Async function that waits for the Promise to resolve
async function demo() {
    console.log("Start");
    let x = await p;  // Wait for the Promise to resolve
    console.log(x);  // Logs the resolved value
    console.log("End");
}
demo();  // Call the demo function

// Async function to fetch data from a URL and log the response
async function fetchUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log(data);  // Logs the user data
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
fetchUsers();  // Call the fetchUsers function
