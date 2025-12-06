{/* This function Diagnosis is an EMT assesment form that you fill out and it gives back suspected diagnosis*/}
import React, { useState } from 'react';
import { SuspectedDiagnosis } from './logic';
import '../style/diagnosis.css'

function Diagnosis() {

    const [complaint, setComplaint] = useState("");
    const [chestPain, setChestPain] = useState("");
    const [breathing, setBreathing] = useState("");
    const [lung, setLung] = useState("");
    const [swelling, setSwelling] = useState("");
    const [pulse, setPulse] = useState("");
    const [schoolPulse, setSchoolPulse] = useState("");
    const [preschoolPulse, setPreschoolPulse] = useState("");
    const [toddlerPulse, setToddlerPulse] = useState("");
    const [infantPulse, setInfantPulse] = useState("");
    const [newbornPulse, setNewbornPulse] = useState("");
    const [respiratoryRate, setRespiratoryRate] = useState("");
    const [preschoolRespiratoryRate, setPreschoolRespiratoryRate] = useState("");
    const [schoolRespiratoryRate, setSchoolRespiratoryRate] = useState("");
    const [toddlerRespiratoryRate, setToddlerRespiratoryRate] = useState("");
    const [infantRespiratoryRate, setInfantRespiratoryRate] = useState("");
    const [newbornRespiratoryRate, setNewbornRespiratoryRate] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [schoolBloodPressure, setSchoolBloodPressure] = useState("");
    const [preschoolBloodPressure, setPreschoolBloodPressure] = useState("");
    const [toddlerBloodPressure, setToddlerBloodPressure] = useState("");
    const [infantBloodPressure, setInfantBloodPressure] = useState("");
    const [newbornBloodPressure, setNewbornBloodPressure] = useState("");
    const [pulsusParadoxus, setPulsusParadoxus] = useState("");
    const [spo2, setSpo2] = useState("");
    const [skin, setSkin] = useState("");
    const [finding, setFinding] = useState("");
    const [onset, setOnset] = useState("");
    const [symptoms, setSymptoms] = useState([]);
    const [sypWords, setSypWords] = useState([]);
    const [symIsOpen, setSymIsOpen] = useState(false);
    const [history, setHistory] = useState([]);
    const [historyWords, setHistoryWords] = useState([]);
    const [hisIsOpen, setHisIsOpen] = useState(false);
    const [isPain, setIsPain] = useState("");
    const [pain, setPain] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
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
    const [radiate, setRadiate] = useState("");
    const [painStay, setPainStay] = useState("");
    const [betterWorse, setBetterWorse] = useState("");
    const [susDiagnosis, setSusDiagnosis] = useState(null);


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
                            setHistory(prev => prev.filter(item => item !== value));
                            setHistoryWords(prev => prev.filter(item => item !== word));
                        }
                    }
    {/* function to handle when you submit the form it should run it through the function SuspectedDiagnosis */}
                    const handleSubmit = (e) => {
                        e.preventDefault();
                       const result = SuspectedDiagnosis({
                            complaint, chestPain, breathing, age, sex, betterWorse, radiate, finding, lung, pulse, schoolPulse, preschoolPulse, toddlerPulse, infantPulse,
                            newbornPulse, respiratoryRate, schoolRespiratoryRate, preschoolRespiratoryRate, toddlerRespiratoryRate, infantRespiratoryRate, 
                            newbornRespiratoryRate, bloodPressure, schoolBloodPressure, preschoolBloodPressure, toddlerBloodPressure, infantBloodPressure, 
                            newbornBloodPressure, pulsusParadoxus, isPain, spo2, skin, onset, symptoms, history, pain, quadrant, painStay, radiateBack, numWeek, numPregnancy,
                            headPosition, birthsNatural, gbs, numBabies, strokeScale, bgl,
                        });
                        setSusDiagnosis(result)
                    };
