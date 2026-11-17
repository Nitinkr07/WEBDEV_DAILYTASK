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

// const http = require('http');
// const PORT = process.env.PORT || 3000;



// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('<h1>Hello, World!</h1>');
//   res.write('<p>This is a simple HTTP server using Node.js.');
//   res.write('Environment variable PORT : ' + PORT);
//   }
//   else if(req.url === '/about') { 
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>About Us</h1>');
//     res.end();      

//   }else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.write('<h1>404 Not Found</h1>');
//     res.end();
//   }
// });
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(req.query);
  res.send('<h1>Hello, World!</h1><p>This is a simple Express server using Node.js.</p>');
});

// app.get('/about', (req, res) => {
//   console.log(req.method, req.url, req.headers, req.query, req.params);
//   res.send('<h1>About Us</h1><p>This is the about page.</p>');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});