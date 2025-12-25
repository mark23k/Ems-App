import { useNavigate } from 'react-router-dom';
import '../style/learn.css'; 

function Learn() {
    const navigate = useNavigate();
    
    return (
        <div className="main-menu-container">
            <header className="main-menu-header">
                <div className="star-of-life">🚑</div>
                <h1 className="main-title">EMT Study Guide</h1>
                <p className="main-subtitle">Select a clinical module to begin your review.</p>
            </header>

            <main className="menu-grid">
                <button id="respiratory" className="hub-card respiratory" onClick={() => navigate('/learn/respiratory')}>
                    <span className="hub-icon">🫁</span>
                    <div className="hub-info">
                        <span className="hub-title">Respiratory</span>
                        <span className="hub-desc">Airway, Asthma, COPD</span>
                    </div>
                </button>

                <button id="cardiac" className="hub-card cardiac" onClick={() => navigate('/learn/cardiac')}>
                    <span className="hub-icon">🫀</span>
                    <div className="hub-info">
                        <span className="hub-title">Cardiac</span>
                        <span className="hub-desc">MI, CHF, Nitro Rules</span>
                    </div>
                </button>

                <button id="abdominal" className="hub-card abdominal" onClick={() => navigate('/learn/abdominal')}>
                    <span className="hub-icon">🧪</span>
                    <div className="hub-info">
                        <span className="hub-title">Abdominal</span>
                        <span className="hub-desc">AAA, Appendicitis, GI</span>
                    </div>
                </button>

                <button id="obgyn" className="hub-card obgyn" onClick={() => navigate('/learn/obgyn')}>
                    <span className="hub-icon">👶</span>
                    <div className="hub-info">
                        <span className="hub-title">OB/GYN</span>
                        <span className="hub-desc">Birth & Complications</span>
                    </div>
                </button>

                <button id="burns" className="hub-card burns" onClick={() => navigate('/learn/burns')}>
                    <span className="hub-icon">🔥</span>
                    <div className="hub-info">
                        <span className="hub-title">Burns</span>
                        <span className="hub-desc">Rule of Nines, TBSA</span>
                    </div>
                </button>

                <button id="ams" className="hub-card ams" onClick={() => navigate('/learn/ams')}>
                    <span className="hub-icon">🧠</span>
                    <div className="hub-info">
                        <span className="hub-title">Mental Status</span>
                        <span className="hub-desc">Stroke, Sugar, Seizures</span>
                    </div>
                </button>

                <button id="trauma" className="hub-card trauma" onClick={() => navigate('/learn/trauma')}>
                    <span className="hub-icon">🩸</span>
                    <div className="hub-info">
                        <span className="hub-title">Trauma</span>
                        <span className="hub-desc">Bleeding, Chest, Shock</span>
                    </div>
                </button>
            </main>

            <footer className="main-menu-footer">
                <p>Ready for the NREMT? Keep practicing.</p>
            </footer>
        </div>
    )
}

export default Learn;