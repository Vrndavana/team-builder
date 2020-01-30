// Imports
import React, { useState } from 'react';
import './App.css';
import NewForm from './Form';
import Squad from './Card';

// App Function
function App() {

  // Use-State   -in function-
    const [alien, setAlien] = useState([
    { 
    name: 'V',
    email: 'V@.com',
    role: 'Web Dev-lopper'  
    }
  ]);

  // Variables of Use-State   -in function-
    const addNewPerson = personalInfo => {
      const newbie = {
      name: personalInfo.name,
      email: personalInfo.email,
      role: personalInfo.role
      };
      setAlien([...alien, newbie])
  };

 // Return   -in function-
   return (
    <div className="App">
      <header className="App-header">
        <NewForm addNewPerson={addNewPerson}/>
        <Squad alien={alien}/>
      </header>
    </div>
  );

} // FUNCTION CLOSING TAG


// EXPORT
export default App;