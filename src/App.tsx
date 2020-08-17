import React, { useState, useEffect, FormEvent } from 'react';

import './App.css';



const App: React.FC = () => {
  const [field, setField] = useState('');

  useEffect(() => {
   const item = localStorage.getItem('@TODOList:item');
    console.log(item)
  }, []);

  function handleAddToDo(e:FormEvent) {
    e.preventDefault();
    localStorage.setItem('@TODOList:item', JSON.stringify(field));
  }

  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={handleAddToDo}>
          <input 
            type="text" 
            placeholder="Enter text" 
            name="field"
            value={field}
            maxLength={156}
            onChange={(e) => { setField(e.target.value) }}            
          />
          <button type="submit">Add</button>
        </form>
      </header>
      <main>
        <div className="todos-container">
            <p>Lorem ipsum dolor sit amet convitae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic architecto ratione minima quis exercitationem autem expedita quos ex vitae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic architecto ratione minima quis exercitationem autem expedita quos ex vitae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic architecto ratione minima quis exercitationem autem expedita quos ex vitae.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
