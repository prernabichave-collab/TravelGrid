document.getElementById("loginForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!fullName || !email || !password) {
        alert("Please enter Full Name, Email and Password");
        return;
    }

    // 1️⃣ Frontend validation
    alert("Frontend Validation Successful!");

    try {

        // 2️⃣ Backend login
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        console.log("Backend Login Response:", data);

        // 3️⃣ Login successful
        if (response.ok) {

            localStorage.setItem("token", data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            alert("Login Successful!");

            // 4️⃣ Dashboard
            window.location.href = "/dashboard.html";

        } else {

            message.innerText = data.message || "Login Failed";

        }

    } catch (error) {

        console.error("Login Error:", error);

        message.innerText = "Server connection failed";
    }

});