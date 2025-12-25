import React, { useState } from 'react';
import { Grade } from './logic';
import { RespData }from './test_data';
import { CardiacData } from './test_data';
import { OBGYNData } from './test_data';
import { TraumaData } from './test_data';
import { AlteredMentalStatusData } from './test_data';
import { AbdominalData } from './test_data';
import { BurnsData } from './test_data';
import '../style/main_test.css'
    

    function MainTest() {
        let data = null
        if (window.location.pathname === "/test/respiratory_test") {
            data = RespData;
        }
        if (window.location.pathname === "/test/cardiac_test") {
            data = CardiacData;
        }
        if (window.location.pathname === "/test/obgyn_test") {
            data = OBGYNData;
        }
        if (window.location.pathname === "/test/trauma_test") {
            data = TraumaData;
        }
        if (window.location.pathname === "/test/ams_test") {
            data = AlteredMentalStatusData;
        }
        if (window.location.pathname === "/test/abdominal_test") {
            data = AbdominalData;
        }
        if (window.location.pathname === "/test/burns_test") {
            data = BurnsData;
        }
        if (!data) return <h1>Loading...</h1>;

        const [question1, setQuestion1] = useState();
        const [question2, setQuestion2] = useState();
        const [question3, setQuestion3] = useState();
        const [question4, setQuestion4] = useState();
        const [question5, setQuestion5] = useState();
        const [question6, setQuestion6] = useState();
        const [question7, setQuestion7] = useState();
        const [question8, setQuestion8] = useState();
        const [question9, setQuestion9] = useState();
        const [question10, setQuestion10] = useState(); 
        const [question11, setQuestion11] = useState();
        const [question12, setQuestion12] = useState();
        const [question13, setQuestion13] = useState(); 
        const [question14, setQuestion14] = useState();
        const [question15, setQuestion15] = useState();
        const [question16, setQuestion16] = useState();
        const [question17, setQuestion17] = useState();
        const [question18, setQuestion18] = useState();
        const [question19, setQuestion19] = useState();
        const [question20, setQuestion20] = useState();

        const [next, setNext] = useState("no");
        const [mark, setMark] = useState(null);
        const [show, setShow] = useState(0);
        
        const location = window.location.pathname.replace(/_/g, " ").replace(/\//g, "").replace("test", "").toUpperCase()


        function handleSubmit(e) {
        e.preventDefault();
        const result = Grade({
                question1,question2,question3,question4,question5,
                question6,question7,question8,question9,question10,
                question11,question12,question13,question14,question15,
                question16,question17,question18,question19,question20,
                data
                });
        setShow(show + 1)
        setMark(result);
        }

    return (
        <div className="test-page-wrapper">
            <div className="test-content-card">
                <h1 className="test-header" id="test-location-title">{location}</h1>
                
                {next === "no" && (
                    <form id="quiz-form-1" className="quiz-form" onSubmit={handleSubmit}>
                        
                        {/* Question 1 */}
                        <div className="question-group" id="q-group-1">
                            <label htmlFor="question1" className="question-label">{data[0].question}</label>
                            <select id="question1" className="answer-select" value={question1} onChange={(e) => setQuestion1(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[0].answer1}>{data[0].answer1}</option>
                                <option value={data[0].answer2}>{data[0].answer2}</option>
                                <option value={data[0].answer3}>{data[0].answer3}</option>
                                <option value={data[0].answer4}>{data[0].answer4}</option>
                            </select>
                        </div>

                        {/* Question 2 */}
                        <div className="question-group" id="q-group-2">
                            <label htmlFor="question2" className="question-label">{data[1].question}</label>
                            <select id="question2" className="answer-select" value={question2} onChange={(e) => setQuestion2(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[1].answer1}>{data[1].answer1}</option>
                                <option value={data[1].answer2}>{data[1].answer2}</option>
                                <option value={data[1].answer3}>{data[1].answer3}</option>
                                <option value={data[1].answer4}>{data[1].answer4}</option>
                            </select>
                        </div>

                        {/* Question 3 */}
                        <div className="question-group" id="q-group-3">
                            <label htmlFor="question3" className="question-label">{data[2].question}</label>
                            <select id="question3" className="answer-select" value={question3} onChange={(e) => setQuestion3(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[2].answer1}>{data[2].answer1}</option>
                                <option value={data[2].answer2}>{data[2].answer2}</option>
                                <option value={data[2].answer3}>{data[2].answer3}</option>
                                <option value={data[2].answer4}>{data[2].answer4}</option>
                            </select>
                        </div>

                        {/* Question 4 */}
                        <div className="question-group" id="q-group-4">
                            <label htmlFor="question4" className="question-label">{data[3].question}</label>
                            <select id="question4" className="answer-select" value={question4} onChange={(e) => setQuestion4(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[3].answer1}>{data[3].answer1}</option>
                                <option value={data[3].answer2}>{data[3].answer2}</option>
                                <option value={data[3].answer3}>{data[3].answer3}</option>
                                <option value={data[3].answer4}>{data[3].answer4}</option>
                            </select>
                        </div>

                        {/* Question 5 */}
                        <div className="question-group" id="q-group-5">
                            <label htmlFor="question5" className="question-label">{data[4].question}</label>
                            <select id="question5" className="answer-select" value={question5} onChange={(e) => setQuestion5(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[4].answer1}>{data[4].answer1}</option>
                                <option value={data[4].answer2}>{data[4].answer2}</option>
                                <option value={data[4].answer3}>{data[4].answer3}</option>
                                <option value={data[4].answer4}>{data[4].answer4}</option>
                            </select>
                        </div>

                        {/* Question 6 */}
                        <div className="question-group" id="q-group-6">
                            <label htmlFor="question6" className="question-label">{data[5].question}</label>
                            <select id="question6" className="answer-select" value={question6} onChange={(e) => setQuestion6(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[5].answer1}>{data[5].answer1}</option>
                                <option value={data[5].answer2}>{data[5].answer2}</option>
                                <option value={data[5].answer3}>{data[5].answer3}</option>
                                <option value={data[5].answer4}>{data[5].answer4}</option>
                            </select>
                        </div>

                        {/* Question 7 */}
                        <div className="question-group" id="q-group-7">
                            <label htmlFor="question7" className="question-label">{data[6].question}</label>
                            <select id="question7" className="answer-select" value={question7} onChange={(e) => setQuestion7(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[6].answer1}>{data[6].answer1}</option>
                                <option value={data[6].answer2}>{data[6].answer2}</option>
                                <option value={data[6].answer3}>{data[6].answer3}</option>
                                <option value={data[6].answer4}>{data[6].answer4}</option>
                            </select>
                        </div>

                        {/* Question 8 */}
                        <div className="question-group" id="q-group-8">
                            <label htmlFor="question8" className="question-label">{data[7].question}</label>
                            <select id="question8" className="answer-select" value={question8} onChange={(e) => setQuestion8(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[7].answer1}>{data[7].answer1}</option>
                                <option value={data[7].answer2}>{data[7].answer2}</option>
                                <option value={data[7].answer3}>{data[7].answer3}</option>
                                <option value={data[7].answer4}>{data[7].answer4}</option>
                            </select>
                        </div>

                        {/* Question 9 */}
                        <div className="question-group" id="q-group-9">
                            <label htmlFor="question9" className="question-label">{data[8].question}</label>
                            <select id="question9" className="answer-select" value={question9} onChange={(e) => setQuestion9(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[8].answer1}>{data[8].answer1}</option>
                                <option value={data[8].answer2}>{data[8].answer2}</option>
                                <option value={data[8].answer3}>{data[8].answer3}</option>
                                <option value={data[8].answer4}>{data[8].answer4}</option>
                            </select>
                        </div>

                        {/* Question 10 */}
                        <div className="question-group" id="q-group-10">
                            <label htmlFor="question10" className="question-label">{data[9].question}</label>
                            <select id="question10" className="answer-select" value={question10} onChange={(e) => setQuestion10(e.target.value)}>
                                <option value="">select</option>
                                <option value={data[9].answer1}>{data[9].answer1}</option>
                                <option value={data[9].answer2}>{data[9].answer2}</option>
                                <option value={data[9].answer3}>{data[9].answer3}</option>
                                <option value={data[9].answer4}>{data[9].answer4}</option>
                            </select>
                        </div>

                        <button type='submit' className="submit-btn">Submit</button>
                    </form>  
                )} 
                
                { show === 1 && next === "no" && <h1 id="result-mark-1" className="result-mark result-mark--fail">{mark}</h1>} 
                
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
                { show === 2 && <h1 id="result-mark-2" className="result-mark result-mark--pass">{mark}</h1>} 
            </div>
        </div>
    )
    }

export default MainTest;