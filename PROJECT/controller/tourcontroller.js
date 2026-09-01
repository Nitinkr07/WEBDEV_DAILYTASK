// const tourModel = require("../model/tourModel");

// //get all tours
// const getAllTours = (req,res) => {
//     const tours = tourModel.getAll();
//     res.json(tours); 
// };

// module.exports = {
    
// }

const tourModel = require("../models/tourModel");

// get all tours
const getAllTours = (req, res) => {

    const tours = tourModel.getAll();

    res.json(tours);

};

// get tour by id
const getTourById = (req, res) => {

    const id = parseInt(req.params.id);

    const tour = tourModel.getById(id);

   

    res.json(tour);

};

// add new tour
const addTour = (req, res) => {

    const newTour = req.body;

    const tour = tourModel.addTour(newTour);

    res.status(201).json(tour);

};

module.exports = {
    getAllTours,
    getTourById,
    addTour
};