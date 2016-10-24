/**
 * Created by david on 24/10/16.
 */

// setup express
var express = require("express");
var app = express();

console.log(__dirname);

// set up handlebars view engine
var handlebars = require("express3-handlebars") .create({
    defaultLayout: "main",
    extname: ".hbs", // this define the extension for layouts/main.hbs
});
app.engine("hbs", handlebars.engine); // this define hbs as handlebars engine
app.set("view engine", "hbs"); // this say to use hbs as view engine


app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) { res.render("home");
});
app.get("/about", function(req, res) {
    res.render("about");
});

// custom 404 page
app.use(function(req, res){ res.type("text/plain");
    res.status(404);
    res.render("404");
});
// custom 500 page
app.use(function(err, req, res, next){ console.error(err.stack);
    console.error(err.stack);
    res.status(500);
    res.render("500");
});

app.listen(app.get("port"), function(){
    console.log( "Express started on http://localhost:" +
        app.get("port") + "; press Ctrl-C to terminate." );
});