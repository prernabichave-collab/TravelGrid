document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const button = document.querySelector(".register-btn");

    message.style.display = "block";
    message.style.background = "#dbeafe";
    message.style.color = "#1d4ed8";
    message.textContent = "Registering your account...";
    button.disabled = true;

    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                mobile,
                password
            })
        });

        const data = await response.json();

        console.log("Registration Response:", data);

        if (!response.ok) {
            message.style.background = "#fee2e2";
            message.style.color = "#b91c1c";
            message.textContent =
                data.message || data.error || "Registration failed. Please try again.";
            return;
        }

        if (data.token) {
            localStorage.setItem("token", data.token);
        }

        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
        }

        message.style.background = "#dcfce7";
        message.style.color = "#166534";
        message.textContent = "Registration Successful! Redirecting to Login...";

        document.getElementById("registerForm").reset();

        setTimeout(function () {
            window.location.href = "login.html";
        }, 2000);

    } catch (error) {
        console.error("Registration Error:", error);

        message.style.background = "#fee2e2";
        message.style.color = "#b91c1c";
        message.textContent =
            "Server connection failed. Please check whether the server is running.";
    } finally {
        button.disabled = false;
    }
});