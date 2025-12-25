import { useNavigate } from 'react-router-dom';
import '../../style/StudyStyle.css'; 

function RespiratoryStudy() {
    const navigate = useNavigate();
    
    return (
        <div className="study-container">
            <header className="study-header">
                <span className="category-badge respiratory">Respiratory System</span>
                <h1 className="study-title">Respiratory Study</h1>
                <p className="study-subtitle">Differentiate between upper and lower airway emergencies and master oxygenation.</p>
            </header>

            <main className="selection-grid">
                <div className="grid-wrapper">
                    <button id="asthma" className="menu-card" onClick={() => navigate('/learn/respiratory/asthma')}>
                        <span className="card-icon">😮‍💨</span>
                        <span className="card-text">Asthma</span>
                    </button>
                    
                    <button id="anaphylaxis" className="menu-card" onClick={() => navigate('/learn/respiratory/anaphylaxis')}>
                        <span className="card-icon">🐝</span>
                        <span className="card-text">Anaphylaxis</span>
                    </button>
                    
                    <button id="copd" className="menu-card" onClick={() => navigate('/learn/respiratory/pe')}>
                        <span className="card-icon">🚬</span>
                        <span className="card-text">Pulmonary Embolism (PE)</span>
                    </button>
                    
                    <button id="croup" className="menu-card" onClick={() => navigate('/learn/respiratory/croup')}>
                        <span className="card-icon">🐕</span>
                        <span className="card-text">Croup</span>
                    </button>
                    
                    <button id="bronchitis" className="menu-card" onClick={() => navigate('/learn/respiratory/bronchitis')}>
                        <span className="card-icon">🧪</span>
                        <span className="card-text">Bronchitis</span>
                    </button>
                    
                    <button id="pneumonia" className="menu-card" onClick={() => navigate('/learn/respiratory/pneumonia')}>
                        <span className="card-icon">🤒</span>
                        <span className="card-text">Pneumonia</span>
                    </button>
                    
                    <button id="emphysema" className="menu-card" onClick={() => navigate('/learn/respiratory/emphysema')}>
                        <span className="card-icon">🎈</span>
                        <span className="card-text">Emphysema</span>
                    </button>
                </div>
            </main>

            <section className="study-footer-info">
                <h3>Lung Sound Quick-Guide</h3>
                <p><strong>Wheezing:</strong> Narrowed lower airways (Asthma). <strong>Stridor:</strong> Upper airway blockage (Croup). <strong>Crackles:</strong> Fluid in the lungs (Pneumonia/CHF).</p>
            </section>
        </div>
    );
}

export default RespiratoryStudy;