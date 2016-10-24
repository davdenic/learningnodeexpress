/**
 * Created by david on 24/10/16.
 */
"use strict";

var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type": "text/plain"
    });
    res.end("hello world");
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate...");