import React, { useState } from 'react';
import axios from 'axios';

function PersonForm() {
  const [name, setName] = useState(''); // state for name input field

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/addPerson', { name });
      alert('Person added successfully!');
      setName('');  // Clear the input field
    } catch (error) {
      alert('Error adding person: ' + error, error);
    }
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default PersonForm;
