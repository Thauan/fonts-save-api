'use strict';

let fs = require('fs');
let path = require('path');
let uploadPath = './uploads'

const directoryFiles = fs.readdirSync(uploadPath);

let Types = ['.txt', '.rar', '.mid']

const filesPromisse = directoryFiles.map(file =>{
    for(let type of Types) {
        if(path.extname(file) == type) {
            console.log(file, 'este é um arquivo', type);
        }
    }

    console.log(file);
});

const results = Promise.all(filesPromisse);

console.log(results);