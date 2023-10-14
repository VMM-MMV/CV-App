import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';


function Experience() {

    const handleBoldClick = () => {
        setAchievementsDescription(RichUtils.toggleInlineStyle(achievementsDescription, 'BOLD'));
      };
    
      const handleItalicClick = () => {
        setAchievementsDescription(RichUtils.toggleInlineStyle(achievementsDescription, 'ITALIC'));
      };
    
      const handleUnderlineClick = () => {
        setAchievementsDescription(RichUtils.toggleInlineStyle(achievementsDescription, 'UNDERLINE'));
      };
    
      const handleBulletListClick = () => {
        setAchievementsDescription(RichUtils.toggleBlockType(achievementsDescription, 'unordered-list-item'));
      };

    const [achievementsDescription, setAchievementsDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!achievementsDescription) {
            alert('Please fill out all fields.');
            return;
        }
        
        try {
            await axios.post('http://localhost:8080/addPerson', {achievementsDescription});
            alert('Person added successfully!');
            setAchievementsDescription('');
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
                            <h1 className="page-title">Tell us about your achievements!</h1>
                            <h2 className="sub-title">Type all information about your most recent achievements.</h2>
                            <div className="form7">
                                <form onSubmit={handleSubmit}>
                                    <div className="achievements-full-fields">
                                        <div className="achievements-field">
                                            <label>
                                                Achievements description:
                                            </label>
                                            <ReactQuill
                                                className="form-name"
                                                value={achievementsDescription}
                                                onChange={setAchievementsDescription}
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