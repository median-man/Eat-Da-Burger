// =====================================================
// DEPENDENCIES
// =====================================================
const Connection = require("./connection.js");

// Query to select all data in table. Returns a promise passing for the selected data.
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

// TODO Query to add a burger to the burgers table. Returns a prmise.
function insertOne(table, data) {

}

// TODO Query to update one record in burgers table
function updateOne(table, primaryKey, data) {
	
}

selectAll("burgers").then(console.log).catch(console.log);