import React, { useState } from 'react';

function Skills({ onDataCollected, data }) {
    const [skills, setSkills] = useState(data.skills || '');

    const [rangeValue, setRangeValue] = useState(data.rangeValue || '0');  

    const handleRangeChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setRangeValue(newValue);
    };

    let text = 'Make a choice';
    if (rangeValue === 0) {
        text = 'Beginner';
    } else if (rangeValue === 25) {
        text = 'Moderate';
    } else if (rangeValue === 50) {
        text = 'Skillful'
    } else if (rangeValue === 75) {
        text ='Experienced'
    } else if (rangeValue === 100) {
        text = 'Expert';
    }

    const handleAddSkills = () => {
        if (skills && rangeValue) {
            const skillsData = {
                skills, 
                rangeValue,
            };

            onDataCollected('skills', skillsData);

            setSkills('');
            setRangeValue('');
        } else {
            alert('Please fill out all fields.');
        }
    }

    return (
        <div id="parent">
            <div className="aside-right">
                <div className="container">
                    <div className="main-page">
                        <div className="space"> 
                            <h1 className="page-title">Tell us about your skills!</h1>
                            <h2 className="sub-title">Type all your learned skills. List them all.</h2>
                            <div className="form4">
                                <form onSubmit={handleAddSkills}>
                                    <div className="skills-full-fields">
                                        <div className="skills-field">
                                            <label>
                                                Skills:
                                            </label>
                                            <input type="text" required placeholder="e.g Microsoft" className="form-name" autoComplete="given-skills" value={skills} onChange={e => setSkills(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="level-skills-full-fields">
                                        <div className="level-skills-field">
                                            <label>
                                                Level:
                                            </label>
                                            <div className="level-skills-align">
                                                <input type="range" id="levelSKills" min="0" max="100" list="markers" step="25" className="form-name" autoComplete="off" value={rangeValue} onChange={handleRangeChange}/>
                                                <div className="level-text-container">
                                                    <label for="levelSkill" className="level-text-label">{text}</label>
                                                </div>
                                                <datalist id="markers">
                                                    <option value="Beginner" label="Beginner"></option>
                                                    <option value="Moderate" label="Moderate"></option>
                                                    <option value="Skillful" label="Skillful"></option>
                                                    <option value="Experienced" label="Experienced"></option>
                                                    <option value="Expert" label="Expert"></option>
                                                </datalist>
                                            </div>
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

export default Skills