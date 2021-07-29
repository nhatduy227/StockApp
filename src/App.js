import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the refresh
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //clear up the input after clicking the todo button
  
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      
      <form>
      <FormControl>
        <InputLabel> Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      </form>

      <Button disabled={!input} type ="submit" variant="contained" color="primary" onClick={addTodo}>
        Add Todo
      </Button> 
      
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;

