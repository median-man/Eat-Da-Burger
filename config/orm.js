// =====================================================
// DEPENDENCIES
// =====================================================
const Connection = require("./connection.js");

// Query to select all data in table. Returns a promise passing 
// for the selected data.
function selectAll(table) {
	// create a promise
	return new Promise( ( resolve, reject ) => {
		let sql = "SELECT * FROM ??";

		// run query to get all data in table
		Connection.query( sql, table, ( err, data ) => {

			// run rejection callback on error
			if(err) return reject(err);

			// pass data to success callback
			return resolve(data);
		});
	} );
}

// Query to add a burger to the burgers table passing OkPacket data object
// to the success promise. Returns a promise. data is an object where keys 
// correspond to field names and values are the values to place in the fields
function insertOne(table, data) {
	return new Promise( ( resolve, reject ) => {

		// initialize sql statement
		let sql = "INSERT INTO ?? SET ?";

		// run query to get all data in table
		Connection.query( sql, [table, data], ( err, data ) => {
			if(err) return reject(err);
			return resolve(data);
		});
	} );
}

// TODO Query to update one record in burgers table
function updateOne(table, primaryKey, data) {
	
}

// selectAll("burgers").then(console.log).catch(console.log);
insertOne("burgers", {
	burger_name: "Anchovy Delight",
	devoured: false
}).then(console.log).catch(console.log);