import React, { useState } from 'react';

function Hobby({ onDataCollected }) {
    const [hobby, setHobby] = useState('');

    const handleAddHobby = () => {
        if (hobby) {
            const hobbyData = {
              hobby,
            };
      
            onDataCollected('hobby', hobbyData);
      
            setHobby('');
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
                            <h1 className="page-title">Tell us about your hobbies!</h1>
                            <h2 className="sub-title">Type all your hobbies even the most secret ones.</h2>
                            <div className="form6">
                                <div className="hobby-full-fields">
                                    <div className="hobby-field">
                                        <label>
                                            Hobby:
                                        </label>
                                        <input type="text" placeholder="e.g Listening to music, Coding all day all night" className="form-name" autoComplete="hobby" value={hobby} onChange={e => setHobby(e.target.value)}/>
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

export default Hobby