import { useState, useEffect, useMemo } from "react";
import { FullData } from './test_data';
import '../style/full_test.css';

export default function FullTest() {
    // --- State ---
    const [answer, setAnswer] = useState({});
    const [page, setPage] = useState(0);
    const [mark, setMark] = useState(null);
    const [show, setShow] = useState(0); // 0 = Quiz, 1 = Results/Review

    // --- Logic: Pick 50 Random Questions once per session ---
    const selectedQuestions = useMemo(() => {
        return [...FullData]
            .sort(() => 0.5 - Math.random())
            .slice(0, 50);
    }, []);

    const questionsPerPage = 10;
    const start = page * questionsPerPage;
    const end = start + questionsPerPage;
    const currentQuestions = selectedQuestions.slice(start, end);

    // Auto-scroll to top when page changes or test ends
    useEffect(() => { 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, [page, show]);

    const handleChange = (index, value) => {
        setAnswer((prev) => ({ ...prev, [index]: value }));
    };

    const calculateGrade = () => {
        let total = 0;
        selectedQuestions.forEach((q, i) => {
            if (answer[i] === q.correct) total++;
        });
        return Math.round((total / selectedQuestions.length) * 100);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMark(calculateGrade());
        setShow(1);
    };

    // --- VIEW: RESULTS & WEAKNESS REPORT ---
    if (show === 1) {
        const missedQuestions = selectedQuestions.filter((q, i) => answer[i] !== q.correct);

        return (
            <div className="quiz-page-wrapper">
                <div className="result-summary-card">
                    <h1 className={mark >= 70 ? "result--pass" : "result--fail"}>
                        {mark >= 70 ? `Passed: ${mark}% 🥳` : `Failed: ${mark}% 😔`}
                    </h1>
                    <p className="summary-stats">You missed {missedQuestions.length} out of 50 questions.</p>
                    <button className="retake-btn" onClick={() => window.location.reload()}>
                        Take a New Test
                    </button>
                </div>

                <div className="review-section">
                    <h2 className="review-title">Weakness Report</h2>
                    <p className="review-subtitle">Reviewing only the questions you missed:</p>
                    
                    <div className="review-list">
                        {missedQuestions.length > 0 ? (
                            selectedQuestions.map((q, i) => {
                                if (answer[i] !== q.correct) {
                                    return (
                                        <div key={i} className="review-item incorrect-border">
                                            <p className="review-q"><strong>Question {i + 1}:</strong> {q.question}</p>
                                            <div className="review-answers">
                                                <p className="ans-wrong">Your Answer: <span>{answer[i] || "Skipped"}</span></p>
                                                <p className="ans-actual">Correct Answer: <span>{q.correct}</span></p>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })
                        ) : (
                            <div className="perfect-score-message">
                                <h2>Perfect 50/50! 🏆</h2>
                                <p>Excellent work. You have mastered all the material in this set.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // --- VIEW: ACTIVE QUIZ ---
    return (
        <div className="quiz-page-wrapper">
            <header className="test-header">
                <h1 className="quiz-title">EMT Full Practice Exam</h1>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${((page + 1) / 5) * 100}%` }}></div>
                </div>
                <p className="test-subtitle">Page {page + 1} of 5 (50 Questions Total)</p>
            </header>
            
            <form onSubmit={handleSubmit} className="full-quiz-form">
                <div className="questions-grid">
                    {currentQuestions.map((q, index) => {
                        const realIndex = start + index;
                        return (
                            <div key={realIndex} className="question-group">
                                <label className="question-label">
                                    <span className="q-number">{realIndex + 1}.</span> {q.question}
                                </label>
                                <select
                                    className="answer-select"
                                    value={answer[realIndex] || ""}
                                    onChange={(e) => handleChange(realIndex, e.target.value)}
                                    required
                                >
                                    <option value="">Select an answer...</option>
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
                            Back
                        </button>
                    )}

                    {end < 50 ? (
                        <button type="button" className="nav-button nav-button--next" onClick={() => setPage(page + 1)}>
                            Next Page
                        </button>
                    ) : (
                        <button type="submit" className="submit-button">Submit Exam</button>
                    )}
                </div>
            </form>
        </div>
    );
}