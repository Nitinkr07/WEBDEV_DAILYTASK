// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "../data/tour.json");

// //getall

// const getAll = () =>{
//     const data = fs.readFileSync(filepath, "utf-8");
//     return JSON.parse(data);
// }


// // get by id
// const getById = (id) =>{
//     const tours = getAllTours;
//     return tours.find((tour) => tour.id === id);
// }



// //add new tour
// const addTour = (newTour) => {
//     const tours = getAll();
//     tours.push(newTour);
//     fs.writeFileSync(filePath, JSON.stringify(tours));
//     return newTour;
// }

// module.exports = {
//     getAll,
//     getById,
//     addTour
// }; 

const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../data/tour.json");

// get all
const getAll = () => {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
};

// get by id
const getById = (id) => {
    const tours = getAll();
    return tours.find((tour) => tour.id === id);
};

// add new tour
const addTour = (newTour) => {
    const tours = getAll();
    tours.push(newTour);
    fs.writeFileSync(filepath, JSON.stringify(tours));
    return newTour;
};

module.exports = {
    getAll,
    getById,
    addTour
};