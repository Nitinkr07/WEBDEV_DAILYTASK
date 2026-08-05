console.log("hello,World"); 
console.log("hello,World"); 

const fs = require('fs');
const data = fs.readFileSync('notes.txt', 'utf-8')
console.log(data)
fs.writeFileSync('notes.txt','My name is mukul');

const path = require('path');
const filepath = path.join(__dirname, 'test','hello.txt');
console.log(filepath) 

const os= require('os');
const user = os.userInfo();

console.log(user)

const des = require('./module/des');
console.log(des); 

const packages = require('./module/packages');
console.log(packages);   







