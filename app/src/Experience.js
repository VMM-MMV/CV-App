import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';


function Experience() {

    const handleBoldClick = () => {
        setJobDescription(RichUtils.toggleInlineStyle(jobDescription, 'BOLD'));
      };
    
      const handleItalicClick = () => {
        setJobDescription(RichUtils.toggleInlineStyle(jobDescription, 'ITALIC'));
      };
    
      const handleUnderlineClick = () => {
        setJobDescription(RichUtils.toggleInlineStyle(jobDescription, 'UNDERLINE'));
      };
    
      const handleBulletListClick = () => {
        setJobDescription(RichUtils.toggleBlockType(jobDescription, 'unordered-list-item'));
      };
      

    const [titleJob, setTitleJob] = useState('');
    const [cityJob, setCityJob] = useState('');
    const [employer, setEmployer] = useState('');
    const [monthJobStart, setMonthJobStart] = useState('');
    const [yearJobStart, setYearJobStart] = useState('');
    const [monthJobEnd, setMonthJobEnd] = useState('');
    const [yearJobEnd, setYearJobEnd] = useState('');

    const [jobDescription, setJobDescription] = useState('');

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!titleJob|| !cityJob || !employer || !monthJobStart || !yearJobStart || !monthJobEnd || !yearJobEnd || !jobDescription) {
            alert('Please fill out all fields.');
            return;
        }
        
        try {
            const startDateJob = `${yearJobStart}-${String(monthJobStart).padStart(2, '0')}`;
            const endDateJob = `${yearJobEnd}-${String(monthJobEnd).padStart(2, '0')}`;
            await axios.post('http://localhost:8080/addPerson', {titleJob, cityJob, employer, startDateJob, endDateJob, jobDescription});
            alert('Person added successfully!');
            setTitleJob('');
            setCityJob('');
            setEmployer('');
            setMonthJobStart('');
            setYearJobStart('');
            setMonthJobEnd('');
            setYearJobEnd('');
            setJobDescription('');
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
                            <h1 className="page-title">Tell us about your experience!</h1>
                            <h2 className="sub-title">Type all necessary information about your most recent job experience.</h2>
                            <div className="form3">
                                <form onSubmit={handleSubmit}>
                                    <div className="job-city-full-fields">
                                        <div className="job-field">
                                            <label>
                                                Job Title:
                                            </label>
                                            <input type="text" placeholder="e.g HR Manager" className="form-name" autoComplete="given-job-title" value={titleJob} onChange={e => setTitleJob(e.target.value)}/>
                                        </div>
                                        <div className="city-field">
                                            <label>
                                                City/Town:
                                            </label>
                                            <input type="text" placeholder="e.g Chisinau" className="form-name" autoComplete="given-city-job" value={cityJob} onChange={e => setCityJob(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="employer-full-fields">
                                        <div className="employer-field">
                                            <label>
                                                Employer:
                                            </label>
                                            <input type="text" placeholder="e.g Endava" className="form-name" autoComplete="given-employer" value={employer} onChange={e => setEmployer(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="study-fields">
                                        <div className="date-study-full-field">
                                            <div className="date-study-field">
                                                <div className="month-selector">
                                                <label>
                                                    Start Date:
                                                </label>
                                                    <select value={monthJobStart} className="form-name" onChange={e => setMonthJobStart(e.target.value)}>
                                                        <option value="">Month</option>
                                                        {months.map(m => <option key={m} value={m}>{m}</option>)}
                                                    </select>
                                                </div>
                                                <div className="year-selector">
                                                <label></label>
                                                <select value={yearJobStart} className="form-name" onChange={e => setYearJobStart(e.target.value)}>
                                                    <option value="">Year</option>
                                                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                </select>
                                                </div>  
                                                <div className="month-selector">
                                                <label>
                                                    End Date:
                                                </label>
                                                    <select value={monthJobEnd} className="form-name" onChange={e => setMonthJobEnd(e.target.value)}>
                                                        <option value="">Month</option>
                                                        {months.map(m => <option key={m} value={m}>{m}</option>)}
                                                    </select>
                                                </div>
                                                <div className="year-selector">
                                                <label></label>
                                                <select value={yearJobEnd} className="form-name" onChange={e => setYearJobEnd(e.target.value)}>
                                                    <option value="">Year</option>
                                                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                </select>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-description-fields">
                                        <div className="job-box-field">
                                            <label>
                                                Description:
                                            </label>
                                            <ReactQuill
                                                className="form-name"
                                                value={jobDescription}
                                                onChange={setJobDescription}
                                            />
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

export default Experience