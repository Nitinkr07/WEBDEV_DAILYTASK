const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");



router.get("/users/search", userController.searchUser);



router.get("/users/salary", userController.searchBySalary);



router.get("/users/:id", userController.getUserById);



router.get("/users", userController.getAllUsers);



router.post("/users", userController.addUser);



router.put("/users/:id", userController.updateUser);



router.delete("/users/:id", userController.deleteUser);


module.exports = router;