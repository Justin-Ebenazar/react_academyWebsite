import './styleForm.css';
import music from '../../assets/formImages/guitar.jpg';
import CustomSelect from './CustomSelectElements/CustomSelect';
import React, { useState } from 'react';

function Styleform(){

    const [instrument, setInstrument] = useState('');
    const [genre, setGenre] = useState('');
    const [mode, setMode] = useState('');
    const [plan, setPlan] = useState('');
    const [level, setLevel]= useState('');

    const instrumentOptions = [
        { value: 'keyboard', label: 'Keyboard' },
        { value: 'piano', label: 'Piano' },
        { value: 'guitar', label: 'Guitar' },
        { value: 'vocal', label: 'Vocal' },
    ];

    const genreOptions=[
        {value: 'carnatic', label: 'Carnatic'},
        {value: 'western', label: 'Western'},
    ];

    const modeOptions=[
        {value: 'online', label: 'Online'},
        {value: 'offline', label: 'Offline'},
    ];

    const planOptions=[
        {value: '4 class', label: '4 Classes'},
        {value: '6 class', label: '6 Classes'},
    ];

    const levelOptions=[
        {value: 'beginner',label: 'Novice Learner'},
        {value: 'intermediate',label :'I know a bit'},
        {value: 'advanced',label: 'Seeking Advanced Study'}
    ];

    return(
        <>
        <div className="form-container">
            <div className="image-section">
                <img src={music} alt="Music" />
            </div>
            <div className="form-section" >
                <div className="form-header">
                    <h2>Music Class Registration</h2>
                    <button className="close-button">
                        <p>&times;</p>
                    </button>
                </div>
                <div className="form-section-contents">
                    <div className="form-section-left">
                        <input type="text" name="studentName" placeholder="Student Name"  required />
                        <input type="text" name="contactNumber" placeholder="Contact Number"  required />
                        <input type="number" name="age" placeholder="Age"  required />
                        <CustomSelect
                            options={levelOptions}
                            placeholder="Level"
                            onSelect={setLevel}
                            initialValue={level}
                            />
                    </div>
                    <div className="form-section-right">
                        
                        <CustomSelect
                                options={instrumentOptions}
                                placeholder="Select Instrument"
                                onSelect={setInstrument} // This callback updates the instrument state
                                initialValue={instrument} // Pass current state for display
                            />

                        <CustomSelect
                                options={genreOptions}
                                placeholder="Select Genre"
                                onSelect={setGenre} // This callback updates the genre state
                                initialValue={genre} // Pass current state for display
                            />

                        <CustomSelect
                                options={modeOptions}
                                placeholder="Select Mode"
                                onSelect={setMode} // This callback updates the mode state
                                initialValue={mode} // Pass current state for display
                            />

                        <CustomSelect
                                options={planOptions}
                                placeholder="Select Plan"
                                onSelect={setPlan} // This callback updates the plan state
                                initialValue={plan} // Pass current state for display
                            />
                    </div>
                </div>
                <button type="button">Submit</button>
            </div>
        </div>
        </>
    );
}

export default Styleform;