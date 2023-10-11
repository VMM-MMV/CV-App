import React from 'react';
import './App.css';
import PersonForm from './PersonForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className="opacity">
          <Navbar />
          <PersonForm />
      </div>
    </div>
  );
}

export default App;