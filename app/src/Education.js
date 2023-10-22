import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDateStudy: '',
            endDateStudy: '',
            monthStart: '',
            monthEnd: '',
            yearStart: '',
            yearEnd: '',
        }
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }
    
    handleMonthStartChange = (e) => {
        this.setState({ monthStart: e.target.value });
    }
    
    handleMonthEndChange = (e) => {
        this.setState({ monthEnd: e.target.value });
    }
    
    handleYearStartChange = (e) => {
        this.setState({ yearStart: e.target.value });
    }

    handleYearEndChange = (e) => {
        this.setState({ yearEnd: e.target.value });
    }

    handleData() {
        const { monthStart, monthEnd, yearStart, yearEnd } = this.state;
        const startDateStudy = `${yearStart}-${String(monthStart).padStart(2, '0')}`;
        const endDateStudy = `${yearEnd}-${String(monthEnd).padStart(2, '0')}`;
        this.data.startDateStudy = startDateStudy; 
        this.data.endDateStudy = endDateStudy; 

        this.onDataCollected('education', this.data);

    }

    render () { 

        const months = Array.from({ length: 12 }, (_, i) => i + 1);
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

        return(
            <div id="parent">
                <div className="aside-right">
                    <div className="container">
                        <div className="main-page">
                            <div className="space"> 
                                <h1 className="page-title">Tell us about your education!</h1>
                                <h2 className="sub-title">Type all necessary information about school, university where you studied. List them all.</h2>
                                <div className="form2">
                                    <form>
                                        <div className="degree-city-full-fields">
                                            <div className="degree-field">
                                                <label>
                                                    Degree:
                                                </label>
                                                <input type="text" required placeholder="e.g Master of Economics" className="form-name" autoComplete="given-educcation-degree" value={this.data.education} onChange={e => this.data.education = e.target.value}/>
                                            </div>
                                            <div className="city-field">
                                                <label>
                                                    City/Town:
                                                </label>
                                                <input type="text" required placeholder="e.g Chisinau" className="form-name" autoComplete="given-city" value={this.data.citySchool} onChange={e => this.data.citySchool = e.target.value}/>
                                            </div>
                                        </div>
                                        <div className="school-full-fields">
                                            <div className="school-field">
                                                <label>
                                                    School:
                                                </label>
                                                <input type="text" required placeholder="e.g Universitatea Tehnica" className="form-name" autoComplete="given-school" value={this.data.school} onChange={e => this.data.school = e.target.value}/>
                                            </div>
                                        </div>
                                        <div className="study-fields">
                                            <div className="date-study-full-field">
                                                <div className="date-study-field">
                                                    <div className="month-selector">
                                                    <label>
                                                        Start Date:
                                                    </label>
                                                        <select value={this.state.monthStart} className="form-name" onChange={this.handleMonthStartChange}>
                                                            <option value="">Month</option>
                                                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="year-selector">
                                                    <label></label>
                                                    <select value={this.state.yearStart} className="form-name" onChange={this.handleYearStartChange}>
                                                        <option value="">Year</option>
                                                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                    </select>
                                                    </div>  
                                                    <div className="month-selector">
                                                    <label>
                                                        End Date:
                                                    </label>
                                                        <select value={this.state.monthEnd} className="form-name" onChange={this.handleMonthEndChange}>
                                                            <option value="">Month</option>
                                                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="year-selector">
                                                    <label></label>
                                                    <select value={this.state.yearEnd} className="form-name" onChange={this.handleYearEndChange}>
                                                        <option value="">Year</option>
                                                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                                                    </select>
                                                    </div>  
                                                </div>
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
}
    
export default Education;