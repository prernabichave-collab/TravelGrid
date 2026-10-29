document.addEventListener("DOMContentLoaded", async () => {

    const token = localStorage.getItem("token");

    if (!token) {

        alert("Please login first");

        window.location.href = "login.html";

        return;
    }

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/profile",
            {
                method: "GET",

                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        const data = await response.json();

        console.log("Profile Response:", data);

        if (!response.ok) {

            alert(data.message || "Session expired");

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.href = "login.html";

            return;
        }


        const user = data.user;

        document.getElementById("fullname").innerText =
            user.fullname || "Not Available";

        document.getElementById("email").innerText =
            user.email || "Not Available";



    } catch (error) {

        console.error("Profile Error:", error);

        alert("Server connection failed");

    }


    document.getElementById("changePasswordBtn").addEventListener("click", () => {

        window.location.href = "change-password.html";

    });


    document.getElementById("logoutBtn").addEventListener("click", () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Logout Successful");

        window.location.href = "login.html";

    });

});