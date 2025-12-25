import { useNavigate } from 'react-router-dom';
import '../../style/StudyStyle.css'; 

function AmsStudy() {
    const navigate = useNavigate();
    
    return (
        <div className="study-container">
            <header className="study-header">
                <span className="category-badge medical">Neurological / AMS</span>
                <h1 className="study-title">AMS Study</h1>
                <p className="study-subtitle">Assess the brain's "Fuel, Plumbing, and Electricity" to find the root cause of confusion.</p>
            </header>

            <main className="selection-grid">
                <div className="grid-wrapper">
                    <button id="hypoglycemia" className="menu-card" onClick={() => navigate('/learn/ams/hypoglycemia')}>
                        <span className="card-icon">📉</span>
                        <span className="card-text">Hypoglycemia</span>
                    </button>
                    
                    <button id="hyperglycemia" className="menu-card" onClick={() => navigate('/learn/ams/hyperglycemia')}>
                        <span className="card-icon">📈</span>
                        <span className="card-text">Hyperglycemia</span>
                    </button>
                    
                    <button id="cva" className="menu-card" onClick={() => navigate('/learn/ams/cva-stroke')}>
                        <span className="card-icon">🧠</span>
                        <span className="card-text">Stroke (CVA)</span>
                    </button>
                    
                    <button id="tia" className="menu-card" onClick={() => navigate('/learn/ams/tia')}>
                        <span className="card-icon">⏱️</span>
                        <span className="card-text">TIA</span>
                    </button>
                    
                    <button id="meningitis" className="menu-card" onClick={() => navigate('/learn/ams/meningitis')}>
                        <span className="card-icon">🌡️</span>
                        <span className="card-text">Meningitis</span>
                    </button>
                    
                    <button id="seizures" className="menu-card" onClick={() => navigate('/learn/ams/seizures')}>
                        <span className="card-icon">⚡</span>
                        <span className="card-text">Seizures</span>
                    </button>
                </div>
            </main>

            <section className="study-footer-info">
                <h3>The AEIOU-TIPS Diagnostic</h3>
                <p>Always consider Alcohol, Epilepsy, Insulin, Overdose, Uremia, Trauma, Infection, Psychosis, or Stroke when assessing a confused patient.</p>
            </section>
        </div>
    );
}

export default AmsStudy;