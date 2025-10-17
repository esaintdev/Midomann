import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const toggleMobileNav = () => {
    console.log('toggleMobileNav called, current state:', isMobileNavOpen);
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <Router>
      <div className={`${darkMode ? "text-gray-100" : "bg-gray-50 text-gray-800"} min-h-screen flex overflow-x-hidden relative`} style={darkMode ? { backgroundColor: '#242426' } : {}}>
        <div className={`fixed inset-0 pointer-events-none z-0 ${
          darkMode ? "hidden" : "block"
        }`} style={{
          backgroundImage: `
            linear-gradient(rgba(200, 200, 200, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 200, 200, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px'
        }}></div>
        <div className="relative z-10">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <MobileNav 
          isOpen={isMobileNavOpen}
          onClose={closeMobileNav}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} onMenuClick={toggleMobileNav} />} />
            <Route path="/settings" element={<Settings darkMode={darkMode} onMenuClick={toggleMobileNav} setDarkMode={setDarkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
