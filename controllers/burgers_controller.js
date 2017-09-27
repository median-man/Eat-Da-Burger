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

// =====================================================
// ROUTING
// =====================================================

let router = Express.Router();

// main view
router.get("/", (req, res) => { renderMain(res); });

// TODO export router
module.exports = router;