return (
        <div className="assessment-page">
            <div className="assessment-container">
                <h1 className="assessment-header">EMT Patient Assessment</h1>
                <form onSubmit={handleSubmit} className="assessment-form">
                    
                    {/* Primary Complaint Section */}
                    <div className="form-section primary-complaint-section">
                        <h2 className="section-title">Primary Complaint & Patient Info</h2>
                        <div className="input-group">
                            <label htmlFor="chief_complaint">Chief Complaint</label>
                            <select value={complaint} name="chief_complaint" id="chief_complaint" onChange={(e) => setComplaint(e.target.value)}>
                                <option value="">Select Chief Complaint</option>
                                <option value="chest_pain">Chest Pain</option>
                                <option value="difficulty_breathing">Difficulty Breathing</option>
                                <option value="abdominal_pain">Abdominal Pain</option>
                                <option value="swelling">Swelling</option>
                                <option value="obgyn">OBGYN</option>
                                <option value="tearing_back">Tearing Back Pain</option>
                                <option value="altered_mental_status">Altered Mental Status</option>
                                <option value="weakness">Weakness</option>
                                <option value="head_ache">Head Ache</option>
                                <option value="fever">Fever</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="age">Age</label>
                            <select value={age} name='age' id="age" onChange={(e) => setAge(e.target.value)}>
                                <option value="">Select</option>
                                <option value="newborn">0-1 month</option>
                                <option value="infant">1-12 months</option>
                                <option value="toddler">1-3 years</option>
                                <option value="preschool">4-5 years</option>
                                <option value="school-age">6-12 years</option>
                                <option value="adult">13 +</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="sex">Sex</label>
                            <select value={sex} name="sex" id="sex" onChange={(e) => setSex(e.target.value)}>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    {/* Complaint-Specific Questions Section */}
                    <div className="form-section specific-complaint-section">
                        <h2 className="section-title">Complaint Details</h2>
                        {complaint === "chest_pain" && (
                            <div className="input-group">
                                <label htmlFor="chest_pain">Type of Chest Pain</label>
                                <select value={chestPain} name="chest_pain" id="chest_pain" onChange={(e) => setChestPain(e.target.value)}>
                                    <option value="">Choose Type</option>
                                    <option value="crushing">Crushing</option>
                                    <option value="sharp">Sharp/stabbing</option>
                                    <option value="burning">Burning</option>
                                    <option value="pressure">Pressure/tightness</option>
                                </select>
                            </div>
                        )}

                        {complaint === "abdominal_pain" && (
                            <div className="group-fields">
                                <div className="input-group">
                                    <label htmlFor="quadrants">Quadrant</label>
                                    <select value={quadrant} name="quadrant" id="quadrant" onChange={(e) => setQuadrant(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="upper_right">Upper Right</option>
                                        <option value="upper_left">Upper Left</option>
                                        <option value="upper_middle">Upper Middle</option>
                                        <option value="lower_right">Lower Right</option>
                                        <option value="lower_left">Lower Left</option>
                                        <option value="lower_middle">Lower Middle</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="radiate_back">Radiate to the Back?</label>
                                    <select value={radiateBack} name="radiate_back" id="radiate_back" onChange={(e) => setRadiateBack(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {complaint === "obgyn" && (
                            <div className="obgyn-section group-fields">
                                <div className="input-group">
                                    <label htmlFor="num_week">Week Number</label>
                                    <select value={numWeek} name="num_week" id="num_week" onChange={(e) => setNumWeek(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="first_trimester">0-13</option>
                                        <option value="second_trimester">14-27</option>
                                        <option value="third_trimester">28-35</option>
                                        <option value="end_third_trimester">36-40</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="num_pregnancy">Number of Pregnancy</label>
                                    <select value={numPregnancy} name="num_pregnancy" id="num_pregnancy" onChange={(e) => setNumPregnancy(e.target.value)}>
                                        <option value="first">1</option>
                                        <option value="second">2</option>
                                        <option value="third">3</option>
                                        <option value="fourth">4</option>
                                        <option value="fifth">5</option>
                                        <option value="sixandUp">6 +</option>
                                    </select>
                                </div>

                                {numPregnancy !== "first" && (
                                    <div className="input-group">
                                        <label htmlFor="other_births_natural">Other Births Natural</label>
                                        <select value={birthsNatural} name="other_births_natural" id="other_births_natural" onChange={(e) => setBirthsNatural(e.target.value)}>
                                            <option value="">Select</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                            <option value="some">Some And Some</option>
                                        </select>
                                    </div>
                                )}
                                
                                <div className="input-group">
                                    <label htmlFor="head_position">Head Position</label>
                                    <select value={headPosition} name="head_position" id="head_position" onChange={(e) => setHeadPosition(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="normal">Down</option>
                                        <option value="up">UP</option>
                                        <option value="placenta">Placenta is Blocking</option>
                                        <option value="unknown">Unknown</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="gbs">GBS Status</label>
                                    <select value={gbs} name="gbs" id="gbs" onChange={(e) => setGbs(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="positive">Positive</option>
                                        <option value="negative">Negative</option>
                                        <option value="unknow">Unknown</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="num_babies">Expected Babies</label>
                                    <select value={numBabies} name="num_babies" id="num_babies" onChange={(e) => setNumBabies(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="one">1</option>
                                        <option value="two">2</option>
                                        <option value="three">3</option>
                                        <option value="four">4</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {complaint === "swelling" && (
                            <div className="input-group">
                                <label htmlFor="where_swell">Location of Swelling</label>
                                <select value={swelling} name="where_swell" id="where_swell" onChange={(e) => setSwelling(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="right_leg">Right Leg</option>
                                    <option value="left_leg">Left Leg</option>
                                    <option value="both_legs">Both Legs</option>
                                    <option value="abd">Abdominal</option>
                                    <option value="right_arm">Right Arm</option>
                                    <option value="left_arm">Left Arm</option>
                                    <option value="both_arms">Both Arms</option>
                                    <option value="chest">Chest</option>
                                    <option value="back">Back</option>
                                    <option value="neck">Neck</option>
                                    <option value="face">Face</option>
                                </select>
                            </div>
                        )}
                    </div>
                    
                    {/* Airway & Respiration Section */}
                    <div className="form-section airway-section">
                        <h2 className="section-title">Airway & Respiration</h2>
                        <div className="input-group">
                            <label htmlFor="difficulty_breathing">Difficulty Breathing</label>
                            <select value={breathing} name="difficulty_breathing" id="difficulty_breathing" onChange={(e) => setBreathing(e.target.value)}>
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        {breathing === "yes" && (
                            <div className="input-group">
                                <label htmlFor="lung">Lung Sounds</label>
                                <select value={lung} name="lung" id="lung" onChange={(e) => setLung(e.target.value)}>
                                <option value="">Select Sound</option>
                                <option value="clear">Clear bilaterally</option>
                                <option value="wheeze">Wheezing</option>
                                <option value="stridor">Stridor</option>
                                <option value="crackles">Crackles</option>
                                <option value="rhonchi">Rhonchi</option>
                                <option value="diminished_affected_side">Diminished on Affected Side</option>
                                </select>
                            </div>
                        )}
                        <div className="input-group">
                            <label htmlFor="spo2">SpO2</label>
                            <select value={spo2} name="spo2" id="spo2" onChange={(e) => setSpo2(e.target.value)}>
                                <option value="">Select</option>
                                <option value="low">0 - 92</option>
                                <option value="normal"> 92 - 100</option>
                            </select>
                        </div>
                    </div>

                    {/* Vitals Section (Age-Specific) */}
                    <div className="form-section vitals-section">
                        <h2 className="section-title">Vitals</h2>

                        {/* Adult Vitals */}
                        {age  === "adult" && (
                            <div className="age-vitals adult-vitals group-fields">
                                <div className="input-group">
                                    <label htmlFor="pulse">Adult Pulse</label>
                                    <select value={pulse} name="pulse" id="pulse" onChange={(e) => setPulse(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-60</option>
                                        <option value="normal">60-100</option>
                                        <option value="high">110 + </option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="respiratory_rate">Adult Respiratory Rate</label>
                                    <select value={respiratoryRate} name="respiratory_rate" id="respiratory_rate" onChange={(e) => setRespiratoryRate(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-12</option>
                                        <option value="normal">12-20</option>
                                        <option value="high">20 +</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label htmlFor="blood_pressure">Adult Blood Pressure</label>
                                    <select value={bloodPressure} name="blood_pressure" id="blood_pressure" onChange={(e) => setBloodPressure(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">90 Systolic or lower</option>
                                        <option value="slight-low">100 - 110 Systolic</option>
                                        <option value="normal">120/80</option>
                                        <option value="normal1">130/80</option>
                                        <option value="slight-high">140/80</option>
                                        <option value="slight-high1">150/80</option>
                                        <option value="slight-high2">160/80</option>
                                        <option value="high">170/80 and up</option>
                                        <option value="uneven">Not Even</option>
                                        <option value="closing-in">High & pulse pressure less then 30mg</option>
                                        <option value="low-in">Low & pulse pressure less then 30mg</option>
                                        <option value="closing-out">High & pulse pressure more then 60mg</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {/* Vitals for other age groups (similar structure for School, Toddler, Preschool, Infant, Newborn) */}
                        {/* School-Age Vitals */}
                        {age === "school-age" && (
                            <div className="age-vitals school-vitals group-fields">
                                <div className="input-group">
                                    <label htmlFor="6-12_pulse">School Age Pulse</label>
                                    <select value={schoolPulse} name="6-12_pulse" id="6-12_pulse" onChange={(e) => setSchoolPulse(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0 - 70</option>
                                        <option value="normal">75-120</option>
                                        <option value="high">130 + </option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="6-12_respiratory_rate">School RR</label>
                                    <select value={schoolRespiratoryRate} name="6-12_respiratory_rate" id="6-12_respiratory_rate" onChange={(e) => setSchoolRespiratoryRate(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-18</option>
                                        <option value="normal">18-25</option>
                                        <option value="high">25 +</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label htmlFor="6-12_blood_pressure">School Age BP</label>
                                    <select value={schoolBloodPressure} name="6-12_blood_pressure" id="6-12_blood_pressure" onChange={(e) => setSchoolBloodPressure(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">Under 70 Systolic</option>
                                        <option value="low-1">70 - 80 Systolic</option>
                                        <option value="normal">85 - 120 Systolic</option>
                                        <option value="slight-high">130 Systolic</option>
                                        <option value="high">Above 140 Systolic</option>
                                        <option value="in">Normal & Pulse Pressure Less then 30mg</option>
                                        <option value="low-in">Low & Pulse Pressure Less then 30mg</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {/* Toddler Vitals */}
                        {age === "toddler" && (
                            <div className="age-vitals toddler-vitals group-fields">
                                <div className="input-group">
                                    <label htmlFor="1-3_pulse">Toddler Pulse</label>
                                    <select value={toddlerPulse} name="1-3_pulse" id="1-3_pulse" onChange={(e) => setToddlerPulse(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-85</option>
                                        <option value="normal">90 - 150</option>
                                        <option value="high">160 + </option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="1-3_respiratory_rate">Toddler RR</label>
                                    <select value={toddlerRespiratoryRate} name="1-3_respiratory_rate" id="1-3_respiratory_rate" onChange={(e) => setToddlerRespiratoryRate(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-20</option>
                                        <option value="normal">20-40</option>
                                        <option value="high">40 +</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label htmlFor="1-3_blood_pressure">Toddler BP</label>
                                    <select value={toddlerBloodPressure} name="1-3_blood_pressure" id="1-3_blood_pressure" onChange={(e) => setToddlerBloodPressure(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">Under 70 Systolic</option>
                                        <option value="low-1">70 - 80 Systolic</option>
                                        <option value="normal">80 - 110 Systolic</option>
                                        <option value="slight-high">120 Systolic</option>
                                        <option value="high">Above 130 Systolic</option>
                                        <option value="in">Normal & Pulse Pressure Less then 30mg</option>
                                        <option value="low-in">Low & Pulse Pressure Less then 30mg</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {/* Preschool Vitals */}
                        {age === "preschool" && (
                            <div className="age-vitals preschool-vitals group-fields">
                                <div className="input-group">
                                    <label htmlFor="4-5_pulse">Preschool Pulse</label>
                                    <select value={preschoolPulse} name="4-5_pulse" id="4-5_pulse" onChange={(e) => setPreschoolPulse(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-75</option>
                                        <option value="normal">80-140</option>
                                        <option value="high">150 + </option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="4-5_respiratory_rate">Preschool RR</label>
                                    <select value={preschoolRespiratoryRate} name="4-5_respiratory_rate" id="4-5_respiratory_rate" onChange={(e) => setPreschoolRespiratoryRate(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-20</option>
                                        <option value="normal">20-30</option>
                                        <option value="high">30 +</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label htmlFor="4-5_blood_pressure">Preschool BP</label>
                                    <select value={preschoolBloodPressure} name="4-5_blood_pressure" id="4-5_blood_pressure" onChange={(e) => setPreschoolBloodPressure(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">Under 70 Systolic</option>
                                        <option value="low-1">70 - 80 Systolic</option>
                                        <option value="normal">80 - 115 Systolic</option>
                                        <option value="slight-high">125 Systolic</option>
                                        <option value="high">Above 135 Systolic</option>
                                        <option value="in">Normal & Pulse Pressure Less then 30mg</option>
                                        <option value="low-in">Low & Pulse Pressure Less then 30mg</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {/* Infant Vitals */}
                        {age === "infant" && (
                            <div className="age-vitals infant-vitals group-fields">
                                <div className="input-group">
                                    <label htmlFor="infant_pulse">Infant Pulse</label>
                                    <select value={infantPulse} name="infant_pulse" id="infant_pulse" onChange={(e) => setInfantPulse(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-95</option>
                                        <option value="normal">100-160</option>
                                        <option value="high">170 + </option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="infant_respiratory_rate">Infant RR</label>
                                    <select value={infantRespiratoryRate} name="infant_respiratory_rate" id="infant_respiratory_rate" onChange={(e) => setInfantRespiratoryRate(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-25</option>
                                        <option value="normal">25-50</option>
                                        <option value="high">50 +</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label htmlFor="infant_blood_pressure">Infant BP</label>
                                    <select value={infantBloodPressure} name="infant_blood_pressure" id="infant_blood_pressure" onChange={(e) => setInfantBloodPressure(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">Under 70 Systolic</option>
                                        <option value="normal">70 - 100 Systolic</option>
                                        <option value="slight-high">110 Systolic</option>
                                        <option value="high">Above 120 Systolic</option>
                                        <option value="in">Normal & Pulse Pressure Less then 30mg</option>
                                        <option value="low-in">Low & Pulse Pressure Less then 30mg</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {/* Newborn Vitals */}
                        {age === "newborn" && (
                            <div className="age-vitals newborn-vitals group-fields">
                                <div className="input-group">
                                    <label htmlFor="newborn_pulse">Newborn Pulse</label>
                                    <select value={newbornPulse} name="newborn_pulse" id="newborn_pulse" onChange={(e) => setNewbornPulse(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-99</option>
                                        <option value="normal">100-180</option>
                                        <option value="high">190 + </option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="newborn_respiratory_rate">Newborn RR</label>
                                    <select value={newbornRespiratoryRate} name="newborn_respiratory_rate" id="newborn_respiratory_rate" onChange={(e) => setNewbornRespiratoryRate(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0-28</option>
                                        <option value="normal">30-60</option>
                                        <option value="high">60 +</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label htmlFor="newborn_blood_pressure">Newborn BP</label>
                                    <select value={newbornBloodPressure} name="newborn_blood_pressure" id="newborn_blood_pressure" onChange={(e) => setNewbornBloodPressure(e.target.value)}>
                                       <option value="">Select</option>
                                        <option value="low">Under 60 Systolic</option>
                                        <option value="normal">60 - 90 Systolic</option>
                                        <option value="slight-high">100 Systolic</option>
                                        <option value="high">Above 110 Systolic</option>
                                        <option value="in">Normal & Pulse Pressure Less then 30mg</option>
                                        <option value="low-in">Low & Pulse Pressure Less then 30mg</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        
                        {/* General Vitals */}
                        <div className="general-vitals group-fields">
                            <div className="input-group">
                                <label htmlFor="pulsus_paradoxus">Pulsus Paradoxus</label>
                                <select value={pulsusParadoxus} name="pulsus_paradoxus" id="pulsus_paradoxus" onChange={(e) => setPulsusParadoxus(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="skin">Skin Color</label>
                                <select value={skin} name="skin" id="skin" onChange={(e) => setSkin(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="normal">Normal</option>
                                    <option value="pale">Pale</option>
                                    <option value="clammy">Clammy</option>
                                    <option value="flushed">Flushed</option>
                                    <option value="cyanotic">Cyanotic</option>
                                    <option value="jaundice">Jaundice</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Neurological / Metabolic Section */}
                    {(complaint === "altered_mental_status" || complaint === "weakness" || complaint === "head_ache") && (
                        <div className="form-section neuro-metabolic-section">
                            <h2 className="section-title">Neuro/Metabolic Check</h2>
                            <div className="group-fields">
                                <div className="input-group">
                                    <label htmlFor="bgl">Sugar (BGL)</label>
                                    <select value={bgl} name="bgl" id="bgl" onChange={(e) => setBgl(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="low">0 - 80</option>
                                        <option value="normal">80 - 120</option>
                                        <option value="high">150 - 200</option>
                                        <option value="very_high">200 +</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="stroke_scale">Cincinnati Stroke Scale</label>
                                    <select value={strokeScale} name="stroke_scale" id="stroke_scale" onChange={(e) => setStrokeScale(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="positive">Positive</option>
                                        <option value="negative">Negative</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* General Findings Section */}
                    <div className="form-section general-findings-section">
                        <h2 className="section-title">General Findings</h2>
                        <div className="input-group">
                            <label htmlFor="finding">Finding</label>
                            <select value={finding} name="finding" id="finding" onChange={(e) => setFinding(e.target.value)}>
                                <option value="">Select</option>
                                <option value="normal">Normal</option>
                                <option value="tracheal_deviation">Tracheal Deviation</option>
                                <option value="barrel_chest">Barrel Chest</option>
                                <option value="jvd">JVD</option>
                                <option value="swollen_legs">Swollen Legs</option>
                                <option value="hives">Itchy skin / Hives</option>
                                <option value="pink_sputum">Pink Sputum</option>
                                <option value="unilateral_leg_swelling">Unilateral Leg Swelling</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="onset">Onset</label>
                            <select value={onset} name="onset" id="onset" onChange={(e) => setOnset(e.target.value)}>
                                <option value="">Select</option>
                                <option value="sudden">Sudden</option>
                                <option value="gradual">Gradual</option>
                                <option value="fluctuating">Fluctuating</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>
                    </div>

                    {/* Symptoms Checklist */}
                    <div className="form-section checklist-section symptoms-checklist">
                        <button type='button' className="checklist-toggle-button" onClick={() => setSymIsOpen(!symIsOpen)}>
                            Symptoms: <span className="selected-items">{sypWords.join(", ") || "Click to select..."}</span>
                        </button>
                        <div className={`checklist-content ${symIsOpen ? 'open' : ''}`}>
                            <div className="checkbox-grid">
                                {/* Checkbox list items */}
                                <label className="checkbox-item"><input type="checkbox" value="nausea" onChange={handleCheckSym}/>Nausea</label>
                                <label className="checkbox-item"><input type="checkbox" value="vomit" onChange={handleCheckSym} />Vomit</label>
                                <label className="checkbox-item"><input type="checkbox" value="diarrhea" onChange={handleCheckSym}/>Diarrhea</label>
                                <label className="checkbox-item"><input type="checkbox" value="weakness" onChange={handleCheckSym}/>Weakness</label>
                                <label className="checkbox-item"><input type="checkbox" value="headache" onChange={handleCheckSym}/>Headache</label>
                                <label className="checkbox-item"><input type="checkbox" value="unilateral_weakness" onChange={handleCheckSym}/>Unilateral Weakness</label>
                                <label className="checkbox-item"><input type="checkbox" value="speech_difficulty" onChange={handleCheckSym}/>Speech Difficulty</label>
                                <label className="checkbox-item"><input type="checkbox" value="numbness" onChange={handleCheckSym}/>Numbness / Tingling</label>
                                <label className="checkbox-item"><input type="checkbox" value="loss_balance" onChange={handleCheckSym}/>Loss of Balance</label>
                                <label className="checkbox-item"><input type="checkbox" value="throat_tightness" onChange={handleCheckSym}/>Throat Tightness</label>
                                <label className="checkbox-item"><input type="checkbox" value="hives" onChange={handleCheckSym}/>Itching / Hives</label>
                                <label className="checkbox-item"><input type="checkbox" value="constipation"onChange={handleCheckSym} />Constipation</label>
                                <label className="checkbox-item"><input type="checkbox" value="dizziness"onChange={handleCheckSym} />Dizziness</label>
                                <label className="checkbox-item"><input type="checkbox" value="cough" onChange={handleCheckSym}/>Cough</label>
                                <label className="checkbox-item"><input type="checkbox" value="seal_cough" onChange={handleCheckSym}/>Seal Cough</label>
                                <label className="checkbox-item"><input type="checkbox" value="abd_bloating" onChange={handleCheckSym}/>Abdominal Bloating</label>
                                <label className="checkbox-item"><input type="checkbox" value="congestion" onChange={handleCheckSym}/>Congestion</label>
                                <label className="checkbox-item"><input type="checkbox" value="sore_throat" onChange={handleCheckSym}/>Sore Throat</label>
                                <label className="checkbox-item"><input type="checkbox" value="sweating" onChange={handleCheckSym}/>Sweating</label>
                                <label className="checkbox-item"><input type="checkbox" value="paroxysmal_nocturnal_dyspnea" onChange={handleCheckSym}/>PND</label>
                                <label className="checkbox-item"><input type="checkbox" value="seizures" onChange={handleCheckSym}/>Seizures</label>
                                <label className="checkbox-item"><input type="checkbox" value="fever" onChange={handleCheckSym} />Fever</label>
                                <label className="checkbox-item"><input type="checkbox" value="fatigue" onChange={handleCheckSym}/>Fatigue</label>
                                <label className="checkbox-item"><input type="checkbox" value="chest_tightness" onChange={handleCheckSym}/>Chest Tightness</label>
                                <label className="checkbox-item"><input type="checkbox" value="blurred_vision" onChange={handleCheckSym}/>Blurred Vision</label>
                                <label className="checkbox-item"><input type="checkbox" value="confusion" onChange={handleCheckSym}/>Confusion</label>
                                <label className="checkbox-item"><input type="checkbox" value="shortness_breath" onChange={handleCheckSym}/>Shortness of Breath</label>
                                <label className="checkbox-item"><input type="checkbox" value="blood_stool" onChange={handleCheckSym}/>Blood in Stool</label>
                                <label className="checkbox-item"><input type="checkbox" value="blood_urine" onChange={handleCheckSym}/>Blood Urine</label>
                                <label className="checkbox-item"><input type="checkbox" value="anxiety" onChange={handleCheckSym}/>Anxiety / restlessness</label>
                            </div>
                            <button type='button' className="checklist-hide-button" onClick={() => setSymIsOpen(false)}>Hide Symptoms</button>
                        </div>
                    </div>

                    {/* History Checklist */}
                    <div className="form-section checklist-section history-checklist">
                        <button type='button' className='checklist-toggle-button' onClick={() => setHisIsOpen(!hisIsOpen)}>
                            History: <span className="selected-items">{historyWords.join(", ") || "Click to select..."}</span>
                        </button>
                        <div className={`checklist-content ${hisIsOpen ? 'open' : ''}`}>
                            {/* Cardiovascular */}
                            <div className="history-group">
                                <h3 className="history-group-title">🫀 Cardiovascular</h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="hypertension" onChange={handleCheckHis}/>Hypertension</label>
                                    <label className="checkbox-item"><input type="checkbox" value="coronary_artery_disease" onChange={handleCheckHis}/>CAD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="myocardial_infarction" onChange={handleCheckHis}/>MI / Heart Attack</label>
                                    <label className="checkbox-item"><input type="checkbox" value="congestive_heart_failure" onChange={handleCheckHis}/>CHF</label>
                                    <label className="checkbox-item"><input type="checkbox" value="angina" onChange={handleCheckHis}/>Angina</label>
                                    <label className="checkbox-item"><input type="checkbox" value="atrial_fibrillation" onChange={handleCheckHis}/>A-fib / Arrhythmia</label>
                                    <label className="checkbox-item"><input type="checkbox" value="peripheral_vascular_disease" onChange={handleCheckHis}/>PVD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="cardiac_device" onChange={handleCheckHis}/>Stents / Pacemaker / AICD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="pericarditis" onChange={handleCheckHis}/>Pericarditis</label>
                                </div>
                            </div>
                            {/* Trauma / Surgery */}
                            <div className="history-group">
                                <h3 className="history-group-title">🧍‍♂️ Trauma / Surgery</h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="chest_trauma" onChange={handleCheckHis}/>Chest Trauma</label>
                                    <label className="checkbox-item"><input type="checkbox" value="post_cardiac_surgery" onChange={handleCheckHis}/>Recent Cardiac Surgery</label>
                                </div>
                            </div>
                            {/* Neurological */}
                            <div className="history-group">
                                <h3 className="history-group-title">🧠 Neurological</h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="stroke" onChange={handleCheckHis}/>Stroke (CVA) / TIA</label>
                                    <label className="checkbox-item"><input type="checkbox" value="seizure_disorder"onChange={handleCheckHis} />Seizure Disorder</label>
                                    <label className="checkbox-item"><input type="checkbox" value="dementia" onChange={handleCheckHis}/>Dementia / Alzheimer’s</label>
                                    <label className="checkbox-item"><input type="checkbox" value="parkinsons_disease" onChange={handleCheckHis}/>Parkinson’s</label>
                                    <label className="checkbox-item"><input type="checkbox" value="multiple_sclerosis"onChange={handleCheckHis} />Multiple Sclerosis (MS)</label>
                                    <label className="checkbox-item"><input type="checkbox" value="traumatic_brain_injury"onChange={handleCheckHis} />TBI</label>
                                </div>
                            </div>
                            {/* Respiratory */}
                            <div className="history-group">
                                <h3 className="history-group-title">🫁 Respiratory</h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="copd" onChange={handleCheckHis}/>COPD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="asthma" onChange={handleCheckHis}/>Asthma</label>
                                    <label className="checkbox-item"><input type="checkbox" value="emphysema" onChange={handleCheckHis}/>Emphysema</label>
                                    <label className="checkbox-item"><input type="checkbox" value="chronic_bronchitis"onChange={handleCheckHis} />Chronic Bronchitis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="sleep_apnea"onChange={handleCheckHis} />Sleep Apnea</label>
                                    <label className="checkbox-item"><input type="checkbox" value="croup"onChange={handleCheckHis} />Croup</label>
                                    <label className="checkbox-item"><input type="checkbox" value="recent_viral_illness"onChange={handleCheckHis} />Recent Viral Illness</label>
                                </div>
                            </div>
                            {/* Endocrine / Metabolic */}
                            <div className="history-group">
                                <h3 className="history-group-title">🍽️ Endocrine / Metabolic</h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="diabetes" onChange={handleCheckHis}/>Diabetes (Type 1 or 2)</label>
                                    <label className="checkbox-item"><input type="checkbox" value="hypoglycemia" onChange={handleCheckHis}/>Hypoglycemia Episodes</label>
                                    <label className="checkbox-item"><input type="checkbox" value="thyroid_disorder" onChange={handleCheckHis}/>Thyroid Disorder</label>
                                    <label className="checkbox-item"><input type="checkbox" value="adrenal_disorder" onChange={handleCheckHis}/>Adrenal Disorders</label>
                                    <label className="checkbox-item"><input type="checkbox" value="high_cholesterol" onChange={handleCheckHis}/>High Cholesterol</label>
                                </div>
                            </div>
                            {/* Hematologic */}
                            <div className="history-group">
                                <h3 className="history-group-title">🩸 Hematologic</h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="anemia" onChange={handleCheckHis}/>Anemia</label>
                                    <label className="checkbox-item"><input type="checkbox" value="sickle_cell_disease" onChange={handleCheckHis}/>Sickle Cell Disease</label>
                                    <label className="checkbox-item"><input type="checkbox" value="clotting_disorder"onChange={handleCheckHis} />Clotting Disorders</label>
                                    <label className="checkbox-item"><input type="checkbox" value="dvt_pe_history"onChange={handleCheckHis} />History of DVT/PE</label>
                                </div>
                            </div>
                            {/* Infectious / Immune */}
                            <div className="history-group">
                                <h3 className="history-group-title">🧫 Infectious / Immune</h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="hiv_aids"onChange={handleCheckHis} />HIV / AIDS</label>
                                    <label className="checkbox-item"><input type="checkbox" value="hepatitis" onChange={handleCheckHis}/>Hepatitis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="sepsis" onChange={handleCheckHis}/>Sepsis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="autoimmune_disease" onChange={handleCheckHis}/>Autoimmune Diseases</label>
                                </div>
                            </div>
                            {/* Musculoskeletal */}
                            <div className="history-group">
                                <h3 className="history-group-title">🧍‍♂️ Musculoskeletal </h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="osteoarthritis"onChange={handleCheckHis} />Osteoarthritis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="rheumatoid_arthritis" onChange={handleCheckHis}/>Rheumatoid Arthritis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="osteoporosis" onChange={handleCheckHis}/>Osteoporosis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="chronic_back_pain" onChange={handleCheckHis}/>Chronic Back Pain</label>
                                    <label className="checkbox-item"><input type="checkbox" value="recent_fracture_or_joint_replacement"onChange={handleCheckHis} />Recent Fx/Joint Replacement</label>
                                </div>
                            </div>
                            {/* Psychiatric / Behavioral */}
                            <div className="history-group">
                                <h3 className="history-group-title">🧠 Psychiatric / Behavioral </h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="depression"onChange={handleCheckHis} />Depression</label>
                                    <label className="checkbox-item"><input type="checkbox" value="anxiety" onChange={handleCheckHis}/>Anxiety</label>
                                    <label className="checkbox-item"><input type="checkbox" value="bipolar_disorder"onChange={handleCheckHis} />Bipolar Disorder</label>
                                    <label className="checkbox-item"><input type="checkbox" value="schizophrenia" onChange={handleCheckHis}/>Schizophrenia</label>
                                    <label className="checkbox-item"><input type="checkbox" value="ptsd"onChange={handleCheckHis} />PTSD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="substance_use_disorder" onChange={handleCheckHis}/>Substance Use Disorder</label>
                                </div>
                            </div>
                            {/* Genitourinary / Renal */}
                            <div className="history-group">
                                <h3 className="history-group-title">🧍‍♀️ Genitourinary / Renal </h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="chronic_kidney_disease" onChange={handleCheckHis}/>CKD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="end_stage_renal_disease" onChange={handleCheckHis}/>ESRD (Dialysis)</label>
                                    <label className="checkbox-item"><input type="checkbox" value="kidney_stones" onChange={handleCheckHis}/>Kidney Stones</label>
                                    <label className="checkbox-item"><input type="checkbox" value="urinary_tract_infection" onChange={handleCheckHis}/>UTI</label>
                                </div>
                            </div>
                            {/* Gastrointestinal */}
                            <div className="history-group">
                                <h3 className="history-group-title">🍽️ Gastrointestinal </h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="gerd" onChange={handleCheckHis}/>GERD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="peptic_ulcer_disease" onChange={handleCheckHis}/>PUD</label>
                                    <label className="checkbox-item"><input type="checkbox" value="crohns_colitis" onChange={handleCheckHis}/>Crohn’s / Colitis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="liver_disease" onChange={handleCheckHis}/>Liver Disease / Cirrhosis</label>
                                    <label className="checkbox-item"><input type="checkbox" value="gallbladder_disease" onChange={handleCheckHis}/>Gallbladder Disease</label>
                                </div>
                            </div>
                            {/* Other / Miscellaneous */}
                            <div className="history-group">
                                <h3 className="history-group-title">🧬 Other / Miscellaneous </h3>
                                <div className="checkbox-grid">
                                    <label className="checkbox-item"><input type="checkbox" value="cancer" onChange={handleCheckHis}/>Cancer </label>
                                    <label className="checkbox-item"><input type="checkbox" value="allergies" onChange={handleCheckHis}/>Allergies</label>
                                    <label className="checkbox-item"><input type="checkbox" value="recent_surgery"onChange={handleCheckHis} />Recent Surgeries</label>
                                    <label className="checkbox-item"><input type="checkbox" value="pregnancy_or_childbirth"onChange={handleCheckHis} />Pregnancy / Childbirth</label>
                                    <label className="checkbox-item"><input type="checkbox" value="immunosuppression" onChange={handleCheckHis}/>Immunosuppression</label>
                                    <label className="checkbox-item"><input type="checkbox" value="birth_control"onChange={handleCheckHis} />Birth Control</label>
                                    <label className="checkbox-item"><input type="checkbox" value="hormone_replace"onChange={handleCheckHis} />Hormone Replacement</label>
                                    <label className="checkbox-item"><input type="checkbox" value="long_immobilization"onChange={handleCheckHis} />Long Immobilization</label>
                                    <label className="checkbox-item"><input type="checkbox" value="smoking"onChange={handleCheckHis} />Smoker</label>
                                </div>
                            </div>
                            <button type='button' className="checklist-hide-button" onClick={(e) => setHisIsOpen(false)}>Hide History</button>
                        </div>
                    </div>

                    {/* Pain Assessment Section */}
                    <div className="form-section pain-assessment-section">
                        <h2 className="section-title">Pain Assessment</h2>
                        {complaint !== "chest_pain" && (
                            <div className="input-group">
                                <label htmlFor="isPain">Is There Pain</label>
                                <select value={isPain} name="isPain" id="isPain" onChange={(e) => setIsPain(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                        )}
                        
                        {(complaint === "chest_pain" || isPain === "yes") && (
                            <div className="pain-details group-fields">
                                <div className="input-group">
                                    <label htmlFor="pain">Pain Level (1-10)</label>
                                    <select value={pain} name="pain" id="pain" onChange={(e) => setPain(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="painStay">Pain Consistency</label>
                                    <select value={painStay} name="painStay" id="painStay" onChange={(e) => setPainStay(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="yes">Consistent</option>
                                        <option value="no">Comes and Goes</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label htmlFor="radiate">Radiates To</label>
                                    <select value={radiate} name="radiate" id="radiate" onChange={(e) => setRadiate(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="no">No</option>
                                        <option value="back">Full Back</option>
                                        <option value="up_back">Upper Back Only</option>
                                        <option value="mid_back">Mid Back Only</option>
                                        <option value="low_back">Low Back Only</option>
                                        <option value="shoulders">Both Shoulders</option>
                                        <option value="right_shoulder">Right Shoulder</option>
                                        <option value="left_shoulder">Left Shoulder</option>
                                        <option value="abdominal">Full Abdominal Area</option>
                                        <option value="upp_abd">Upper Abdominal Only</option>
                                        <option value="low_abd">Lower Abdominal Only</option>
                                        <option value="right_upp_abd">Right Upper Abdominal Only</option>
                                        <option value="left_up_abd">Left Upper Abdominal Only</option>
                                        <option value="right_low_abd">Right_Lower Abdominal Only</option>
                                        <option value="left_low_abd">Left_Lower_Abdominal Only</option>
                                        <option value="arms">Both Arms</option>
                                        <option value="right_arm">Right Arm Only</option>
                                        <option value="left_arm">Left Arm Only</option>
                                        <option value="neck">Neck</option>
                                        <option value="legs">Both Legs</option>
                                        <option value="right_leg">Right leg</option>
                                        <option value="left_leg">Left Leg</option>
                                        <option value="right_up_leg">Right Upper Leg</option>
                                        <option value="left_up_leg">Left Upper Leg</option>
                                        <option value="jaw">Jaw</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        <div className="input-group full-width">
                            <label htmlFor="better_worse">Anything Make Better/Worse</label>
                            <select name="better_worse" id="better_worse" value={betterWorse} onChange={(e) => setBetterWorse(e.target.value)}>
                                <option value="">Select</option>
                                <option value="no">No</option>
                                <option value="sitting_better">Sitting Better</option>
                                <option value="sitting_worse">Sitting Worse</option>
                                <option value="lying_better">Lying Better</option>
                                <option value="lying_worse">Lying Worse</option>
                                <option value="night_worse">Night Worse</option>
                                <option value="standing_better">Standing Better</option>
                                <option value="standing_worse">Standing Worse</option>
                                <option value="breathing_worse">Worse when Breathing</option>
                                <option value="lying_left_better">Lying on Left Side</option>
                                <option value="lying_right_better">Lying on Right Side</option>
                                <option value="exertion_worse">Exertion makes Worse</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="submit-button">Get Suspected Diagnosis</button>
                </form>

                {susDiagnosis && (
                    <div className="diagnosis-result-box">
                        <h3 className="result-title">Suspected Diagnosis</h3>
                        <p className="result-text">{susDiagnosis}</p>
                    </div>
                )}
            </div>
            
        </div>
    )
}
export default Diagnosis;