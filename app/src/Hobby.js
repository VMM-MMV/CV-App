import React, { useState } from 'react';
import axios from 'axios';

function Hobby() {
    const [hobby, setHobby] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!hobby) {
            alert('Please fill out all fields.');
            return;
        }
        
        try {
            await axios.post('http://localhost:8080/addPerson', {hobby});
            alert('Person added successfully!');
            setHobby('');
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
                            <h1 className="page-title">Tell us about your hobbies!</h1>
                            <h2 className="sub-title">Type all your hobbies even the most secret ones.</h2>
                            <div className="form6">
                                <form onSubmit={handleSubmit}>
                                    <div className="hobby-full-fields">
                                        <div className="hobby-field">
                                            <label>
                                                Hobby:
                                            </label>
                                            <input type="text" placeholder="e.g Listening to music, Coding all day all night" className="form-name" autoComplete="hobby" value={hobby} onChange={e => setHobby(e.target.value)}/>
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

export default Hobby