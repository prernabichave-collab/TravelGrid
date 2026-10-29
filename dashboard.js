document.addEventListener("DOMContentLoaded", async function () {

    ```
const token = localStorage.getItem("token");


if (!token) {
    window.location.href = "login.html";
    return;
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");

        window.location.href = "login.html";

    });

}


try {

    const response = await fetch(
        "http://localhost:5000/api/auth/profile",
        {
            method: "GET",

            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        }
    );


    const data = await response.json();

    console.log("Profile Response:", data);


    if (!response.ok) {

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");

        window.location.href = "login.html";

        return;
    }

    const user = data.user || data;

    const fullname =
        document.getElementById("fullname");

    if (fullname) {

        fullname.textContent =
            user.fullname || "";

    }

    const email =
        document.getElementById("email");

    if (email) {

        email.textContent =
            user.email || "";

    }

    const mobile =
        document.getElementById("mobile");

    if (mobile) {

        mobile.textContent =
            user.mobile || "";

    }


} catch (error) {

    console.error(
        "Profile Error:",
        error
    );

}
```

});
