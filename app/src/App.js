import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import PersonForm from './PersonForm';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Languages from './Languages';
import Hobby from './Hobby';
import Achievements from './Achievements';

function App() {
  const [currentForm, setCurrentForm] = useState('person'); 

  const handleNextClick = () => {
        console.log('Next button clicked in App component');
      switch (currentForm) {
          case 'person':
            setCurrentForm('education');
            break;
          case 'education':
            setCurrentForm('experience');
            break;
          case 'experience':
            setCurrentForm('skills');
            break;
          case 'skills':
            setCurrentForm('languages');
            break;
          case 'languages':
              setCurrentForm('hobby');
            break;
          case 'hobby':
              setCurrentForm('achievements');
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
          case 'skills':
            setCurrentForm('experience');
            break;
          case 'languages':
            setCurrentForm('skills');
            break;
          case 'hobby':
            setCurrentForm('languages');
            break;
          case 'achievements':
              setCurrentForm('hobby');
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
        {currentForm === 'skills' && <Skills />}
        {currentForm === 'languages' && <Languages />}
        {currentForm === 'hobby' && <Hobby />}
        {currentForm === 'achievements' && <Achievements />}
        <div className="button-submit">
          <div className="button-row">
          <button onClick={handleBackClick} disabled={currentForm === 'person'} className="button-field" type="button">
            Back
          </button>
          <button onClick={handleNextClick} disabled={currentForm === 'achievements'} className="button-field" type="button">
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