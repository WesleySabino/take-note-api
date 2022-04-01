var http = require('http');
var fs = require('fs');
var file = 'noteFile.txt';
var note;

function writeNote(content) {
    fs.writeFileS(file, content, (err) => {
        if (err)
            console.log(err);
    });
    console.log('It\'s saved!');
}

function getNote(noteFile) {

    // fs.readFileSyn(noteFile, 'utf8', (err, data) => {
    //     if (err)
    //         console.log(err);
    //     console.log(0, data);
    //     note = data;
    // });

    return fs.readFileSync(noteFile);
    // console.log(1, note);
    // return note;

}

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    writeNote('This is the text');
    console.log(2, getNote(file));
    res.end(getNote(file));
}).listen(3000);