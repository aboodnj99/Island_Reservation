import './App.css';
import AppIndex from './pages/AppIndex.js';
import AppDetail from './pages/AppDetail.js';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AppIndex />} />
        <Route path="/detail/:id" element={<AppDetail />} />
      </Routes>
    </div>
  );
}

export default App;
