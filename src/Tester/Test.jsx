import { useNavigate } from 'react-router-dom';
import '../style/test_menu.css'; 

function Test() {
    const navigate = useNavigate();
    
    return (
        <div className="test-menu-container">
            <header className="test-menu-header">
                <span className="test-badge">Exam Prep</span>
                <h1 className="test-title">EMT Knowledge Check</h1>
                <p className="test-subtitle">Select a category to test your knowledge or take the full simulated NREMT exam.</p>
            </header>

            <main className="test-grid-container">
                <div className="test-grid">
                    <button className="test-card" onClick={() => navigate('/test/respiratory_test')}>
                        <span className="test-icon">🫁</span>
                        <div className="test-info">
                            <span className="test-label">Respiratory</span>
                        </div>
                    </button>

                    <button className="test-card" onClick={() => navigate('/test/cardiac_test')}>
                        <span className="test-icon">🫀</span>
                        <div className="test-info">
                            <span className="test-label">Cardiac</span>
                        </div>
                    </button>

                    <button className="test-card" onClick={() => navigate('/test/abdominal_test')}>
                        <span className="test-icon">🧪</span>
                        <div className="test-info">
                            <span className="test-label">Abdominal</span>
                        </div>
                    </button>

                    <button className="test-card" onClick={() => navigate('/test/obgyn_test')}>
                        <span className="test-icon">👶</span>
                        <div className="test-info">
                            <span className="test-label">OB/GYN</span>
                        </div>
                    </button>

                    <button className="test-card" onClick={() => navigate('/test/burns_test')}>
                        <span className="test-icon">🔥</span>
                        <div className="test-info">
                            <span className="test-label">Burns</span>
                        </div>
                    </button>

                    <button className="test-card" onClick={() => navigate('/test/ams_test')}>
                        <span className="test-icon">🧠</span>
                        <div className="test-info">
                            <span className="test-label">AMS</span>
                        </div>
                    </button>

                    <button className="test-card" onClick={() => navigate('/test/trauma_test')}>
                        <span className="test-icon">🩸</span>
                        <div className="test-info">
                            <span className="test-label">Trauma</span>
                        </div>
                    </button>

                    {/* Featured Full Test Card */}
                    <button className="test-card featured" onClick={() => navigate('/test/full_test')}>
                        <span className="test-icon">🎓</span>
                        <div className="test-info">
                            <span className="test-label">Full Mock Exam</span>
                            <span className="test-sub">70-120 Questions</span>
                        </div>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Test;