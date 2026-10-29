document.getElementById("resetForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const email =
        localStorage.getItem("resetEmail");

    const otp =
        localStorage.getItem("verifiedOTP");

    const message =
        document.getElementById("message");


    if (!email || !otp) {

        message.innerText =
            "Reset session expired. Please try again.";

        message.className = "error";

        return;
    }


    if (newPassword !== confirmPassword) {

        message.innerText =
            "Passwords do not match.";

        message.className = "error";

        return;
    }


    if (newPassword.length < 6) {

        message.innerText =
            "Password must be at least 6 characters.";

        message.className = "error";

        return;
    }


    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/reset-password",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    otp: otp,
                    newPassword: newPassword
                })
            }
        );

        const data = await response.json();

        message.innerText = data.message;


        if (response.ok) {

            message.className = "success";

            // Clear reset information
            localStorage.removeItem("resetEmail");
            localStorage.removeItem("resetOTP");
            localStorage.removeItem("verifiedOTP");


            setTimeout(function () {

                window.location.href =
                    "/login.html";

            }, 1500);

        } else {

            message.className = "error";
        }

    } catch (error) {

        console.log("Reset Password Error:", error);

        message.innerText =
            "Server connection failed.";

        message.className = "error";
    }

});