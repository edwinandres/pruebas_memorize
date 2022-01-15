import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { useCallback, useEffect, useMemo, useState } from 'react';

const initialUsers = [
	{ id: 1, name: 'John', age: 20 },
	{ id: 2, name: 'Mike', age: 30 },
	// { id: 3, name: 'Mary', age: 40 },
	// { id: 4, name: 'Julie', age: 50 },
]

function App() {	

	const [users, setUsers] = useState(initialUsers)
	const [text, setText] = useState('')
	const [search, setSearch] = useState('')

	const printUsers = useCallback(() => {
		console.log("change users" +  JSON.stringify(users))
	},[users])


	useEffect(() => {
		//console.log("app render")
	})

	useEffect(() => {
		printUsers()
	}, [users, printUsers])

	const handleAdd = () => {
		const newUser = {
			id: users.length + 1,
			name: text,
			age: Math.floor(Math.random() * 30) + 20
		}
		setUsers([...users, newUser])
		setText('')
	}

	//useCallback(() => {	callback },	[input])
	

	const handleDelete = useCallback((userId) => {
		alert(userId)
		setUsers(users.filter(user => user.id !== userId))
	},[users])


	const filteredUsers = useMemo(() => 
		users.filter(user => {
			//console.log("filteredUsers")
			return user.name.toLowerCase().includes(search.toLowerCase())
		})
	,[search, users])

	


	const handleSearch = (e) => {
		setSearch(text)
	}

	return (
		<div className="App">
			<input
				type={text}
				value={text}
				onChange={e => setText(e.target.value)}
			></input>

			<button onClick={() => handleSearch()}>Buscar usuario</button>

			<button onClick={() => handleAdd()}>Agregar usuario</button>

			


			<List
				users={filteredUsers}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default App;
