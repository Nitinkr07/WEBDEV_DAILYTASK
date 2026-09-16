const users = require("../data/user");
const userModel = require("../models/userModel");

// get all users
const getAllUsers = (req, res) => {

    const users = userModel.getAll();

    res.json(users);

};


// get user by id
const getUserById = (req, res) => {

    const id = parseInt(req.params.id);

    const user = userModel.getById(id);

    if (user) {

        res.status(200).json(user);

    } else {

        res.status(404).json({
            message: "User not found"
        });

    }

};


// add new user
const addUser = (req, res) => {

    const newUser = req.body;

    const user = userModel.addUser(newUser);

    res.status(201).json(user);

};


// delete user
const deleteUser = (req, res) => {

    const id = parseInt(req.params.id);

    const updatedUsers = userModel.deleteUser(id);

    res.status(200).json({
        message: "User deleted successfully",
        users: updatedUsers
    });

};


// update user
const updateUser = (req, res) => {

    const id = parseInt(req.params.id);

    const updatedUserData = req.body;

    const updatedUser = userModel.updateUser(
        id,
        updatedUserData
    );

    if (updatedUser) {

        res.status(200).json(updatedUser);

    } else {

        res.status(404).json({
            message: "User not found"
        });

    }

};


// search user
const searchUser = (req, res) => {

    const department = req.query.department;

    if (!department) {

        return res.status(400).json({
            message: "Department query parameter is required"
        });

    }

    const users = userModel.searchUser(department);

    res.status(200).json(users);

};


// search by salary
const searchBySalary = (req, res) => {

    const minSalary = parseInt(req.query.minSalary);
    const maxSalary = parseInt(req.query.maxSalary);

    if (!minSalary || !maxSalary) {

        return res.status(400).json({
            message: "Minimum salary and maximum salary are required"
        });

    }

    const users = userModel.searchBySalary(
        minSalary,
        maxSalary
    );

    res.status(200).json(users);

};


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    searchUser,
    searchBySalary
};