var fs = require('fs');
var exec = require('child_process').exec;

fs.watch('./', (event, filename) => filename !== '.path_progress' &&
    exec('rake', (error, stdout, stderr) => error === null ?
        console.log(stdout) :
        console.log(`exec error: ${error}`)
        )
    );