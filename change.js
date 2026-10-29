document.getElementById("changePasswordForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const currentPassword =
        document.getElementById("currentPassword").value;

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("message");

    if (newPassword !== confirmPassword) {
        message.innerText = "New passwords do not match";
        return;
    }

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/change-password",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },

                body: JSON.stringify({
                    currentPassword: currentPassword,
                    newPassword: newPassword
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert(data.message || "Password changed successfully");

            window.location.href = "dashboard.html";

        } else {

            message.innerText =
                data.message || "Password change failed";
        }

    } catch (error) {

        console.error(error);

        message.innerText = "Server connection failed";
    }

});