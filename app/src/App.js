import React from 'react';
import './App.css';
import PersonForm from './PersonForm';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="opacity">
          <Navbar />
          <PersonForm />
          <Footer />
      </div>
    </div>
  );
}

export default App;