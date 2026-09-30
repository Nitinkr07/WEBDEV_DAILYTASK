// const os = require('os');

// console.log('Operating System Information:');
// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);
// console.log(`CPU Cores: ${os.cpus().length}`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Free Memory: ${os.freemem()} bytes`);


// const path = require('path');

// console.log('Path Information:');
// console.log('Current Directory:', __dirname);
// const filePath = path.join(__dirname, 'index.js');
// console.log('File Path:', filePath);


// const fs = require('fs');

// // Create a new file
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) throw err;
//     console.log('File created successfully.');
// });

// Delete a file
// fs.unlink('example.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully.');
// });

// delete the file after 5 seconds
// setTimeout(() => {
//     fs.unlink('example.txt', (err) => {
//         if (err) throw err;
//         console.log('File deleted successfully after 5 seconds.');
//     });
// }, 5000);



// const process = require('process');
// require('dotenv').config();
// const PORT = process.env.PORT;
// console.log(PORT);

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello, World!\n');
    res.write('<h1>Welcome to my server</h1>');
    res.write('<p>This is a simple HTTP server created using Node.js.</p>');
    res.write('<p>Current Date and Time: ' + new Date().toLocaleString() + '</p>');
    res.write('<p>Request Method: ' + req.method + '</p>');
    res.write('<p>Request URL: ' + req.url + '</p>');
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});