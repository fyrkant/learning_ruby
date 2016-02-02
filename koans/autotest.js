const fs = require('fs');
const exec = require('child_process').exec;

const directory = './';
const re = /\.rb/;
const command = 'rake';

fs.watch(directory, (event, filename) => filename.match(re) &&
    exec(command, (error, stdout, stderr) => error === null ?
        console.log(stdout) :
        console.log(`exec error: ${error}`)
        )
    );