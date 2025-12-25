import { useNavigate } from 'react-router-dom';
import '../../style/StudyStyle.css'; 

function TraumaStudy() {
    const navigate = useNavigate();
    
    return (
        <div className="study-container">
            <header className="study-header">
                <span className="category-badge trauma">Trauma & Hemorrhage</span>
                <h1 className="study-title">Trauma Study</h1>
                <p className="study-subtitle">Rapid identification and stabilization of life-threatening kinetic injuries.</p>
            </header>

            <main className="selection-grid">
                <div className="grid-wrapper">
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/pneumothorax')}>
                        <span className="card-icon">🫁</span>
                        <span className="card-text">Pneumothorax</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/sucking-chest')}>
                        <span className="card-icon">🎯</span>
                        <span className="card-text">Sucking Chest Wound</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/flail-chest')}>
                        <span className="card-icon">🦴</span>
                        <span className="card-text">Flail Chest</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/arterial-bleed')}>
                        <span className="card-icon">🩸</span>
                        <span className="card-text">Arterial Bleed</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/shock')}>
                        <span className="card-icon">⚠️</span>
                        <span className="card-text">Shock</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/amputation')}>
                        <span className="card-icon">✂️</span>
                        <span className="card-text">Amputation</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/evisceration')}>
                        <span className="card-icon">🩹</span>
                        <span className="card-text">Evisceration</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/drowning')}>
                        <span className="card-icon">🌊</span>
                        <span className="card-text">Drowning</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/cardiac-contusion')}>
                        <span className="card-icon">💥</span>
                        <span className="card-text">Cardiac Contusion</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/trauma/simple-cut')}>
                        <span className="card-icon">🩹</span>
                        <span className="card-text">Simple Cut</span>
                    </button>
                </div>
            </main>

            <section className="study-footer-info">
                <h3>The XABCDE Priority</h3>
                <p><strong>X:</strong> Exsanguination (Stop the bleed first). <strong>A/B:</strong> Airway/Breathing. <strong>C:</strong> Circulation (Shock). <strong>D:</strong> Disability (Neuro). <strong>E:</strong> Expose/Environment.</p>
            </section>
        </div>
    );
}

export default TraumaStudy;