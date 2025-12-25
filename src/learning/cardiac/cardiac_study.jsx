import { useNavigate } from 'react-router-dom';
import '../../style/StudyStyle.css'; 

function CardiacStudy() {
    const navigate = useNavigate();
    
    return (
        <div className="study-container">
            <header className="study-header">
                <span className="category-badge medical">Cardiovascular</span>
                <h1 className="study-title">Cardiac Study</h1>
                <p className="study-subtitle">Master the "Pipes, Pumps, and Electricity" of the heart.</p>
            </header>

            <main className="selection-grid">
                <div className="grid-wrapper">
                    <button id="mi" className="menu-card" onClick={() => navigate('/learn/cardiac/mi')}>
                        <span className="card-icon">💔</span>
                        <span className="card-text">Heart Attack (MI)</span>
                    </button>
                    
                    <button id="chf" className="menu-card" onClick={() => navigate('/learn/cardiac/chf')}>
                        <span className="card-icon">🌊</span>
                        <span className="card-text">Heart Failure (CHF)</span>
                    </button>
                    
                    <button id="angina" className="menu-card" onClick={() => navigate('/learn/cardiac/angina')}>
                        <span className="card-icon">⚖️</span>
                        <span className="card-text">Angina Pectoris</span>
                    </button>
                    
                    <button id="aortic" className="menu-card" onClick={() => navigate('/learn/cardiac/aortic')}>
                        <span className="card-icon">🗡️</span>
                        <span className="card-text">Aortic Dissection</span>
                    </button>
                    
                    <button id="tamponade" className="menu-card" onClick={() => navigate('/learn/cardiac/tamponade')}>
                        <span className="card-icon">🔒</span>
                        <span className="card-text">Cardiac Tamponade</span>
                    </button>
                    
                    <button id="pedema" className="menu-card" onClick={() => navigate('/learn/cardiac/p-edema')}>
                        <span className="card-icon">🫁</span>
                        <span className="card-text">Pulmonary Edema</span>
                    </button>
                    
                    <button id="pe" className="menu-card" onClick={() => navigate('/learn/cardiac/pe')}>
                        <span className="card-icon">🚫</span>
                        <span className="card-text">Pulmonary Embolism</span>
                    </button>               
                </div>
            </main>

            <section className="study-footer-info">
                <h3>The 3 "No-Go" Rules for Nitroglycerin</h3>
                <p>1. Systolic BP &lt; 100 mmHg | 2. Head Injury | 3. ED Meds (Viagra/Cialis) within 24-48 hours.</p>
            </section>
        </div>
    );
}

export default CardiacStudy;