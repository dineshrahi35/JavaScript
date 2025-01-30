let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gender = document.getElementsByName("gender");

// Toggle password visibility
check.addEventListener("click", (event) => {
    if (event.target.checked) {
        password.setAttribute("type", "text");
        show.innerText = "Hide Password";
    } else {
        password.setAttribute("type", "password");
        show.innerText = "Show Password";
    }
});

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";

    // Get selected gender
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen = gender[i].value;
        }
    }

    // Create user object
    let userDetails = {
        username: un,
        password: up,
        gender: gen,
    };

    console.log(userDetails);

    // Store user details in sessionStorage
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Feedback
    alert("User details saved successfully!");
});
