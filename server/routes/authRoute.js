const express = require("express")
const router = express.Router()
const { signup, signin, getUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, followUser, signin_admin } = require("../controllers/authController")

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/getUsers", getUsers);
router.get("/getUser/:id", getUser);
router.get("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);
router.put("/blockUser/:id", blockUser);
router.put("/unblockUser/:id", unblockUser);
router.put("/followUser/:id", followUser);
router.put("/followUser/", followUser);
router.post("/signin_admin",signin_admin);

module.exports = router;