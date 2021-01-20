import './App.css';
import { InputTodo } from './Components/InputTodo.js'
import { ListTodo } from './Components/ListTodo.js'

function App() {
  return (
    <div className='container'>
      <InputTodo />
      <ListTodo />
    </div> 
  );
}

export default App;