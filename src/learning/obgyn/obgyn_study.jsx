import { useNavigate } from 'react-router-dom';
import '../../style/StudyStyle.css'; 

function ObgynStudy() {
    const navigate = useNavigate();
    
    return (
        <div className="study-container">
            <header className="study-header">
                <span className="category-badge obgyn">Obstetrics & Gynecology</span>
                <h1 className="study-title">OB/GYN Study</h1>
                <p className="study-subtitle">From normal delivery to life-threatening pregnancy complications.</p>
            </header>

            <main className="selection-grid">
                <div className="grid-wrapper">
                    <button id="normal_birth" className="menu-card" onClick={() => navigate('/learn/obgyn/normal-birth')}>
                        <span className="card-icon">👶</span>
                        <span className="card-text">Normal Birth</span>
                    </button>
                    
                    <button id="preeclampsia" className="menu-card" onClick={() => navigate('/learn/obgyn/eclampsia')}>
                        <span className="card-icon">⚡</span>
                        <span className="card-text">Preeclampsia / Eclampsia</span>
                    </button>
                    
                    <button id="placenta_previa" className="menu-card" onClick={() => navigate('/learn/obgyn/placenta-previa')}>
                        <span className="card-icon">🔴</span>
                        <span className="card-text">Placenta Previa</span>
                    </button>
                    
                    <button id="abruptio" className="menu-card" onClick={() => navigate('/learn/obgyn/abruptio')}>
                        <span className="card-icon">💔</span>
                        <span className="card-text">Abruptio Placentae</span>
                    </button>
                    
                    <button id="nuchal" className="menu-card" onClick={() => navigate('/learn/obgyn/nuchal-cord')}>
                        <span className="card-icon">🪢</span>
                        <span className="card-text">Cord Emergencies</span>
                    </button>
                    
                    <button id="gbs" className="menu-card" onClick={() => navigate('/learn/obgyn/gbs')}>
                        <span className="card-icon">🦠</span>
                        <span className="card-text">GBS Infection</span>
                    </button>
                    
                    <button id="gestational" className="menu-card" onClick={() => navigate('/learn/obgyn/gestational-diabetes')}>
                        <span className="card-icon">🍭</span>
                        <span className="card-text">Gestational Diabetes</span>
                    </button>    
                </div>
            </main>

            <section className="study-footer-info">
                <h3>The Neonatal Priority</h3>
                <p>Remember the 1-minute and 5-minute APGAR score. If the newborn is blue, limp, or has a heart rate &lt; 100, begin BVM ventilations immediately.</p>
            </section>
        </div>
    );
}

export default ObgynStudy;