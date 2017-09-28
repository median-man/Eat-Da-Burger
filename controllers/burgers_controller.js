// =====================================================
// DEPENDENCIES
// =====================================================

const Express = require("express");
const Burger = require("../models/burger.js"); // model

// =====================================================
// ROUTE HANDLERS
// =====================================================

// Handles a put request to devour a burger and redirects to root.
function devourBurger(req, res) {
	Burger.devour(req.params.id)
		.then( () => { res.redirect("/"); } )
		.catch( (reason) => { throw reason; } );
}

// Displays the main page including burgers and add burger form
function renderMain(response) {
	Burger.getAllBurgers()
		.then((burgers) => {

			// render the page
			response.render("index", { burgers: burgers });
		});
}

// =====================================================
// ROUTING
// =====================================================

let router = Express.Router();

// main view
router.get("/", (req, res) => { renderMain(res); });

// devour api
router.put("/:id", devourBurger);

// export router
module.exports = router;