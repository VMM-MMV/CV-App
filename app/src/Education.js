import React, { useState } from 'react';
import axios from 'axios';

function Education() {
    const [education, setEducation] = useState('');
    const [citySchool, setCitySchool] = useState('');
    const [school, setSchool] = useState('');
    const [monthStart, setMonthStart] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [monthEnd, setMonthEnd] = useState('');
    const [yearEnd, setYearEnd] = useState('');

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!education|| !citySchool || !school || !monthStart || !yearStart || !monthEnd || !yearEnd) {
            alert('Please fill out all fields.');
            return;
        }
        
        try {
            const startDateStudy = `${yearStart}-${String(monthStart).padStart(2, '0')}`;
            const endDateStudy = `${yearEnd}-${String(monthEnd).padStart(2, '0')}`;
            await axios.post('http://localhost:8080/addPerson', {education, citySchool, school, startDateStudy, endDateStudy});
            alert('Person added successfully!');
            setEducation('');
            setCitySchool('');
            setSchool('');
            setMonthStart('');
            setYearStart('');
            setMonthEnd('');
            setYearEnd('');
        } catch (error) {
            alert('Error adding person: ' + error);
        }
    }

    return(
        <div id="parent">
            <div className="aside-right">
                <div className="container">
                    <div className="main-page">
                        <div className="space"> 
                            <h1 className="page-title">Tell us about your education!</h1>
                            <h2 className="sub-title">Type all necessary information about school, university where you studied. List them all.</h2>
                            <div className="form2">
                                <form onSubmit={handleSubmit}>
                                    <div className="degree-city-full-fields">
                                        <div className="degree-field">
                                            <label>
                                                Degree:
                                            </label>
                                            <input type="text" placeholder="e.g Master of Economics" className="form-name" autoComplete="given-educcation-degree" value={education} onChange={e => setEducation(e.target.value)}/>
                                        </div>
                                        <div className="city-field">
                                            <label>
                                                City/Town:
                                            </label>
                                            <input type="text" placeholder="e.g Chisinau" className="form-name" autoComplete="given-city" value={citySchool} onChange={e => setCitySchool(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="school-full-fields">
                                        <div className="school-field">
                                            <label>
                                                School:
                                            </label>
                                            <input type="text" placeholder="e.g Universitatea Tehnica" className="form-name" autoComplete="given-school" value={school} onChange={e => setSchool(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="study-fields">
                                        <div className="date-study-full-field">
                                            <div className="date-study-field">
                                                <div className="month-selector">
                                                <label>
                                                    Start Date:
                                                </label>
                                                    <select value={monthStart} className="form-name" onChange={e => setMonthStart(e.target.value)}>
                                                        <option value="">Month</option>
                                                        {months.map(m => <option key={m} value={m}>{m}</option>)}
                                                    </select>
                                                </div>
                                                <div className="year-selector">
                                                <label></label>
                                                <select value={yearStart} className="form-name" onChange={e => setYearStart(e.target.value)}>
                                                    <option value="">Year</option>
                                                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                </select>
                                                </div>  
                                                <div className="month-selector">
                                                <label>
                                                    End Date:
                                                </label>
                                                    <select value={monthEnd} className="form-name" onChange={e => setMonthEnd(e.target.value)}>
                                                        <option value="">Month</option>
                                                        {months.map(m => <option key={m} value={m}>{m}</option>)}
                                                    </select>
                                                </div>
                                                <div className="year-selector">
                                                <label></label>
                                                <select value={yearEnd} className="form-name" onChange={e => setYearEnd(e.target.value)}>
                                                    <option value="">Year</option>
                                                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                </select>
                                                </div>  
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

export default Education