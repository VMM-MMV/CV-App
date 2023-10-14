import React, { useState } from 'react';
import axios from 'axios';

function Skills() {
    const [skills, setSkills] = useState('');
    const [levelSkills, setLevelSkills] = useState('');  

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!skills || !levelSkills) {
            alert('Please fill out all fields.');
            return;
        }
        
        try {
            await axios.post('http://localhost:8080/addPerson', {skills, levelSkills});
            alert('Person added successfully!');
            setSkills('');
            setLevelSkills('');
        } catch (error) {
            alert('Error adding person: ' + error);
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
                                <form onSubmit={handleSubmit}>
                                    <div className="skills-full-fields">
                                        <div className="skills-field">
                                            <label>
                                                Skills:
                                            </label>
                                            <input type="text" placeholder="e.g Microsoft" className="form-name" autoComplete="given-skills" value={skills} onChange={e => setSkills(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="level-skills-full-fields">
                                        <div className="level-skills-field">
                                            <label for="levelSkill">
                                                Level:
                                            </label>
                                            <input type="range" id="levelSKills" min="0" max="100" list="markers" step="25" className="form-name" autoComplete="off" value={levelSkills} onChange={e => setLevelSkills(e.target.value)}/>
                                            <datalist id="markers">
                                                <option value="Beginner" label="Beginner"></option>
                                                <option value="Moderate" label="Moderate"></option>
                                                <option value="Skillful" label="Skillful"></option>
                                                <option value="Experienced" label="Experienced"></option>
                                                <option value="Expert" label="Expert"></option>
                                            </datalist>
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