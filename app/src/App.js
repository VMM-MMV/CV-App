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
import Finalize from './Finalize';
import axios from 'axios';

function App() {
  const steps = ['person', 'education', 'experience', 'skills', 'languages', 'hobby', 'achievements', 'finalize'];
  const [currentForm, setCurrentForm] = useState('person');

  const [collectedData, setCollectedData] = useState({
    person: {},
    education: {},
    experience: {},
    skills: {},
    languages: {},
    hobby: {},
    achievements: {},
  });

  const handleNextClick = () => {
    const currentStepIndex = steps.indexOf(currentForm);
    if (currentStepIndex < steps.length - 1) {
      setCurrentForm(steps[currentStepIndex + 1]);
    }
  };

  const handleBackClick = () => {
    const currentStepIndex = steps.indexOf(currentForm);
    if (currentStepIndex > 0) {
      setCurrentForm(steps[currentStepIndex - 1]);
    }
  };

  const isFinalizePage = currentForm === 'finalize';

  const handleFinalSubmit = async () => {
    try {
      await axios.post('http://localhost:8080/addPerson', { data: collectedData });
      console.log('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data: ' + error);
    }
  };

  const onDataCollected = (step, data) => {
    setCollectedData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  return (
    <div className="App">
      <div className="opacity">
        {currentForm === 'person' && <PersonForm onDataCollected={onDataCollected} data={collectedData.person}/>}
        {currentForm === 'education' && <Education onDataCollected={onDataCollected} data={collectedData.education}/>}
        {currentForm === 'experience' && <Experience onDataCollected={onDataCollected} data={collectedData.experience}/>}
        {currentForm === 'skills' && <Skills onDataCollected={onDataCollected} data={collectedData.skills}/>}
        {currentForm === 'languages' && <Languages onDataCollected={onDataCollected} data={collectedData.languages}/>}
        {currentForm === 'hobby' && <Hobby onDataCollected={onDataCollected} data={collectedData.hobby}/>}
        {currentForm === 'achievements' && <Achievements onDataCollected={onDataCollected} data={collectedData.achievements}/>}
        {currentForm === 'finalize' && <Finalize />}
        <div className={`button-submit ${currentForm === 'person' ? 'first-page' : ''}`}>
          {currentForm !== 'person' && (
            <button onClick={handleBackClick} className="button-field button-back" type="button">
              Back
            </button>
          )}
          {isFinalizePage ? (
            <button onClick={handleFinalSubmit} className="button-field button-next" type="button">
              Submit
            </button>
          ) : (
            <button onClick={handleNextClick} className="button-field button-next" type="button">
              Next page
            </button>
          )}
        </div>
        <Navbar currentForm={currentForm} steps={steps} />
      </div>
    </div>
  );
}

export default App;
