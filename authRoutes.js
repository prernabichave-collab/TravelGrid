const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/test", (req, res) => {
    res.send("Auth Router Working");
});
router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.get("/profile", verifyToken, authController.getProfile);

router.put("/profile", verifyToken, authController.updateProfile);

router.post("/forgot-password", authController.forgotPassword);

router.post("/verify-otp", authController.verifyOTP);

router.post("/reset-password", authController.resetPassword);

router.post("/change-password", verifyToken, authController.changePassword);

module.exports = router;