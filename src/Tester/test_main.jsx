import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grade } from './logic';
import { RespData } from './test_data';
import { CardiacData } from './test_data';
import { OBGYNData } from './test_data';
import { TraumaData } from './test_data';
import { AlteredMentalStatusData } from './test_data';
import { AbdominalData } from './test_data';
import { BurnsData } from './test_data';
import '../style/main_test.css';

function MainTest() {
    const navigate = useNavigate();
    let rawData = null;
    const path = window.location.pathname;

    if (path === "/test/respiratory_test") rawData = RespData;
    else if (path === "/test/cardiac_test") rawData = CardiacData;
    else if (path === "/test/obgyn_test") rawData = OBGYNData;
    else if (path === "/test/trauma_test") rawData = TraumaData;
    else if (path === "/test/ams_test") rawData = AlteredMentalStatusData;
    else if (path === "/test/abdominal_test") rawData = AbdominalData;
    else if (path === "/test/burns_test") rawData = BurnsData;

    if (!rawData) return <div className="loading-state"><h1>Loading Test...</h1></div>;

    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");
    const [question6, setQuestion6] = useState("");
    const [question7, setQuestion7] = useState("");
    const [question8, setQuestion8] = useState("");
    const [question9, setQuestion9] = useState("");
    const [question10, setQuestion10] = useState("");

    const [mark, setMark] = useState(null);
    const [show, setShow] = useState(0);

    const locationName = path.replace(/_/g, " ").replace(/\//g, "").replace("test", "").toUpperCase();

    const selectedData = useMemo(() => {
        const shuffled = [...rawData].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    }, [rawData]);

    function handleSubmit(e) {
        e.preventDefault();
        const result = Grade({
            question1, question2, question3, question4, question5,
            question6, question7, question8, question9, question10,
            data: selectedData 
        });
        setShow(1);
        setMark(result);
    }

    return (
        <div className="test-page-wrapper">
            <div className="test-content-card">
                <div className="test-header-section">
                    <h1 className="test-header">{locationName}</h1>
                    <p className="test-subtitle">Answer all 10 questions to complete the module.</p>
                </div>

                {show === 0 ? (
                    <form className="quiz-form" onSubmit={handleSubmit}>
                        {selectedData.map((item, index) => {
                            const setters = [setQuestion1, setQuestion2, setQuestion3, setQuestion4, setQuestion5, setQuestion6, setQuestion7, setQuestion8, setQuestion9, setQuestion10];
                            const values = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
                            
                            return (
                                <div className="question-group" key={index}>
                                    <label className="question-label">
                                        <span className="q-number">{index + 1}.</span> {item.question}
                                    </label>
                                    <select 
                                        className="answer-select" 
                                        value={values[index]} 
                                        onChange={(e) => setters[index](e.target.value)}
                                        required
                                    >
                                        <option value="">-- Select Answer --</option>
                                        <option value={item.answer1}>{item.answer1}</option>
                                        <option value={item.answer2}>{item.answer2}</option>
                                        <option value={item.answer3}>{item.answer3}</option>
                                        <option value={item.answer4}>{item.answer4}</option>
                                    </select>
                                </div>
                            );
                        })}
                        <button type='submit' className="submit-btn">Finish Exam</button>
                    </form>
                ) : (
                    <div className="result-container">
                        <div className="result-box">
                            <h2>Exam Results</h2>
                            <h1 className="result-mark">{mark}</h1>
                        </div>
                        <div className="another-test-controls">
                            <button className='another-btn' onClick={() => window.location.reload()}>
                                Take Another Test
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainTest;