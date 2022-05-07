import './App.css';
import AppIndex from './pages/AppIndex.js';
import AppDetail from './pages/AppDetail.js';
import AppAbout from './pages/AppAbout.js';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/signup';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AppIndex />} />
        <Route path="/detail/:id" element={<AppDetail />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/about" element={<AppAbout />} />
      </Routes>
    </div>
  );
}

export default App;
