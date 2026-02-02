// src/components/LandingPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [debugMode, setDebugMode] = useState(false); // Debug mode add kiya

  // Pehle check karein - TEMPORARY DISABLE
  useEffect(() => {
    // ✅ Comment out localStorage check temporarily
    // const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    // if (hasSeenIntro === 'true') {
    //   navigate('/home');
    // }
    
    // Debug ke liye - Ctrl+Shift+D se toggle kar sakte hain
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setDebugMode(prev => !prev);
        alert(`Debug mode: ${!debugMode}`);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, debugMode]);

  const handleVideoEnd = () => {
    // ✅ Comment out temporarily ya debug mode mein na chale
    if (!debugMode) {
      localStorage.setItem('hasSeenIntro', 'true');
    }
    
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/home');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSkip = () => {
    // ✅ Comment out temporarily
    if (!debugMode) {
      localStorage.setItem('hasSeenIntro', 'true');
    }
    navigate('/home');
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
      {/* Debug Mode Indicator */}
      {debugMode && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm z-50">
          DEBUG MODE - localStorage disabled
        </div>
      )}
      
      <div className="relative w-full max-w-4xl">
        <video
          autoPlay
          onEnded={handleVideoEnd}
          className="w-full h-auto rounded-xl"
          controls // ✅ Controls add karein manually test karne ke liye
        >
          {/* ✅ VIDEO PATH FIX: Sirf /team-intro.mp4 (public folder se) */}
          <source src="/team-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 px-4 py-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition"
        >
          Skip
        </button>
        
        {countdown < 5 && countdown > 0 && (
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
            {countdown}s
          </div>
        )}
      </div>
      
      <div className="mt-6 text-white text-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Team 4bit
        </h1>
        
        {/* Gradient Animation CSS */}
        <style>
          {`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradientShift 3s ease infinite;
            }
          `}
        </style>
      </div>
      
      {/* Debug Instructions */}
      {debugMode && (
        <div className="mt-4 text-gray-400 text-sm">
          <p>Debug Mode Active - localStorage is disabled</p>
          <p>Press Ctrl+Shift+D again to disable debug</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;