const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors());
app.use(express.json()); // req.body


app.post('/todos', async(req,res,next) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query('insert into todo (description) values($1) returning *', [description]);
		res.status(201).json(newTodo);
	} catch(e) {
		console.log(e);
	}
})

app.get('/todos', async (req, res, next) => {
	try {
		const allTodos = await pool.query('select * from todo');
		res.json(allTodos.rows);
	} catch (e) {
		console.log(e);
	}
})

app.get('/todos/:id', async (req, res, next) => {
	try {
		const idTodo = await pool.query('select * from todo where id = $1', [req.params.id]);
		res.json(idTodo.rows);
	} catch(e) {
		console.log(e);
	}
})

app.put('/todos/:id', async(req, res, next) => {
	try {
		const updateTodo = await pool.query('update todo set description = $1 where id = $2', [req.body.description, req.params.id]);
		res.json(updateTodo);
	} catch (e) {
		console.log(e);
	}
})

app.delete('/todos/:id', async (req, res, next) => {
	try{
		await pool.query('delete from todo where id = $1', [req.params.id]);
		res.status(204).send('Deleted sucessfully');
	} catch(e) {
		console.log(e);
	}
})


app.listen(5000, () => {
	console.log('Server is listening on Port 5000');
})













