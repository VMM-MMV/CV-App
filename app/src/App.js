import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import PersonForm from './PersonForm';
import Education from './Education';
import Experience from './Experience';

function App() {
  const [currentForm, setCurrentForm] = useState('person'); 

  const handleNextClick = () => {
      switch (currentForm) {
          case 'person':
              setCurrentForm('education');
              break;
          case 'education':
              setCurrentForm('experience');
              break;
          default:
              break;
      }
  };

  const handleBackClick = () => {
      switch (currentForm) {
          case 'education':
              setCurrentForm('person');
              break;
          case 'experience':
              setCurrentForm('education');
              break;
          default:
              break;
      }
  };


  return (
    <div className="App">
      <div className="opacity">
        {currentForm === 'person' && <PersonForm />}
        {currentForm === 'education' && <Education />}
        {currentForm === 'experience' && <Experience />}
        <div className="button-submit">
          <div className="button-row">
          <button onClick={handleBackClick} disabled={currentForm === 'person'} className="button-field" type="button">
            Back
          </button>
          <button onClick={handleNextClick} disabled={currentForm === 'experience'} className="button-field" type="button">
            Next page
          </button>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;