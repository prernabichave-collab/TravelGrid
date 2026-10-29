const otpForm = document.getElementById("otpForm");

otpForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const otp = document.getElementById("otp").value.trim();

    const email = localStorage.getItem("resetEmail");

    if (!email) {

        alert("Email not found. Please try again.");

        window.location.href = "change-password.html";

        return;
    }

    if (otp.length !== 6) {

        alert("Please enter a valid 6 digit OTP");

        return;
    }

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/verify-otp",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    otp: otp
                })
            }
        );

        const data = await response.json();

        console.log("Verify OTP Response:", data);

        if (response.ok) {

            alert("OTP Verified Successfully");

            localStorage.setItem("verifiedOTP", otp);
            localStorage.setItem("otpVerified", "true");

            window.location.href = "change-password.html";

        } else {

            alert(data.message || "Invalid OTP");

        }

    } catch (error) {

        console.error("Verify OTP Error:", error);

        alert("Server connection failed");

    }

});