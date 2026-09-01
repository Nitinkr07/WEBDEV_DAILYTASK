// const express = require("express");
// const express = require("express");
// const app = express();
// app.use(express.json());
// const router = express.Router();
// const tourController =  require( "../controller/tourController") 

// //get all tours
// router.get("/tours", tourController.getAll) 


const express = require("express");

const router = express.Router();

const tourController = require("../controller/tourController");

// get all tours
router.get("/tours", tourController.getAllTours);

// get tour by id
router.get("/tours/:id", tourController.getTourById);

// add new tour
router.post("/tours", tourController.addTour);

module.exports = router; 