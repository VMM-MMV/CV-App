import React, { useState } from 'react';
import axios from 'axios';

function PersonForm() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [sex, setSex] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [hasKids, setHasKids] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');


    const cities = [
        "Chișinău", "Bălți", "Bender", "Briceni", "Vadul lui Vodă", "Vulcănești", "Glodeni",
        "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Cahul", "Călărași", "Cantemir",
        "Căușeni", "Comrat", "Criuleni", "Leova", "Leușeni", "Nisporeni", "Anenii Noi",
        "Ocnița", "Orhei", "Rezina", "Rîbnița", "Rîșcani", "Soroca", "Strășeni", "Sîngerei",
        "Taraclia", "Telenești", "Tiraspol", "Ungheni", "Fălești", "Florești", "Hîncești",
        "Cădăr-Lunga", "Cimișlia", "Șoldănești", "Ștefan Vodă", "Ialoveni"
    ];

    const countries = [
        {name: 'Moldova', code: '+373'},
        {name: 'Romania', code: '+40'},
        {name: 'Japan', code: '+81'}
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !lastname || !day || !month || !year || !sex || !city || !email || !hasKids || !phoneNumber || !countryCode) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            const birthdate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            await axios.post('http://localhost:8080/addPerson', { name, lastname, birthdate, city, sex , email, hasKids, phoneNumber, countryCode});
            alert('Person added successfully!');
            setName('');
            setLastname('');
            setDay('');
            setMonth('');
            setYear('');
            setSex('');
            setCity('');
            setEmail('');
            setCountryCode('');
            setPhoneNumber('');
            setHasKids('');
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
                <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} /><br />

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

                Sex:<br />
                <select value={sex} onChange={e => setSex(e.target.value)}>
                    <option value="">Select gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select><br />

                Has Kids:<br />
                <select value={hasKids} onChange={e => setHasKids(e.target.value)}>
                    <option value="">Select Option</option>
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                </select><br />

                Number:<br />
                <select value={countryCode} onChange={e => setCountryCode(e.target.value)}>
                    <option value="">Select Country</option>
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>
                            {country.name} ({country.code})
                        </option>
                    ))}
                </select>
                <input 
                    type="text" 
                    value={phoneNumber} 
                    onChange={e => setPhoneNumber(e.target.value)} 
                    placeholder="Phone Number"
                />
                <br />

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default PersonForm;
