import React, { useEffect, useState } from 'react';
import { EditTodo } from './EditTodo';


export function ListTodo() {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);



    async function deleteFunction(id) {
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            window.location = "/";
        } catch (error) {
            console.log(error);
        }
    }
    // const deleteFunction = async (id) => {
    //     try {
    //         await fetch(`http://localhost:5000/todos/${id}`, {
    //             method: "DELETE"
    //         })

    //         console.log(`Deleted ${id}`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <div>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo}/></td>
                            <td><button className='btn btn-danger' onClick={() => deleteFunction(todo.id)}>Delete</button></td>
                        </tr>
                    ))}
                {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                </tbody>
            </table>
        </div>
    )
}