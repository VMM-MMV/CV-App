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
  const [submissionStatus, setSubmissionStatus] = useState(null);

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
      await axios.post('http://localhost:8080/addPerson', collectedData);
      setSubmissionStatus('success');
      console.log('Data submitted successfully!');
    } catch (error) {
      setSubmissionStatus('error');
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
        {currentForm === 'person' && <PersonForm onDataCollected={onDataCollected}/>}
        {currentForm === 'education' && <Education onDataCollected={onDataCollected}/>}
        {currentForm === 'experience' && <Experience onDataCollected={onDataCollected}/>}
        {currentForm === 'skills' && <Skills onDataCollected={onDataCollected}/>}
        {currentForm === 'languages' && <Languages onDataCollected={onDataCollected}/>}
        {currentForm === 'hobby' && <Hobby onDataCollected={onDataCollected}/>}
        {currentForm === 'achievements' && <Achievements onDataCollected={onDataCollected}/>}
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
        {submissionStatus === 'success' && (
          <div className="success-message">Data submitted successfully!</div>
        )}
        {submissionStatus === 'error' && (
          <div className="error-message">Error submitting data. Please try again.</div>
        )}
      </div>
    </div>
  );
}

export default App;
