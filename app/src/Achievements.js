import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Experience({ onDataCollected }) {

    const [achievementsDescription, setAchievementsDescription] = useState('');

    const handleAddAchievements = () => {

        if (achievementsDescription) {
            const achievementsData = {
                achievementsDescription
            };

            onDataCollected('achievements', achievementsData);

            setAchievementsDescription('');
        } else {
            alert('Please fill out all fields.');
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
                                <div className="achievements-full-fields">
                                    <div className="achievements-field">
                                        <label>
                                            Achievements description:
                                        </label>
                                        <ReactQuill
                                            className="form-name"
                                            value={achievementsDescription}
                                            onChange={setAchievementsDescription}
                                            placeholder="A went to Hackathon with my lovely Team and had been coding all night long on the project..."
                                        />
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>  
            </div>
        </div>
    )

}

export default Experience