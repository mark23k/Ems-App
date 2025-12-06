import { useNavigate } from 'react-router-dom';
import '../style/test_menu.css'; // Link to the new CSS file

function Test() {
    const navigate = useNavigate();
    
    return (
        <div className="menu-wrapper">
            <div className="menu-card">
                <h1 className="menu-header">EMT Test</h1>
                
                <div className="test-btn-group">
                    <button id="respiratory-test" className="test-button" onClick={() => navigate('/test/respiratory_test')}>Respiratory</button>
                    <button id="cardiac-test" className="test-button" onClick={() => navigate('/test/cardiac_test')}>Cardiac</button>
                    <button id="abdominal-test" className="test-button" onClick={() => navigate('/test/abdominal_test')}>Abdominal</button>
                    <button id="obgyn-test" className="test-button" onClick={() => navigate('/test/obgyn_test')}>Obgyn</button>
                    <button id="burns-test" className="test-button" onClick={() => navigate('/test/burns_test')}>Burns</button>
                    <button id="ams-test" className="test-button" onClick={() => navigate('/test/ams_test')}>Altered Mental Status</button>
                    <button id="trauma-test" className="test-button" onClick={() => navigate('/test/trauma_test')}>Trauma</button>
                    <button id="full-test" className="test-button button--featured" onClick={() => navigate('/test/full_test')}>Full Test</button>
                </div>
            </div>
        </div>
    )
}
export default Test