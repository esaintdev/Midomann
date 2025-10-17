import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiLock,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiSun,
  FiMoon,
} from "react-icons/fi";

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Sidebar({ darkMode, setDarkMode }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`${darkMode ? "w-56 xl:w-64 flex-col justify-between p-4 xl:p-6 h-screen hidden lg:flex border-r border-gray-700" : "bg-white w-56 xl:w-64 flex-col justify-between p-4 xl:p-6 h-screen hidden lg:flex border-r border-gray-200"}`} style={darkMode ? { backgroundColor: '#100F0F' } : {}}>
      <div>
        <div className="flex items-center justify-center mb-12">
          <img 
            src={darkMode ? "/dark.png" : "/logo.png"}
            alt="Midoman Logo" 
            className="object-contain"
            style={{ width: '158px', height: '40px' }}
          />
        </div>
        
        <div className="w-full h-px bg-gray-200 mb-6"></div>
        
        <nav className="space-y-2 flex flex-col items-center mt-8">
          <Link 
            to="/" 
            className={`flex items-center font-medium transition ${
              isActive("/") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#0660D3] hover:bg-gray-700" 
                  : "text-[#98A2B3] hover:text-[#0660D3] hover:bg-[#0660D3]/10"
            }`}
            style={isActive("/") ? (darkMode ? { 
              backgroundColor: '#242426', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            } : { 
              backgroundColor: '#0660D3', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }) : { 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }}
          >
            <FiHome className="w-5 h-5" /> Home
          </Link>
          <Link 
            to="/escrow" 
            className={`flex items-center font-medium transition ${
              isActive("/escrow") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#0660D3] hover:bg-gray-700" 
                  : "text-[#98A2B3] hover:text-[#0660D3] hover:bg-[#0660D3]/10"
            }`}
            style={isActive("/escrow") ? (darkMode ? { 
              backgroundColor: '#242426', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            } : { 
              backgroundColor: '#0660D3', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }) : { 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }}
          >
            <FiLock className="w-5 h-5" /> Escrow
          </Link>
          <Link 
            to="/transaction" 
            className={`flex items-center font-medium transition ${
              isActive("/transaction") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#0660D3] hover:bg-gray-700" 
                  : "text-[#98A2B3] hover:text-[#0660D3] hover:bg-[#0660D3]/10"
            }`}
            style={isActive("/transaction") ? (darkMode ? { 
              backgroundColor: '#242426', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            } : { 
              backgroundColor: '#0660D3', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }) : { 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }}
          >
            <FiCreditCard className="w-5 h-5" /> Transaction
          </Link>
          <Link 
            to="/settings" 
            className={`flex items-center font-medium transition ${
              isActive("/settings") 
                ? (darkMode ? "text-white" : "text-white") 
                : darkMode 
                  ? "text-gray-300 hover:text-[#0660D3] hover:bg-gray-700" 
                  : "text-[#98A2B3] hover:text-[#0660D3] hover:bg-[#0660D3]/10"
            }`}
            style={isActive("/settings") ? (darkMode ? { 
              backgroundColor: '#242426', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            } : { 
              backgroundColor: '#0660D3', 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }) : { 
              borderRadius: '12px', 
              width: '152px', 
              height: '48px', 
              paddingTop: '12px', 
              paddingRight: '20px', 
              paddingBottom: '12px', 
              paddingLeft: '20px', 
              gap: '12px',
              fontFamily: 'Outfit'
            }}
          >
            <FiSettings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <div className="mt-25 flex flex-col items-center">
          <img 
            src="/new fab.png" 
            alt="New Features" 
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center">
            <div className={`relative flex items-center transition-colors duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`} style={darkMode ? { width: '72px', height: '36px', padding: '2px', borderRadius: '12px', backgroundColor: '#242426' } : { width: '72px', height: '36px', padding: '2px', borderRadius: '12px' }}>
              <div className={`absolute w-8 h-8 transition-transform duration-300 ease-in-out shadow-md ${
                darkMode 
                  ? "bg-[#0660D3] transform translate-x-8" 
                  : "bg-white transform translate-x-0"
              }`} style={{ top: '2px', left: '2px', borderRadius: '50%' }}></div>
              
              <button
                onClick={() => setDarkMode(false)}
                className={`relative z-10 flex items-center justify-center w-8 h-8  transition-colors duration-200 ${
                  !darkMode ? "text-gray-600" : "text-gray-400 hover:text-gray-300"
                }`}
                style={{ borderRadius: '50%' }}
              >
                <FiSun className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setDarkMode(true)}
                className={`relative z-10 flex items-center justify-center w-8 h-8  transition-colors duration-200 ${
                  darkMode ? "text-white" : "text-gray-400 hover:text-gray-600"
                }`}
                style={{ borderRadius: '50%' }}
              >
                <FiMoon className="w-4 h-4" />
              </button>
            </div>
        </div>
        <button className={`w-full flex items-center justify-center gap-2 px-3 xl:px-4 py-2 font-medium font-sans transition ${
          darkMode 
            ? "text-red-400 hover:text-red-300" 
            : "text-red-500 hover:text-red-600"
        }`}>
          <FiLogOut className="w-5 h-5" /> Log out
        </button>
      </div>
    </aside>
  );
}
