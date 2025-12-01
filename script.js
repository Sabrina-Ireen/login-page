let nameInput = document.getElementById("name");
let passInput = document.getElementById("pass");

async function check() {
    let n = nameInput.value.trim();
    let p = passInput.value.trim();

    if (n === "" || p === "") {
        alert("Please enter username & password!!");
        return;
    }

    try {
        // Load JSON users
        const response = await fetch("users.json");
        const users = await response.json();

        // Find if user exists
        const user = users.find(u => u.username === n && u.password === p);

        if (user) {
            alert("Login successful! Welcome " + user.username);
        } else {
            alert("Invalid username or password!");
        }
    } catch (err) {
        console.error(err);
        alert("Error loading user data!");
    }
}
