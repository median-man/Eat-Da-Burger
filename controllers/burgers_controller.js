// =====================================================
// DEPENDENCIES
// =====================================================

const Express = require("express");
const Burger = require("../models/burger.js"); // model

// =====================================================
// ROUTE HANDLERS
// =====================================================

// Displays the main page including burgers and add burger form
function renderMain(response) {
	Burger.getAllBurgers()
		.then((burgers) => {

			// render the page
			response.render("index", { burgers: burgers });
		});
}

// Handles a put request to devour a burger
function devourBurger(response) {
	console.log(response.body);
	Burger.devour(response.body.id)
		.then( () => { renderMain(response); } )
		.catch( (reason) => { throw reason; } );
}

// =====================================================
// ROUTING
// =====================================================

let router = Express.Router();

// main view
router.get("/", (req, res) => { renderMain(res); });

// devour api
router.put("/", (req, res) => { 
	console.log(res);
	devourBurger(res); 
});

// TODO export router
module.exports = router;