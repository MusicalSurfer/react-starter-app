import './App.css';
import { useState } from 'react';

// 1. with the array below - hard code out a piece of state called todos. Figure out a way to loop through the todos and render then to the page.
// const todos = ['wash car', 'call mom', 'make money']
// function App() {
// 	// Declare state, it can be done conventionally here or declaring a variable for the array.
// 	const [todos, setTodos] = useState(['wash car', 'call mom', 'make money']);
// 	// const todos = ['wash car', 'call mom', 'make money'];

// 	// Create a return function that maps through each todo element and creates an <li> element.
// 	return (
// 		<div>
// 			<h1>Todo List</h1>
// 			<ul>{todos.map(item => <li>{item}</li>)}</ul>
// 		</div>
// 	);
// }

// 2. Create a piece of state called count.
// Create buttons that will increase and decrease the count based off which is clicked.
// If the count gets below -10 or above 10, it resets to 0
function App() {
	// Declare state of count and set value to 0.
	const [count, setCount] = useState(0);

	// Create a handler functions to handle conditionals. Conditional for count is set to 9 so it doesn't go past 10
	const countHandlerUp = () => {
		count > 9 ? setCount(0) : setCount(count + 1);
	}

	const countHandlerDown = () => {
		count < -9 ? setCount(0) : setCount(count - 1);
	}

	return (
		<div>
			<h3>{count}</h3>
			<button onClick={countHandlerUp}>Click me to count up</button>
			<button onClick={countHandlerDown}>Click me to count down</button>
		</div>
	);
}


export default App;
