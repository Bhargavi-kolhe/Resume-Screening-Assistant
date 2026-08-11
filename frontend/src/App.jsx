import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Upload from "./pages/Upload.jsx";
import ScreeningResults from "./pages/ScreeningResults.jsx";
import CandidateAnalysis from "./pages/CandidateAnalysis.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/results" element={<ScreeningResults />} />
      <Route path="/analysis" element={<CandidateAnalysis />} />
    </Routes>
  );
}
