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
function update(id, name="", devoured = void 0, timestamp = void 0) {
	let criteria = { id: id };

	// add values to update to object if defined in arguments
	let newBurger = {};
	if(name.length>0) { newBurger.burger_name = name; }
	if(typeof devoured !== "undefined") { newBurger.devoured = devoured; }
	if(typeof timestamp !== "undefined") { newBurger.date = timestamp; }

	// uses ORM.updateOne
	return ORM.updateOne("burgers", criteria, newBurger);
}

module.exports = {
	getAllBurgers: getAllBurgers,
	add: add,
	update: update
};