import { useNavigate } from 'react-router-dom';
import '../../style/StudyStyle.css'; 

function BurnsStudy() {
    const navigate = useNavigate();
    
    return (
        <div className="study-container">
            <header className="study-header">
                <span className="category-badge orange">Trauma & Burns</span>
                <h1 className="study-title">Burns Study</h1>
                <p className="study-subtitle">Understand burn depth, calculation, and critical cooling protocols.</p>
            </header>

            <main className="selection-grid">
                <div className="grid-wrapper">
                    <button className="menu-card" onClick={() => navigate('/learn/burns/superficial')}>
                        <span className="card-icon">☀️</span>
                        <span className="card-text">Superficial</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/burns/partial-thickness')}>
                        <span className="card-icon">💧</span>
                        <span className="card-text">Partial Thickness</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/burns/full-thickness')}>
                        <span className="card-icon">🔥</span>
                        <span className="card-text">Full Thickness</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/burns/inhalation')}>
                        <span className="card-icon">🌬️</span>
                        <span className="card-text">Inhalation Burn</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/burns/chemical')}>
                        <span className="card-icon">🧪</span>
                        <span className="card-text">Chemical Burn</span>
                    </button>
                    
                    <button className="menu-card" onClick={() => navigate('/learn/burns/electrical')}>
                        <span className="card-icon">🔋</span>
                        <span className="card-text">Electrical Burn</span>
                    </button>
                </div>
            </main>
            
            {/* Visual Aid Section */}
            <section className="study-footer-info">
                <h3>The Rule of Nines</h3>
                <p>Always calculate the Total Body Surface Area (TBSA) to determine if the patient needs a specialized Burn Center.</p>
            </section>
        </div>
    );
}

export default BurnsStudy;