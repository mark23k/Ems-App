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



 { next === "no" &&(
                    <div className="next-test-controls">
                        <button className='next next-btn' onClick={() => setNext("yes")}>Another Test</button>
                    </div>
                )}
                
               {next === "yes"  && (
                    <>
                        <form id="quiz-form-2" className="quiz-form" onSubmit={handleSubmit}>
                            
                            {/* Question 11 */}
                            <div className="question-group" id="q-group-11">
                                <label htmlFor="question11" className="question-label">{data[10].question}</label>
                                <select id="question11" className="answer-select" value={question11} onChange={(e) => setQuestion11(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[10].answer1}>{data[10].answer1}</option>
                                    <option value={data[10].answer2}>{data[10].answer2}</option>
                                    <option value={data[10].answer3}>{data[10].answer3}</option>
                                    <option value={data[10].answer4}>{data[10].answer4}</option>
                                </select>
                            </div>

                            {/* Question 12 */}
                            <div className="question-group" id="q-group-12">
                                <label htmlFor="question12" className="question-label">{data[11].question}</label>
                                <select id="question12" className="answer-select" value={question12} onChange={(e) => setQuestion12(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[11].answer1}>{data[11].answer1}</option>
                                    <option value={data[11].answer2}>{data[11].answer2}</option>
                                    <option value={data[11].answer3}>{data[11].answer3}</option>
                                    <option value={data[11].answer4}>{data[11].answer4}</option>
                                </select>
                            </div>

                            {/* Question 13 */}
                            <div className="question-group" id="q-group-13">
                                <label htmlFor="question13" className="question-label">{data[12].question}</label>
                                <select id="question13" className="answer-select" value={question13} onChange={(e) => setQuestion13(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[12].answer1}>{data[12].answer1}</option>
                                    <option value={data[12].answer2}>{data[12].answer2}</option>
                                    <option value={data[12].answer3}>{data[12].answer3}</option>
                                    <option value={data[12].answer4}>{data[12].answer4}</option>
                                </select>
                            </div>

                            {/* Question 14 */}
                            <div className="question-group" id="q-group-14">
                                <label htmlFor="question14" className="question-label">{data[13].question}</label>
                                <select id="question14" className="answer-select" value={question14} onChange={(e) => setQuestion14(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[13].answer1}>{data[13].answer1}</option>
                                    <option value={data[13].answer2}>{data[13].answer2}</option>
                                    <option value={data[13].answer3}>{data[13].answer3}</option>
                                    <option value={data[13].answer4}>{data[13].answer4}</option>
                                </select>
                            </div>

                            {/* Question 15 */}
                            <div className="question-group" id="q-group-15">
                                <label htmlFor="question15" className="question-label">{data[14].question}</label>
                                <select id="question15" className="answer-select" value={question15} onChange={(e) => setQuestion15(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[14].answer1}>{data[14].answer1}</option>
                                    <option value={data[14].answer2}>{data[14].answer2}</option>
                                    <option value={data[14].answer3}>{data[14].answer3}</option>
                                    <option value={data[14].answer4}>{data[14].answer4}</option>
                                </select>
                            </div>

                            {/* Question 16 */}
                            <div className="question-group" id="q-group-16">
                                <label htmlFor="question16" className="question-label">{data[15].question}</label>
                                <select id="question16" className="answer-select" value={question16} onChange={(e) => setQuestion16(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[15].answer1}>{data[15].answer1}</option>
                                    <option value={data[15].answer2}>{data[15].answer2}</option>
                                    <option value={data[15].answer3}>{data[15].answer3}</option>
                                    <option value={data[15].answer4}>{data[15].answer4}</option>
                                </select>
                            </div>

                            {/* Question 17 */}
                            <div className="question-group" id="q-group-17">
                                <label htmlFor="question17" className="question-label">{data[16].question}</label>
                                <select id="question17" className="answer-select" value={question17} onChange={(e) => setQuestion17(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[16].answer1}>{data[16].answer1}</option>
                                    <option value={data[16].answer2}>{data[16].answer2}</option>
                                    <option value={data[16].answer3}>{data[16].answer3}</option>
                                    <option value={data[16].answer4}>{data[16].answer4}</option>
                                </select>
                            </div>

                            {/* Question 18 */}
                            <div className="question-group" id="q-group-18">
                                <label htmlFor="question18" className="question-label">{data[17].question}</label>
                                <select id="question18" className="answer-select" value={question18} onChange={(e) => setQuestion18(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[17].answer1}>{data[17].answer1}</option>
                                    <option value={data[17].answer2}>{data[17].answer2}</option>
                                    <option value={data[17].answer3}>{data[17].answer3}</option>
                                    <option value={data[17].answer4}>{data[17].answer4}</option>
                                </select>
                            </div>

                            {/* Question 19 */}
                            <div className="question-group" id="q-group-19">
                                <label htmlFor="question19" className="question-label">{data[18].question}</label>
                                <select id="question19" className="answer-select" value={question19} onChange={(e) => setQuestion19(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[18].answer1}>{data[18].answer1}</option>
                                    <option value={data[18].answer2}>{data[18].answer2}</option>
                                    <option value={data[18].answer3}>{data[18].answer3}</option>
                                    <option value={data[18].answer4}>{data[18].answer4}</option>
                                </select>
                            </div>

                            {/* Question 20 */}
                            <div className="question-group" id="q-group-20">
                                <label htmlFor="question20" className="question-label">{data[19].question}</label>
                                <select id="question20" className="answer-select" value={question20} onChange={(e) => setQuestion20(e.target.value)}>
                                    <option value="">select</option>
                                    <option value={data[19].answer1}>{data[19].answer1}</option>
                                    <option value={data[19].answer2}>{data[19].answer2}</option>
                                    <option value={data[19].answer3}>{data[19].answer3}</option>
                                    <option value={data[19].answer4}>{data[19].answer4}</option>
                                </select>
                            </div>

                            <button type='submit' className="submit-btn">Submit</button>
                        </form>
                    </>
                )} 







                Cardiovascular
{v:'hypertension', l:'Hypertension'}, {v:'coronary_artery_disease', l:'CAD'}, {v:'myocardial_infarction', l:'MI / Heart Attack'}, {v:'congestive_heart_failure', l:'CHF'}, {v:'angina', l:'Angina'}, {v:'atrial_fibrillation', l:'A-fib / Arrhythmia'}, {v:'peripheral_vascular_disease', l:'PVD'}, {v:'cardiac_device', l:'Stents / Pacemaker / AICD'}, {v:'pericarditis', l:'Pericarditis'},

Trauma / Surgery
{v:'chest_trauma', l:'Chest Trauma'}, {v:'post_cardiac_surgery', l:'Recent Cardiac Surgery'},

Neurological
{v:'stroke', l:'Stroke (CVA) / TIA'}, {v:'seizure_disorder', l:'Seizure Disorder'}, {v:'dementia', l:'Dementia / Alzheimer’s'}, {v:'parkinsons_disease', l:'Parkinson’s'}, {v:'multiple_sclerosis', l:'Multiple Sclerosis (MS)'}, {v:'traumatic_brain_injury', l:'Traumatic Brain Injury'},

Respiratory
{v:'copd', l:'COPD'}, {v:'asthma', l:'Asthma'}, {v:'emphysema', l:'Emphysema'}, {v:'chronic_bronchitis', l:'Chronic Bronchitis'}, {v:'sleep_apnea', l:'Sleep Apnea'}, {v:'croup', l:'Croup'}, {v:'recent_viral_illness', l:'Recent Viral Illness'}, {v:'recent_infection', l:'Recent Infection'}, {v:'ear_infection', l:'Ear Infection'}, {v:'immune_compromised', l:'Immune Compomised'},

Endocrine / Metabolic
{v:'diabetes', l:'Diabetes (Type 1 or 2)'}, {v:'hypoglycemia', l:'Hypoglycemia Episodes'}, {v:'thyroid_disorder', l:'Thyroid Disorder'}, {v:'adrenal_disorder', l:'Adrenal Disorders'}, {v:'high_cholesterol', l:'High Cholesterol'},

Hematologic
{v:'anemia', l:'Anemia'}, {v:'sickle_cell_disease', l:'Sickle Cell Disease'}, {v:'clotting_disorder', l:'Clotting Disorders'}, {v:'dvt_pe_history', l:'History of DVT/PE'},

Infectious / Immune
{v:'hiv_aids', l:'HIV / AIDS'}, {v:'hepatitis', l:'Hepatitis'}, {v:'sepsis', l:'Sepsis'}, {v:'autoimmune_disease', l:'Autoimmune Diseases'},

Musculoskeletal
{v:'osteoarthritis', l:'Osteoarthritis'}, {v:'rheumatoid_arthritis', l:'Rheumatoid Arthritis'}, {v:'osteoporosis', l:'Osteoporosis'}, {v:'chronic_back_pain', l:'Chronic Back Pain'}, {v:'recent_fracture_or_joint_replacement', l:'Recent Fx/Joint Replacement'},

Psychiatric / Behavioral
{v:'depression', l:'Depression'}, {v:'anxiety', l:'Anxiety'}, {v:'bipolar_disorder', l:'Bipolar Disorder'}, {v:'schizophrenia', l:'Schizophrenia'}, {v:'ptsd', l:'PTSD'}, {v:'substance_use_disorder', l:'Substance Use Disorder'},

Genitourinary / Renal
{v:'chronic_kidney_disease', l:'CKD'}, {v:'end_stage_renal_disease', l:'ESRD (Dialysis)'}, {v:'kidney_stones', l:'Kidney Stones'}, {v:'urinary_tract_infection', l:'UTI'},

Gastrointestinal
{v:'gerd', l:'GERD'}, {v:'peptic_ulcer_disease', l:'PUD'}, {v:'crohns_colitis', l:'Crohn’s / Colitis'}, {v:'liver_disease', l:'Liver Disease / Cirrhosis'}, {v:'gallbladder_disease', l:'Gallbladder Disease'},

Other / Miscellaneous
{v:'cancer', l:'Cancer'}, {v:'allergies', l:'Allergies'}, {v:'recent_surgery', l:'Recent Surgeries'}, {v:'pregnancy_or_childbirth', l:'Pregnancy / Childbirth'}, {v:'immunosuppression', l:'Immunosuppression'}, {v:'birth_control', l:'Birth Control'}, {v:'hormone_replace', l:'Hormone Replacement'}, {v:'long_immobilization', l:'Long Immobilization'}, {v:'smoking', l:'Smoker'},