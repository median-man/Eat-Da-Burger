// =====================================================
// orm.js
//
// Contains methods to execute mysql commands.
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

// Query to update one record in burgers table. Returns promise.
function updateOne(table, primaryKey, data) {
	return new Promise( ( resolve, reject ) => {
		
		// initialize sql statement
		let sql = "UPDATE ?? SET ? WHERE ?";

		// run query to get all data in table
		Connection.query( sql, [table, data, primaryKey], ( err, data ) => {
			if(err) return reject(err);
			return resolve(data);
		});
	} );
}