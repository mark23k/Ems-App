import { useState, useEffect } from "react";
import { FullData } from './test_data';
import '../style/full_test.css'; // Link to the new CSS file

export default function FullTest() {

    const [answer, setAnswer] = useState({});
    const [page, setPage] = useState(0);
    const [mark, setMark] = useState(null);
    const [show, setShow] = useState(0);

    const questionsPerPage = 10;
    const start = page * questionsPerPage;
    const end = start + questionsPerPage;

    const currentQuestions = FullData.slice(start, end);   // Only this page's questions

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [page]); // This triggers every time the page number changes

    function handleChange(index, value) {
        setAnswer((prev) => ({
            ...prev,
            [index]: value
        }));
    }


    // Grade using ALL QUESTIONS, not just current page
    function Grade() {
        let total = 0;

        for (let i = 0; i < FullData.length; i++) {
            if (answer[i] === FullData[i].correct) {
                total++;
            }
        }

        return Math.round((total / FullData.length) * 100);  // percentage
    }

    function handleSubmit(e) {
        e.preventDefault();
        setMark(Grade());
        setShow(1);
    }

    // STOP and show PASS/FAIL first
    if (show === 1) {
        // Updated JSX structure for result page
        if (mark >= 70) {
            return (
                <div className="quiz-page-wrapper">
                    <h1 className="test-result-header result--pass">You Passed: {mark}% 🥳</h1>
                </div>
            );
        } else {
            return (
                <div className="quiz-page-wrapper">
                    <h1 className="test-result-header result--fail">You Failed: {mark}% 😔</h1>
                </div>
            );
        }
    }

    return (
        <div className="quiz-page-wrapper">
            <h1 className="quiz-title">Full EMT Practice Test (Page {page + 1} of {Math.ceil(FullData.length / questionsPerPage)})</h1>
            
            <form onSubmit={handleSubmit} className="full-quiz-form">
                
                <div className="questions-grid">
                {currentQuestions.map((q, index) => {
                    const realIndex = start + index; // global question index

                    return (
                        <div key={realIndex} id={`question-${realIndex + 1}`} className="question-group">
                            <label htmlFor={`select-${realIndex}`} className="question-label">
                                {realIndex + 1}. {q.question}
                            </label>

                            <select
                                id={`select-${realIndex}`}
                                className="answer-select"
                                value={answer[realIndex] || ""}
                                onChange={(e) => handleChange(realIndex, e.target.value)}
                            >
                                <option value="">Select an answer</option>
                                <option value={q.answer1}>{q.answer1}</option>
                                <option value={q.answer2}>{q.answer2}</option>
                                <option value={q.answer3}>{q.answer3}</option>
                                <option value={q.answer4}>{q.answer4}</option>
                            </select>
                        </div>
                    );
                })}
                </div>

                <div className="quiz-navigation-controls">
                    {page > 0 && (
                        <button type="button" className="nav-button nav-button--prev" onClick={() => setPage(page - 1)}>
                            &larr; Previous Page
                        </button>
                    )}

                    {end < FullData.length && (
                        <button type="button" className="nav-button nav-button--next" onClick={() => setPage(page + 1)}>
                            Next Page &rarr;
                        </button>
                    )}

                    {end >= FullData.length && (
                        <button type="submit" className="submit-button">Submit Full Test</button>
                    )}
                </div>
            </form>
        </div>
    );
}