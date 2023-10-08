import React, { useState } from 'react';
import axios from 'axios';

function PersonForm() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [city, setCity] = useState('');

    const cities = [
        "Chișinău", "Bălți", "Bender", "Briceni", "Vadul lui Vodă", "Vulcănești", "Glodeni",
        "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Cahul", "Călărași", "Cantemir",
        "Căușeni", "Comrat", "Criuleni", "Leova", "Leușeni", "Nisporeni", "Anenii Noi",
        "Ocnița", "Orhei", "Rezina", "Rîbnița", "Rîșcani", "Soroca", "Strășeni", "Sîngerei",
        "Taraclia", "Telenești", "Tiraspol", "Ungheni", "Fălești", "Florești", "Hîncești",
        "Cădăr-Lunga", "Cimișlia", "Șoldănești", "Ștefan Vodă", "Ialoveni"
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const birthdate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            await axios.post('http://localhost:8080/addPerson', { name, lastname, birthdate, city });
            alert('Person added successfully!');
            setName('');
            setLastname('');
            setDay('');
            setMonth('');
            setYear('');
            setCity('');
        } catch (error) {
            alert('Error adding person: ' + error);
        }
    };

    return (
        <div>
            <h2>Add Person</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} /><br />
                <input type="text" placeholder="Enter lastname" value={lastname} onChange={e => setLastname(e.target.value)} /><br />
                Date of Birth:<br />
                <select value={day} onChange={e => setDay(e.target.value)}>
                    <option value="">Day</option>
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <select value={month} onChange={e => setMonth(e.target.value)}>
                    <option value="">Month</option>
                    {months.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select value={year} onChange={e => setYear(e.target.value)}>
                    <option value="">Year</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select><br />
                City:<br />
                <select value={city} onChange={e => setCity(e.target.value)}>
                    <option value="">Select a city</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select><br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default PersonForm;
