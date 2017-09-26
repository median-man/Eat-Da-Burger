// ==============================================================
// DEPENDENCIES
// ==============================================================
const Express = require("express");
const BodyParser = require("body-parser");
const MethodOverride = require("method-override");

let app = Express();
let PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(Express.static("public"));

app.use(MethodOverride("_method"));

// Parse application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({ extended: false }));

app.listen(PORT);