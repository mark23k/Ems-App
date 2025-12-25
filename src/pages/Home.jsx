import { useNavigate } from 'react-router-dom';
import '../style/home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-content">
        <header className="home-header">
          <div className="logo-icon">🚑</div>
          <h1 className="home-title">EMS Academy</h1>
          <p className="home-tagline">Master the skills. Save the life.</p>
        </header>

        <div className="home-buttons-grid">
          <button className="home-btn learn" onClick={() => navigate('/Learn')}>
            <span className="btn-icon">📚</span>
            <div className="btn-info">
              <span className="btn-label">Learn</span>
              <span className="btn-sub">Study Protocols & Patho</span>
            </div>
          </button>

          <button className="home-btn test" onClick={() => navigate('/Test')}>
            <span className="btn-icon">📝</span>
            <div className="btn-info">
              <span className="btn-label">Test</span>
              <span className="btn-sub">NREMT Style Practice</span>
            </div>
          </button>

          <button className="home-btn diagnosis" onClick={() => navigate('/Diagnosis')}>
            <span className="btn-icon">🩺</span>
            <div className="btn-info">
              <span className="btn-label">Diagnosis</span>
              <span className="btn-sub">Clinical Decision Support</span>
            </div>
          </button>
        </div>

        <footer className="home-footer">
          <p>Standardized Education for Emergency Professionals</p>
        </footer>
      </div>
    </div>
  );
}