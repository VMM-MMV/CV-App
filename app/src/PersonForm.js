import React, { useState } from 'react';

function PersonForm({ onDataCollected, data }) {

    const [name, setName] = useState(data.name || '');
    const [lastname, setLastname] = useState(data.lastname || '');
    const [day, setDay] = useState(data.day || '');
    const [month, setMonth] = useState(data.month || '');
    const [year, setYear] = useState(data.year || '');
    const [sex, setSex] = useState(data.sex || '');
    const [city, setCity] = useState(data.city || '');
    const [email, setEmail] = useState(data.email || '');
    const [hasKids, setHasKids] = useState(data.hasKids || '');
    const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber || '');
    const [countryCode, setCountryCode] = useState(data.countryCode || '');
    const [address, setAddress] = useState(data.address || '');
    const [nationality, setNationality] = useState(data.nationality || '');
    const [civilStatus, setCivilStatus] = useState(data.civilStatus || '');

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

    const handleAddPersonData = () => {
        if ( name && lastname && address && nationality && civilStatus && day && month && year && sex && city && email && hasKids && phoneNumber && countryCode) {
            const birthdate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const personData = {
                name,
                lastname,
                address,
                nationality,
                civilStatus,
                birthdate,
                city,
                sex,
                email,
                hasKids,
                phoneNumber,
                countryCode,
            };

            onDataCollected('person', personData);

            setName('');
            setLastname('');
            setAddress('');
            setNationality('');
            setCivilStatus('');
            setDay('');
            setMonth('');
            setYear('');
            setSex('');
            setCity('');
            setEmail('');
            setCountryCode('');
            setPhoneNumber('');
            setHasKids('');
        } else {
            alert('Please fill out all fields.');
        }
    };


    return (
        <div id="parent">
            <div className="aside-right">
                <div className="container">
                    <div className="main-page">
                        <div className="space"> 
                            <h1 className="page-title">Let's start to create your CV together!</h1>
                            <h2 className="sub-title">Type the all necessary information about your personality in order to contact you soon!</h2>
                            <div className="form">
                                <form onSubmit={handleAddPersonData}>
                                    <div className="name-full-fields">
                                        <div className="first-name-field" name="enter-first-name">
                                            <label>
                                                First Name:
                                            </label>
                                            <input type="text" required placeholder="e.g Michael" className="form-name" autocomplete="name" value={name} onChange={e => setName(e.target.value)}/>
                                        </div>
                                        <div className="last-name-field" name="enter-last-name">
                                            <label>
                                                Last Name:
                                            </label>
                                            <input type="text" required placeholder="e.g Carlson" className="form-name" autocomplete="family-name" value={lastname} onChange={e => setLastname(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="address-full-fields">
                                        <div className="address-field">
                                            <label>
                                                Address:
                                            </label>
                                            <input type="text" placeholder="e.g str.Banulescu Bodoni 12" className="form-name" autocomplete="street-address" value={address} onChange={e => setAddress(e.target.value)}/>
                                        </div>
                                        <div className="city-field">
                                            <label>
                                                City:
                                            </label>
                                            <select className="form-name" value={city} onChange={e => setCity(e.target.value)}>
                                                <option value="">Select city</option>
                                                {cities.map(c => <option key={c} value={c}>{c}</option>)}
                                            </select>
                                        </div>
                                        <div className="nationality-field">
                                            <label>
                                                Nationality:
                                            </label>
                                            <input type="text" placeholder="e.g Moldovan" className="form-name" autocomplete="nationality" value={nationality} onChange={e => setNationality(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="coming-from-fields">
                                        <div className="date-birth-sex-field">
                                            <div className="date-birth-field">
                                                <div className="date-selector">
                                                <label> 
                                                    Date of Birth:
                                                </label>
                                                    <select value={day} className="form-name" onChange={e => setDay(e.target.value)}>
                                                        <option value="">Day</option>
                                                        {days.map(d => <option key={d} value={d}>{d}</option>)}
                                                    </select>
                                                </div>
                                                <div className="month-selector">
                                                <label></label>
                                                    <select value={month} className="form-name" onChange={e => setMonth(e.target.value)}>
                                                        <option value="">Month</option>
                                                        {months.map(m => <option key={m} value={m}>{m}</option>)}
                                                    </select>
                                                </div>
                                                <div className="year-selector">
                                                <label></label>
                                                <select value={year} className="form-name" onChange={e => setYear(e.target.value)}>
                                                    <option value="">Year</option>
                                                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                </select>
                                                </div>  
                                            </div>
                                        </div>
                                        <div className="sex-status-field">
                                            <label>
                                                Sex:
                                            </label>
                                            <select value={sex} className="form-name" onChange={e => setSex(e.target.value)}>
                                                <option value="">Select gender</option>
                                                <option value="MALE">Male</option>
                                                <option value="FEMALE">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="family-status-full-fields">
                                        <div className="civil-status-field">
                                            <label>
                                                Civil Status:
                                            </label>
                                            <select className="form-name" value={civilStatus} onChange={e => setCivilStatus(e.target.value)}>
                                                <option value="">Select status</option>
                                                <option value="UNMARRIED">Unmarried</option>
                                                <option value="MARRIED">Married</option>
                                                <option value="DIVORCED">Divorced</option>
                                                <option value="WIDOWED">Widowed</option>
                                            </select>
                                        </div>
                                        <div className="kids-status-field">
                                            <label>
                                                Kids:
                                            </label>
                                            <select className="form-name" value={hasKids} onChange={e => setHasKids(e.target.value)}>
                                                <option value="">Select option</option>
                                                <option value="YES">Yes</option>
                                                <option value="NO">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="email-number-full-fields">
                                        <div className="email-address-field">
                                            <label>Email:</label>
                                            <input type="email" required placeholder="Enter email" className="form-name" autocomplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div className="phone-number-field">
                                            <div className="phone-select-container">
                                            <label>
                                                Phone Number:
                                            </label>
                                                <select className="form-name" value={countryCode} onChange={e => setCountryCode(e.target.value)}>
                                                <option value="">Select Code</option>
                                                {countries.map(country => (
                                                    <option key={country.code} value={country.code}>
                                                    {country.name} ({country.code})
                                                    </option>
                                                ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="phone-field">
                                            <input type="text" required placeholder="Phone Number" className="form-name" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
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
