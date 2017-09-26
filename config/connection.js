// =====================================================
// connection.js
//
// This module contains configuration parameters for
// connecting to the burgers_db and exports the mysql
// connection object for the db.
// =====================================================
const Mysql = require("mysql");

// db connection configuration
const config = {
	host: "localhost",
	user: "root",
	password: "rictor",
	database: "burgers_db"
};

// export connection to burgers_db
module.exports = mysql.createConnection(config);