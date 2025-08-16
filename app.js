function login(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    } 
    if (!savedEmail || !savedPassword) {
        alert("You don't have an account. Redirecting to Sign Up...");
        window.location.href = "./signUp.html";
        return;
    }
    if (email == savedEmail && password == savedPassword) {
        alert("Login successful! Welcome back to our Library");
        window.location.href = "./index.html";
    } else if (email == savedEmail && password != savedPassword) {
        alert("Incorrect password. Please try again.");
    } else {
        alert("You don't have an account. Redirecting to Sign Up...");
        window.location.href = "./signUp.html";
    }
}

function signUp(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();

    if (name === "" || email === "" || password === "" || confirm === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully! Please login now.");
    window.location.href = "./login.html";
}
