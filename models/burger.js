// =====================================================
// burger.js
//
// Contains code for interfacing with storage for burger
// data.
// =====================================================
const ORM = require("../config/orm.js");

// Gets all records from burgers table. Returns a promise.
function getAllBurgers() {
	// uses ORM.selectAll to get all the data from burgers table
	return ORM.selectAll("burgers");
}

// Adds burger to burgers table. Returns a promise.
function add(name, devoured = false, timestamp = void 0) {

	// object with keys corresponding to burgers table
	let newBurger = {
		burger_name: name,
		devoured: devoured
	};

	// add date field if timestamp not null
	if(timestamp) newBurger.date = timestamp;
	
	// uses ORM.insertOne
	return ORM.insertOne( "burgers", newBurger);
}

// Updates information for a burger with matching unique id. Returns a promise.
// PARAMETERS:
//		id: integer for burger id in burgers db
//		burger: object with fields and values to update for burger data
function update(id, burger) {
	return ORM.updateOne("burgers", { id: id }, burger);
}

module.exports = {
	getAllBurgers: getAllBurgers,
	add: add,
	update: update
};