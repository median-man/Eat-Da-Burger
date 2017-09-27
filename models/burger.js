// =====================================================
// burger.js
//
// Contains code for interfacing with storage for burger
// data.
// =====================================================
const ORM = require("../config/orm.js");

// Gets all records from burgers table. Returns a promise.
function getAllBurgers() {
	return ORM.selectAll("burgers");
}

// Adds burger to burgers table. Returns a promise.
function add(name, devoured = false) {

	// object with keys corresponding to burgers table
	let newBurger = {
		burger_name: name,
		devoured: devoured
	};
	return ORM.insertOne( "burgers", newBurger);
}

// Updates information for a burger with matching unique id. Returns a promise.
// PARAMETERS:
//		id: integer for burger id in burgers db
//		burger: object with fields and values to update for burger data
function devour(id) {
	return ORM.updateOne("burgers", { id: id }, { devoured: true });
}

module.exports = {
	getAllBurgers: getAllBurgers,
	add: add,
	devour: devour
};