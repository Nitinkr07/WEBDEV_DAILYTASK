<<<<<<< HEAD
const students = [
    { id: 1, name: 'Nitin', age: 23 },
    { id: 2, name: 'Unknown', age: 23 }
];

const http = require('http');
require("dotenv").config();

const process = require('process');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/api/students') {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(
            JSON.stringify({
                count: students.length,
                students: students
            })
        );

    } else {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<h1>Hello World</h1>');
        res.write('<p>This is my first server</p>');
        res.write('<p>My name is Gyan</p>');

        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
=======
const students = [
    { id: 1, name: 'Nitin', age: 23 },
    { id: 2, name: 'Unknown', age: 23 }
];

const http = require('http');
require("dotenv").config();

const process = require('process');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/api/students') {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(
            JSON.stringify({
                count: students.length,
                students: students
            })
        );

    } else {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<h1>Hello World</h1>');
        res.write('<p>This is my first server</p>');
        res.write('<p>My name is Gyan</p>');

        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
>>>>>>> 47935ed (Add Web Dev III)
});