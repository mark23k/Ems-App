import { useNavigate } from 'react-router-dom';
import '../style/home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">Welcome EMT</h1>

        <div className="home-buttons">
          <button className="btn btn-learn" onClick={() => navigate('/Learn')}>Learn</button>
          <button className="btn btn-test" onClick={() => navigate('/Test')}>Test</button>
          <button className="btn btn-diagnosis" onClick={() => navigate('/Diagnosis')}>Diagnosis</button>
        </div>
      </div>
    </div>
  );
}
