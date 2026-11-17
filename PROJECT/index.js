const express = require("express");
const app = express();

app.use(express.json());

const packages = require("./data/tour");
const users = require("./data/user");


// ==================== MIDDLEWARE ====================

const middleware = (req, res, next) => {
    console.log("Middleware executed");
    next();
};

const middleware2 = (req, res, next) => {
    console.log("Middleware 2 executed");
    next();
};

app.use(middleware);
app.use(middleware2);


// ==================== HOME ====================

app.get("/", (req, res) => {
    res.send("Hello, World!");
});


// ==================== TOUR PACKAGES ====================

// Get all packages / filter by destination
app.get("/packages", (req, res) => {

    const destination = req.query.destination;

    if (!destination) {
        return res.json(packages);
    }

    const filteredPackages = packages.filter(
        (pkg) =>
            pkg.destination.toLowerCase() ===
            destination.toLowerCase()
    );

    res.json(filteredPackages);
});


// Get package by ID
app.get("/packages/:id", (req, res) => {

    const packageId = parseInt(req.params.id);

    const tourpackage = packages.find(
        (pkg) => pkg.id === packageId
    );

    res.status(200).json(tourpackage);
});


// Add new package
app.post("/packages", (req, res) => {

    const newPackage = req.body;

    packages.push(newPackage);

    res.status(201).json(newPackage);
});


// Tour routes
const tourRoutes = require("./route/tourRoutes");

app.use("/api", tourRoutes);


// ==================== USERS ====================

// User routes
const userRoutes = require("./route/userRoutes");

app.use("/", userRoutes);


// Get users / filter by department
app.get("/users", (req, res) => {

    const department = req.query.department;

    if (!department) {
        return res.json(users);
    }

    const filteredUsers = users.filter(
        (user) =>
            user.department.toLowerCase() ===
            department.toLowerCase()
    );

    res.json(filteredUsers);
});


// Get user by ID
app.get("/users/:id", (req, res) => {

    const userId = parseInt(req.params.id);

    const user = users.find(
        (user) => user.userId === userId
    );

    res.status(200).json(user);
});


// Add new user
app.post("/users", (req, res) => {

    const newUser = req.body;

    users.push(newUser);

    res.status(201).json(newUser);
});


//logger


const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);    
    console.log("Request Body:", req.body);
    next();
    
}
app.use(logger)  

// SERVER 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});    
