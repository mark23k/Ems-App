import { useNavigate } from 'react-router-dom';
import '../../style/StudyStyle.css'; // Make sure to import your CSS

function AbdominalStudy() {
    const navigate = useNavigate();
    
    return (
        <div className="study-container">
            <header className="study-header">
                <span className="category-badge">Medical</span>
                <h1 className="study-title">Abdominal Study</h1>
                <p className="study-subtitle">Select a condition to view pathophysiology and EMT interventions.</p>
            </header>

            <main className="selection-grid">
                <div className="grid-wrapper">
                    <button id="aaa" className="menu-card" onClick={() => navigate('/learn/abdominal/aaa')}>
                        <span className="card-icon">🫀</span>
                        <span className="card-text">AAA</span>
                    </button>
                    
                    <button id="appendicitis" className="menu-card" onClick={() => navigate('/learn/abdominal/appendicitis')}>
                        <span className="card-icon">🦠</span>
                        <span className="card-text">Appendicitis</span>
                    </button>
                    
                    <button id="pancreatitis" className="menu-card" onClick={() => navigate('/learn/abdominal/pancreatitis')}>
                        <span className="card-icon">🧪</span>
                        <span className="card-text">Pancreatitis</span>
                    </button>
                    
                    <button id="hernia" className="menu-card" onClick={() => navigate('/learn/abdominal/hernia')}>
                        <span className="card-icon">🩹</span>
                        <span className="card-text">Hernia</span>
                    </button>
                    
                    <button id="diverticulosis" className="menu-card" onClick={() => navigate('/learn/abdominal/diverticulosis')}>
                        <span className="card-icon">🌀</span>
                        <span className="card-text">Diverticulosis</span>
                    </button>
                    
                    <button id="renalColic" className="menu-card" onClick={() => navigate('/learn/abdominal/renalColic')}>
                        <span className="card-icon">💎</span>
                        <span className="card-text">Renal Colic</span>
                    </button>               
                    
                    <button id="cholecystitis" className="menu-card" onClick={() => navigate('/learn/abdominal/cholecystitis')}>
                        <span className="card-icon">🍔</span>
                        <span className="card-text">Cholecystitis</span>
                    </button>
                    
                    <button id="utiPyelonephritis" className="menu-card" onClick={() => navigate('/learn/abdominal/utiPyelonephritis')}>
                        <span className="card-icon">🚽</span>
                        <span className="card-text">UTI / Kidney</span>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default AbdominalStudy;