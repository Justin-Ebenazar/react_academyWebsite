import './styleForm.css';
import piano from '../../assets/formImages/piano.jpg';
import guitar from '../../assets/formImages/guitar.jpg';
import keyboard from '../../assets/formImages/musicalKeyboard.jpg';
// import vocal from '../../assets/formImages/musicalKeyboard.jpg';
import CustomSelect from './CustomSelectElements/CustomSelect';
import React, { useState, useEffect } from 'react'; // Ensure useEffect is imported

function Styleform({ closeForm, course }) {
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [age,setAge]=useState('');
    // Initialize state for instrument, genre, mode, plan, and level
    const [level, setLevel] = useState('');
    const [instrument, setInstrument] = useState(course ? course : '');
    const [genre, setGenre] = useState('');
    const [mode, setMode] = useState('');
    const [plan, setPlan] = useState('');

    let music;
    if(course === 'piano')
        music=piano;
    else if(course === 'keyboard')
        music = keyboard;
    else if(course === 'guitar')
        music = guitar;
    else
        console.log(123);


    const instrumentOptions = [
        { value: 'keyboard', label: 'Keyboard' },
        { value: 'piano', label: 'Piano' },
        { value: 'guitar', label: 'Guitar' },
        { value: 'vocal', label: 'Vocal' },
    ];

    const genreOptions = [ // Original full list of genre options
        { value: 'carnatic', label: 'Carnatic' },
        { value: 'western', label: 'Western' },
    ];

    // New state to hold the currently available genre options
    const [filteredGenreOptions, setFilteredGenreOptions] = useState(genreOptions);

    // Effect hook to update filteredGenreOptions whenever 'instrument' changes
    useEffect(() => {
        if (instrument === 'guitar' || instrument === 'vocal') {
            // If instrument is guitar or vocal, only show 'Carnatic'
            setFilteredGenreOptions([{ value: 'carnatic', label: 'Carnatic' }]);
            // Optional: If 'Western' was selected, reset 'genre' to avoid an invalid selection
            if (genre === 'western') {
                setGenre('');
            }
        }
        else if (instrument === 'piano') {
            // If instrument is guitar or vocal, only show 'Carnatic'
            setFilteredGenreOptions([{ value: 'western', label: 'Western' }]);
            // Optional: If 'Western' was selected, reset 'genre' to avoid an invalid selection
            if (genre === 'western') {
                setGenre('');
            }
        } else {
            // Otherwise, show all original genre options
            setFilteredGenreOptions(genreOptions);
        }
    }, [instrument, genre]); // Depend on 'instrument' and 'genre' to trigger updates

    const modeOptions = [
        { value: 'online', label: 'Online' },
        { value: 'offline', label: 'Offline' },
    ];

    const planOptions = [
        { value: '4 class', label: '4 Classes' },
        { value: '6 class', label: '6 Classes' },
    ];

    const levelOptions = [
        { value: 'beginner', label: 'Novice Learner' },
        { value: 'intermediate', label: 'I know a bit' },
        { value: 'advanced', label: 'Seeking Advanced Study' }
    ];
    //form submit to gfrmo

    const handleSubmit = () => {
        if (!name || !contact || !age || !level || !instrument || !genre || !mode  || !plan) {
            alert("Please fill in all details before submitting!");
        } else {
            const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSccXeiW69ORgmLl7LDfbTxjOQQDFwqIaLPxKQyd0hculcIWXw/formResponse";
            
            // Create a form data object
            const formData = new FormData();
            formData.append("entry.1963676883", name);
            formData.append("entry.1985378627", contact);
            formData.append("entry.1456560257", age);
            formData.append("entry.1086088657", level);
            formData.append("entry.29268960", instrument);
            formData.append("entry.2070950819", genre);
            formData.append("entry.707292342", mode);
            formData.append("entry.751630101", plan);
            
            fetch(googleFormURL, {
            method: "POST",
            body: formData,
            })
            .then(() => alert("Form submitted successfully!"))
            .catch(() => alert("Form submitted successfully!"));
            closeForm(false); // Close the form after submission
        }
        };


    return (
        <>
            <div className="form-container">
                <div className="image-section-form">
                    <img src={music} alt="Music" />
                </div>
                <div className="form-section" >
                    <div className="form-header">
                        <h2>Music Class Registration</h2>
                        <button className="close-button" onClick={() => closeForm(false)}>
                            <p>&times;</p>
                        </button>
                    </div>
                    <div className="form-section-contents">
                        <div className="form-section-left">
                            <input type="text" name="studentName" placeholder="Student Name" onChange={(e) => setName(e.target.value)} />
                            <input type="text" name="contactNumber" placeholder="Contact Number" onChange={(e) => setContact(e.target.value)} />
                            <input type="number" name="age" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
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
                                options={filteredGenreOptions} // Use the filtered options here
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
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default Styleform;