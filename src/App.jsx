import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Test from './Tester/Test';
import Diagnosis from './Assessment/Diagnosis';
import MainTest from './Tester/test_main';
import FullTest from './Tester/full_test';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Learn page */}
        <Route path="/learn" element={<Learn />} />

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
