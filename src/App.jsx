import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Test from './Tester/Test';
import Diagnosis from './Assessment/Diagnosis';
import MainTest from './Tester/test_main';
import FullTest from './Tester/full_test';
import RespiratoryStudy from './learning/respiratory/respiratory_study';
import AllStudy from './learning/main_study';
import AbdominalStudy from './learning/abdominal/abdominal_study';
import ObgynStudy from './learning/obgyn/obgyn_study';
import CardiacStudy from './learning/cardiac/cardiac_study';
import AmsStudy from './learning/ams/ams_study';
import TraumaStudy from './learning/trauma/trauma_study';
import BurnsStudy from './learning/burns/burns_study';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Learn page */}
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/respiratory" element={<RespiratoryStudy />} />
        <Route path="/learn/abdominal" element={<AbdominalStudy />} />
        <Route path="/learn/obgyn" element={ <ObgynStudy /> } />
        <Route path="/learn/cardiac" element={<CardiacStudy />} />
        <Route path="/learn/ams" element={<AmsStudy />} />
        <Route path="/learn/trauma" element={<TraumaStudy />} />
        <Route path="/learn/burns" element={<BurnsStudy />} />
        

        {/*respiratory Page */}
        <Route path="/learn/respiratory/asthma" element={<AllStudy />} />
        <Route path="/learn/respiratory/anaphylaxis" element={<AllStudy />} />
        <Route path="/learn/respiratory/copd" element={<AllStudy />} />
        <Route path="/learn/respiratory/croup" element={<AllStudy />} />
        <Route path="/learn/respiratory/bronchitis" element={<AllStudy />} />
        <Route path="/learn/respiratory/pneumonia" element={<AllStudy />} />
        <Route path="/learn/respiratory/emphysema" element={<AllStudy />} />

        {/*Cardiac Page */}
        <Route path="/learn/cardiac/mi" element={<AllStudy />} />
        <Route path="/learn/cardiac/chf" element={<AllStudy />} />
        <Route path="/learn/cardiac/angina" element={<AllStudy />} />
        <Route path="/learn/cardiac/aortic" element={<AllStudy />} />
        <Route path="/learn/cardiac/tamponade" element={<AllStudy />} />
        <Route path="/learn/cardiac/p-edema" element={<AllStudy />} />
        <Route path="/learn/cardiac/pe" element={<AllStudy />} />

        {/*Abdominal Page */}
        <Route path="/learn/abdominal/aaa" element={<AllStudy />} />
        <Route path="/learn/abdominal/appendicitis" element={<AllStudy />} />
        <Route path="/learn/abdominal/pancreatitis" element={<AllStudy />} />
        <Route path="/learn/abdominal/hernia" element={<AllStudy />} />
        <Route path="/learn/abdominal/diverticulitis" element={<AllStudy />} />
        <Route path="/learn/abdominal/diverticulosis" element={<AllStudy />} />
        <Route path="/learn/abdominal/renalColic" element={<AllStudy />} />
        <Route path="/learn/abdominal/cholecystitis" element={<AllStudy />} />
        <Route path="/learn/abdominal/utiPyelonephritis" element={<AllStudy />} />

        {/*Obgyn Page */}
        <Route path="/learn/obgyn/normal-birth" element={<AllStudy />} />
        <Route path="/learn/obgyn/eclampsia" element={<AllStudy />} />
        <Route path="/learn/obgyn/placenta-previa" element={<AllStudy />} />
        <Route path="/learn/obgyn/abruptio" element={<AllStudy />} />
        <Route path="/learn/obgyn/nuchal-cord" element={<AllStudy />} />
        <Route path="/learn/obgyn/gbs" element={<AllStudy />} />
        <Route path="/learn/obgyn/gestational-diabetes" element={<AllStudy />} />
        {/*Trauma Page */}
        <Route path="/learn/trauma/pneumothorax" element={<AllStudy />} />
        <Route path="/learn/trauma/sucking-chest" element={<AllStudy />} />
        <Route path="/learn/trauma/flail-chest" element={<AllStudy />} />
        <Route path="/learn/trauma/arterial-bleed" element={<AllStudy />} />
        <Route path="/learn/trauma/shock" element={<AllStudy />} />
        <Route path="/learn/trauma/amputation" element={<AllStudy />} />
        <Route path="/learn/trauma/evisceration" element={<AllStudy />} />
        <Route path="/learn/trauma/drowning" element={<AllStudy />} />
        <Route path="/learn/trauma/cardiac-contusion" element={<AllStudy />} />
        <Route path="/learn/trauma/simple-cut" element={<AllStudy />} />
        {/*Burns Page */}
        {/* Burn Routes */}
        <Route path="/learn/burns/superficial" element={<AllStudy />} />
        <Route path="/learn/burns/partial-thickness" element={<AllStudy />} />
        <Route path="/learn/burns/full-thickness" element={<AllStudy />} />
        <Route path="/learn/burns/inhalation" element={<AllStudy />} />
        <Route path="/learn/burns/chemical" element={<AllStudy />} />
        <Route path="/learn/burns/electrical" element={<AllStudy />} />
        {/*Ams Page */}
        <Route path="/learn/ams/hypoglycemia" element={<AllStudy />} />
        <Route path="/learn/ams/hyperglycemia" element={<AllStudy />} />
        <Route path="/learn/ams/cva-stroke" element={<AllStudy />} />
        <Route path="/learn/ams/tia" element={<AllStudy />} />
        <Route path="/learn/ams/meningitis" element={<AllStudy />} />
        <Route path="/learn/ams/seizures" element={<AllStudy />} />
        {/*Test Page */}
        <Route path="/test" element={<Test />} />
        <Route path="/test/respiratory_test" element={<MainTest />} />
        <Route path="/test/cardiac_test" element={<MainTest />} />
        <Route path="/test/abdominal_test" element={<MainTest />} />
        <Route path="/test/obgyn_test" element={<MainTest />} />
        <Route path="/test/trauma_test" element={<MainTest />} />
        <Route path="/test/burns_test" element={<MainTest />} />
        <Route path="/test/ams_test" element={<MainTest />} />
        <Route path="/test/full_test" element={<FullTest />} />
        {/*Diagnosis Page */}
        <Route path="/diagnosis" element={<Diagnosis />} />
      </Routes>
    </Router>
  );
}

export default App;
