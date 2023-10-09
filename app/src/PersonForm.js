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
        "Cădăr-Lunga", "Cimișlia", "Șoldănești", "Ștefan Vodă", "Ialoveni", "La Sasa Acasa"
    ];

    const countries = [
        { name: 'Moldova', code: '+373' },
        { name: 'Romania', code: '+40' },
        { name: 'Japan', code: '+81' },
        { name: 'United States', code: '+1' },
        { name: 'United Kingdom', code: '+44' },
        { name: 'Canada', code: '+1' },
        { name: 'Germany', code: '+49' },
        { name: 'France', code: '+33' },
        { name: 'Australia', code: '+61' },
        { name: 'China', code: '+86' },
        { name: 'Brazil', code: '+55' },
        { name: 'India', code: '+91' },
        { name: 'South Korea', code: '+82' },
        { name: 'Spain', code: '+34' },
        { name: 'Italy', code: '+39' },
        { name: 'Mexico', code: '+52' },
        { name: 'Netherlands', code: '+31' },
        { name: 'Sweden', code: '+46' },
        { name: 'Switzerland', code: '+41' },
        { name: 'Singapore', code: '+65' },
        { name: 'United Arab Emirates', code: '+971' },
        { name: 'Saudi Arabia', code: '+966' },
        { name: 'South Africa', code: '+27' },
        { name: 'Russia', code: '+7' },
        { name: 'Argentina', code: '+54' },
        { name: 'New Zealand', code: '+64' },
        { name: 'Ireland', code: '+353' },
        { name: 'Austria', code: '+43' },
        { name: 'Belgium', code: '+32' },
        { name: 'Norway', code: '+47' },
        { name: 'Denmark', code: '+45' },
        { name: 'Greece', code: '+30' },
        { name: 'Turkey', code: '+90' },
        { name: 'Egypt', code: '+20' },
        { name: 'Thailand', code: '+66' },
        { name: 'Malaysia', code: '+60' },
        { name: 'Vietnam', code: '+84' },
        { name: 'Indonesia', code: '+62' },
        { name: 'Philippines', code: '+63' },
        { name: 'Israel', code: '+972' },
        { name: 'Portugal', code: '+351' },
        { name: 'Poland', code: '+48' },
        { name: 'Hungary', code: '+36' },
        { name: 'Czech Republic', code: '+420' },
        { name: 'Chile', code: '+56' },
        { name: 'Peru', code: '+51' },
        { name: 'Colombia', code: '+57' },
        { name: 'Nigeria', code: '+234' },
        { name: 'Kenya', code: '+254' },
        { name: 'South Sudan', code: '+211' },
        { name: 'Ethiopia', code: '+251' },
        { name: 'Morocco', code: '+212' },
        { name: 'Tunisia', code: '+216' },
        { name: 'Algeria', code: '+213' },
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
        <div id="parent">
            <aside class="aside-nav">
                <header class="App-header">
                    <div class="page-header">
                        <a href="" class="logo-header">Small Asses</a>
                    </div>
                </header>
                <div class="progress-wrapper progressbar-vertical" role="navigation" aria-label="Progress bar">

                </div>
                <footer class="footer footer-aside">

                </footer>
            </aside>
            <div class="aside-right">
                <div class="container">
                    <div class="main-page">
                        <div class="space"> 
                            <h1 class="page-title">Let's start to create your CV together!</h1>
                            <h2 class="sub-title">Type the all necessary information about your personality in order to contact you soon!</h2>
                            <div class="form">
                                <form onSubmit={handleSubmit}>
                                    <div class="name-full-fields">
                                        <div class="first-name-field" name="enter-first-name">
                                            <label class>
                                                First Name:
                                            </label>
                                            <input type="text" placeholder="e.g Michael" class="form-name" autocomplete="given-name" value={name} onChange={e => setName(e.target.value)}/>
                                        </div>
                                        <div class="last-name-field">
                                            <label class>
                                                Last Name:
                                            </label>
                                            <input type="text" placeholder="e.g Carlson" class="form-name" autocomplete="family-name" value={lastname} onChange={e => setLastname(e.target.value)} style={{ height: "40px", padding: "10px" }} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonForm;


/*
</div>
<div class="email-field">
<input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} style={{ height: "40px", padding: "10px" }} />
</div>*/

/*Date of Birth:<br />
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

                                    <button type="submit">Add</button>*/