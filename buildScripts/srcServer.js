// Use 'express' as the Web Server, as it can be scaled to a PROD level environment also
var express = require ('express');

// Path and Open help in determining the path on the web server
var path = require ('path');
var open = require ('open');

// Set a custom port for the application to run on.
var port = 5000;

// Create a new instance 'app' of the 'express' web server
var app = express();

// Inform 'express' which routes it should handle
// So any references to the '/' (root), should be handled by this function, which takes a request and a response
app.get('/', function(req, res) {
    // Create a join between the current directory and our source path, which will have the 'index.html' file
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Now tell express that it should listen on the port created above
app.listen(port, function(err) {
    // If there is an error then output the error, else display the server with the given port
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});