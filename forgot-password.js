const form = document.getElementById("forgotForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const emailMobile =
        document.getElementById("emailMobile").value.trim();

    if (emailMobile === "") {

        alert("Please Enter Email or Mobile Number");

        return;
    }

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/forgot-password",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: emailMobile
                })
            }
        );

        const data = await response.json();

        console.log("Forgot Password Response:", data);

        if (response.ok) {

            alert("OTP Sent Successfully");

            localStorage.setItem("resetEmail", emailMobile);


            console.log("OTP:", data.otp);

            window.location.href = "verify-otp.html";

        } else {

            alert(data.message || "Failed to send OTP");

        }

    } catch (error) {

        console.error("Forgot Password Error:", error);

        alert("Server connection failed");

    }

});