// const fs = require('fs');
// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log(data);
// fs.writeFileSync('notes.txt', 'This is Priyanshu babu');

// const path = require('path');
// const filepath = path.join(__dirname,'test', 'hello.txt');
// console.log(filepath);

// const os = require('os');
// const user = os.userInfo();
// console.log(user);

// const des = require('./data/des');
// console.log(des);

// const package = require('./data/package');
// console.log(package);   

require('dotenv').config();
const process = require('process');
console.log(process.env.PORT);