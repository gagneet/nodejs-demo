// Use 'express' as the Web Server, as it can be scaled to a PROD level environment also
//var express = require ('express');
import express from 'express';

// Path and Open help in determining the path on the web server
//var path = require ('path');
import path from 'path';
//var open = require ('open');
import open from 'open';

// Add 'Webpack' packages to the Server (express)
import webpack from 'webpack';
// Add the Webpack config file we created to the Server (express)
import config from '../webpack.config.dev';

// Set a custom port for the application to run on.
const port = 5000;

// Create a new instance 'app' of the 'express' web server
const app = express();

// Call webpack (the compiler) and pass it the config variable created above
const compiler = webpack(config);

// Inform the Server (express) to use the webpack-dev-middleware with teh compiler variable and the publicPath
app.use(require('webpack-dev-middleware')(compiler, {
    // do not display any special inf, and configure the public-path, this is the variable we setup in the Webpack config file
    noInfo: true,
    publicPath: config.output.publicPath
}));

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
