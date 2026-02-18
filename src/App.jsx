import LandingPage from './LandingPage';
import GeneratePage from './GeneratePage';
import { Routes, Route } from 'react-router-dom';

function App () {
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/generate/:platformId" element={<GeneratePage />} />
    </Routes>
  );
}
export default App;