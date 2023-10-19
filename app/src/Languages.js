import React, { useState } from 'react';

function Languages({ onDataCollected, data }) {
    const [language, setLanguage] = useState(data.language || '');
    const [levelLanguage, setLevelLanguage] = useState(data.levelLanguage || '');  

    const handleAddLanguage = () => {
        if (language && levelLanguage) {
            const languageData = {
            language,
            levelLanguage,
          };
    
          onDataCollected('languages', languageData);
    
          setLanguage('');
          setLevelLanguage('');
        } else {
          alert('Please fill out all fields.');
        }
    };

    return (
        <div id="parent">
            <div className="aside-right">
                <div className="container">
                    <div className="main-page">
                        <div className="space"> 
                            <h1 className="page-title">Tell us about your languages!</h1>
                            <h2 className="sub-title">Type all your spoken languages from the native one to just new learnt.</h2>
                            <div className="form5">
                                <form onSubmit={handleAddLanguage}>
                                    <div className="language-full-fields">
                                        <div className="language-field">
                                            <label>
                                                Languages:
                                            </label>
                                            <input type="text" required placeholder="e.g English" className="form-name" autoComplete="language" value={language} onChange={e => setLanguage(e.target.value)}/>
                                        </div>
                                        <div className="level-language-field">
                                            <label>
                                                Level:
                                            </label>
                                            <select className="form-name" value={levelLanguage} onChange={e => setLevelLanguage(e.target.value)}>
                                                <option value="">Select language level</option>
                                                <option value="A1">A1</option>
                                                <option value="A2">A2</option>
                                                <option value="B1">B1</option>
                                                <option value="B2">B2</option>
                                                <option value="C1">C1</option>
                                                <option value="C2">C2</option>
                                                <option value="nativeSpeaker">Native Speaker</option>
                                                <option value="workingKnowledge">Working Knowledge</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Languages