<<<<<<< HEAD
const http = require('http');
require('dotenv').config();

const students = [
    {
        id: 1,
        name: "Nitin",
        course: "B.Tech CSE"
    },
    {
        id: 2,
        name: "Rahul",
        course: "BCA"
    },
    {
        id: 3,
        name: "Aman",
        course: "B.Tech CSE"
    }
];

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/api/students') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(
            JSON.stringify({
                count: students.length,
                students
            })
        );
    }

    else if (req.method === 'GET' && req.url === '/api/students/count') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(
            JSON.stringify({
                count: students.length
            })
        );
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(
            JSON.stringify({
                message: 'Route not found'
            })
        );
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
=======
const http = require('http');
require('dotenv').config();

const students = [
    {
        id: 1,
        name: "Nitin",
        course: "B.Tech CSE"
    },
    {
        id: 2,
        name: "Rahul",
        course: "BCA"
    },
    {
        id: 3,
        name: "Aman",
        course: "B.Tech CSE"
    }
];

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/api/students') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(
            JSON.stringify({
                count: students.length,
                students
            })
        );
    }

    else if (req.method === 'GET' && req.url === '/api/students/count') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(
            JSON.stringify({
                count: students.length
            })
        );
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(
            JSON.stringify({
                message: 'Route not found'
            })
        );
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
>>>>>>> 47935ed (Add Web Dev III)
});