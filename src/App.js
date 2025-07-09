import React, { useState ,useEffect } from 'react';
import './App.css'
const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  const btn = (e) => {
    e.preventDefault();
 
    setItems([...items, search]);
    setSearch('');
  };

useEffect(() => {
  const saved = localStorage.getItem('todos');
  if (saved) setItems(JSON.parse(saved));
}, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(items));
}, [items]);

 const deleteTask = (taskToDelete) => {
  setItems(items.filter(task => task !== taskToDelete));
};

  return (

    <div>
   <h1>TO-DO'S</h1>
      <form onSubmit={btn}>
             
        <input
          type='text'
          placeholder='Add your todo'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>

      <ol>
        {items.map((task, index) => (
          <li key={index}>
            {task}{' '}
           <button onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
