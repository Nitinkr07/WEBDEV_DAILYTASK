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


const fs = require('fs');

// Create a new file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created successfully.');
});

 // Delete a file
// fs.unlink('example.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully.');
// });

// delete the file after 5 seconds
setTimeout(() => {
    fs.unlink('example.txt', (err) => {
        if (err) throw err;
        console.log('File deleted successfully after 5 seconds.');
    });
}, 5000);