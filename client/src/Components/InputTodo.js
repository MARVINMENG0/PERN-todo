import React, { useState } from 'react';

// export class InputTodo extends React.Commponent{
// 	render() {
// 		return (
// 			<h1>Input To Do</h1>
// 			);
// 	}
// }

export const InputTodo = () => {
	const [description, setDescription] = useState("");
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(body)
			});
			window.location = "/";
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			<h1 className="text-center mt-5">Pern Todo List</h1>
			<form className="d-flex mt-5" onSubmit={ onSubmitForm }>
				<input type="text" className="form-control" value={ description } onChange={e => setDescription(e.target.value)}/>
				<input type="submit" className="btn btn-success"/>
				{/* <button className='btn btn-success'>Add</button> */}
			</form>
		</div>
	)
}

