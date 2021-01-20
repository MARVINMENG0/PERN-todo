const Pool = require('pg').Pool;

const pool = new Pool({
	user: "jinmeng1",
	host: "localhost",
	port: "5432",
	password: "Bobanator10!",
	database: "pern_todo"
})

module.exports = pool;