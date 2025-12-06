{/* This function Diagnosis is an EMT assesment form that you fill out and it gives back suspected diagnosis*/}
import React, { use, useState } from 'react';
import '../style/chat.css'

function Diagnosis() {

    const [complaint, setComplaint] = useState("");
    const [chestPain, setChestPain] = useState("");
    const [breathing, setBreathing] = useState("");
    const [lung, setLung] = useState("");
    const [pulse, setPulse] = useState("");
    const [respiratoryRate, setRespiratoryRate] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [spo2, setSpo2] = useState("");
    const [skin, setSkin] = useState("");
    const [onset, setOnset] = useState("");
    const [symptoms, setSymptoms] = useState([]);
    const [sypWords, setSypWords] = useState([]);
    const [symIsOpen, setSymIsOpen] = useState(false);
    const [history, setHistory] = useState([]);
    const [historyWords, setHistoryWords] = useState([]);
    const [hisIsOpen, setHisIsOpen] = useState(false);
    const[pain, setPain] = useState("");
    const [quadrant, setQuadrant] = useState("");
    const [radiateBack, setRadiateBack] = useState("");
    const [numWeek, setNumWeek] = useState("");
    const [numPregnancy, setNumPregnancy] = useState("first");
    const [headPosition, setHeadPosition] = useState("");
    const [birthsNatural, setBirthsNatural] = useState("");
    const [gbs, setGbs] = useState("");
    const [numBabies, setNumBabies] = useState("");
    const [strokeScale, setStrokeScale] = useState("");
    const [bgl, setBgl] = useState("");


    {/* function to setSymptoms to value because needs to make new array with the past selected onse as well*/}
                    const handleCheckSym = (e) => {
                        const value = e.target.value
                        const word = e.target.parentElement.textContent.trim();
                        if (e.target.checked) {
                            setSymptoms(prev => [...prev, value]);
                            setSypWords(prev => [...prev, word]);
                        }else {
                            setSymptoms(prev => prev.filter(item => item !== value));
                            setSypWords(prev => prev.filter(item => item !== word));
                        }

                    }

    {/* function to setHistory to value because needs to make new array with the past selected onse as well and also setHistoryWords to new array with the past selected ones */}
                    const handleCheckHis = (e) => {
                        const value = e.target.value;
                        const word = e.target.parentElement.textContent.trim();

                        if (e.target.checked) {
                            setHistory(prev => [...prev, value]);
                            setHistoryWords(prev => [...prev, word]);
                        }else {
                            setHistory(prev.filter(item => item !== value));
                            setHistoryWords(prev.filter(item => item !== word));
                        }
                    }


    return (
            <div className="diagnosis-container">
            <div className="diagnosis-header">
                <h1>EMT Assessment Form</h1>
            </div>
            <form className="diagnosis-form">

                {/* Chief Complaint */}
                <div className="card">
                <h2 className="card-title">Chief Complaint</h2>
                <select
                    value={complaint}
                    name="chief_complaint"
                    onChange={(e) => setComplaint(e.target.value)}
                >
                    <option value="">Select Chief Complaint</option>
                    <option value="chest_pain">Chest Pain</option>
                    <option value="difficulty_breathing">Difficulty Breathing</option>
                    <option value="abdominal_pain">Abdominal Pain</option>
                    <option value="obgyn">OBGYN</option>
                    <option value="altered_mental_status">Altered Mental Status</option>
                    <option value="head_ache">Head Ache</option>
                    <option value="fever">Fever</option>
                    <option value="weak">Feeling Weak</option>
                </select>
                </div>

                {/* Conditional Sections Based on Chief Complaint */}
                {complaint === "chest_pain" && (
                <div className="card">
                    <h2 className="card-title">Chest Pain Type</h2>
                    <select
                    value={chestPain}
                    onChange={(e) => setChestPain(e.target.value)}
                    >
                    <option value="">Choose Type</option>
                    <option value="crushing">Crushing</option>
                    <option value="sharp">Sharp / Stabbing</option>
                    <option value="burning">Burning</option>
                    <option value="pressure">Pressure / Tightness</option>
                    </select>
                </div>
                )}

                {complaint === "abdominal_pain" && (
                <div className="card">
                    <h2 className="card-title">Abdominal Pain Details</h2>
                    <select value={quadrant} onChange={(e) => setQuadrant(e.target.value)}>
                    <option value="upper_right">Upper Right</option>
                    <option value="upper_left">Upper Left</option>
                    <option value="upper_middle">Upper Middle</option>
                    <option value="lower_right">Lower Right</option>
                    <option value="lower_left">Lower Left</option>
                    <option value="lower_middle">Lower Middle</option>
                    </select>

                    <select value={radiateBack} onChange={(e) => setRadiateBack(e.target.value)}>
                    <option value="">Radiate to Back?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    </select>
                </div>
                )}

                {complaint === "obgyn" && (
                <div className="card">
                    <h2 className="card-title">OBGYN Details</h2>
                    <select value={numWeek} onChange={(e) => setNumWeek(e.target.value)}>
                    <option value="first_trimester">0-13 Weeks</option>
                    <option value="second_trimester">14-27 Weeks</option>
                    <option value="third_trimester">28-35 Weeks</option>
                    <option value="end_third_trimester">36-40 Weeks</option>
                    </select>

                    <select value={numPregnancy} onChange={(e) => setNumPregnancy(e.target.value)}>
                    <option value="first">1</option>
                    <option value="second">2</option>
                    <option value="third">3</option>
                    <option value="fourth">4</option>
                    <option value="fifth">5</option>
                    <option value="sixandUp">6+</option>
                    </select>

                    {numPregnancy !== "first" && (
                    <select value={birthsNatural} onChange={(e) => setBirthsNatural(e.target.value)}>
                        <option value="yes">All Natural</option>
                        <option value="no">None Natural</option>
                        <option value="some">Some Natural</option>
                    </select>
                    )}

                    <select value={headPosition} onChange={(e) => setHeadPosition(e.target.value)}>
                    <option value="normal">Down</option>
                    <option value="up">Up</option>
                    <option value="placenta">Placenta Blocking</option>
                    <option value="unknown">Unknown</option>
                    </select>

                    <select value={gbs} onChange={(e) => setGbs(e.target.value)}>
                    <option value="positive">Positive</option>
                    <option value="negative">Negative</option>
                    <option value="unknown">Unknown</option>
                    </select>

                    <select value={numBabies} onChange={(e) => setNumBabies(e.target.value)}>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    </select>
                </div>
                )}

                {/* Vital Signs Card */}
                <div className="card">
                <h2 className="card-title">Vital Signs</h2>
                <select value={pulse} onChange={(e) => setPulse(e.target.value)}>
                    <option value="">Pulse</option>
                    <option value="low">0-60</option>
                    <option value="normal">60-100</option>
                    <option value="high">110+</option>
                </select>

                <select value={respiratoryRate} onChange={(e) => setRespiratoryRate(e.target.value)}>
                    <option value="">Respiratory Rate</option>
                    <option value="low">0-12</option>
                    <option value="normal">12-20</option>
                    <option value="high">20+</option>
                </select>

                <select value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)}>
                    <option value="">Blood Pressure</option>
                    <option value="low">0-90</option>
                    <option value="normal">90-120</option>
                    <option value="high">130-150</option>
                    <option value="veryHigh">150+</option>
                </select>

                <select value={spo2} onChange={(e) => setSpo2(e.target.value)}>
                    <option value="">SpO2</option>
                    <option value="low">0-92</option>
                    <option value="normal">92-100</option>
                </select>

                <select value={skin} onChange={(e) => setSkin(e.target.value)}>
                    <option value="">Skin Color</option>
                    <option value="normal">Normal</option>
                    <option value="pale">Pale</option>
                    <option value="clammy">Clammy</option>
                    <option value="flushed">Flushed</option>
                    <option value="cyanotic">Cyanotic</option>
                    <option value="jaundice">Jaundice</option>
                </select>
                </div>

                {/* Symptoms & History Cards */}
                <div className="card">
                <h2 className="card-title">Symptoms</h2>
                <button
                    type="button"
                    className="toggle-button"
                    onClick={() => setSymIsOpen(!symIsOpen)}
                >
                    {sypWords.length > 0 ? sypWords.join(", ") : "Select Symptoms"}
                </button>
                <div className={`toggle-content ${symIsOpen ? "open" : ""}`}>
                    {/* Add your checkboxes here, same as your original logic */}
                </div>
                </div>

                <div className="card">
                <h2 className="card-title">Medical History</h2>
                <button
                    type="button"
                    className="toggle-button"
                    onClick={() => setHisIsOpen(!hisIsOpen)}
                >
                    {historyWords.length > 0 ? historyWords.join(", ") : "Select History"}
                </button>
                <div className={`toggle-content ${hisIsOpen ? "open" : ""}`}>
                    {/* Add your checkboxes here, same as your original logic */}
                </div>
                </div>

                {/* Pain & Submit */}
                <div className="card">
                <h2 className="card-title">Pain Level</h2>
                <select value={pain} onChange={(e) => setPain(e.target.value)}>
                    {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
                <button type="submit" className="submit-button">Submit</button>
                </div>

            </form>
            </div>
    )
}
export default Diagnosis