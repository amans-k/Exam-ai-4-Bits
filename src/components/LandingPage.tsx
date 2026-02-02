// src/components/LandingPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setDebugMode(prev => !prev);
        alert(`Debug mode: ${!debugMode}`);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [debugMode]);

  const handleVideoEnd = () => {
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
    if (!debugMode) {
      localStorage.setItem('hasSeenIntro', 'true');
    }
    navigate('/home');
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 overflow-hidden">
      {/* Particle Animation Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-particle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.3 + 0.1})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hexagon Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 55%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 55%)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Moving Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-orb-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-orb-medium" />
      <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-orb-fast" />

      {/* Digital Rain Effect (Matrix Style) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-green-400/20 font-mono text-xs animate-digital-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 10}s`,
            }}
          >
            {[...Array(30)].map((_, j) => (
              <div key={j} className="opacity-0 animate-fade-in" style={{
                animationDelay: `${j * 0.2}s`,
              }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Debug Mode Indicator */}
      {debugMode && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm z-50">
          DEBUG MODE - localStorage disabled
        </div>
      )}
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-4xl bg-black/30 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl shadow-blue-500/10">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 rounded-2xl blur-xl" />
          
          <video
            autoPlay
            onEnded={handleVideoEnd}
            className="w-full h-auto rounded-xl relative z-10"
            controls
          >
            <source src="/team-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 px-5 py-2 bg-gradient-to-r from-gray-900/90 to-black/90 text-white rounded-full hover:from-gray-800 hover:to-black transition-all border border-gray-700/50 shadow-lg z-20 backdrop-blur-sm hover:scale-105"
          >
            Skip Intro
          </button>
          
          {countdown < 5 && countdown > 0 && (
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-black/90 to-gray-900/90 text-white px-4 py-2 rounded-full border border-gray-700/50 backdrop-blur-sm z-20">
              Redirecting in <span className="font-bold text-blue-300 animate-pulse">{countdown}s</span>
            </div>
          )}
        </div>
        
        {/* Simplified Team Info */}
        <div className="mt-8 text-center bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl blur-xl" />
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient mb-4 relative z-10">
            Team 4bit
          </h1>
          
          <p className="text-xl text-gray-200 mb-6 relative z-10">
            Transforming Exam Preparation with AI & IoT
          </p>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full border border-blue-500/30">
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></span>
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></span>
              </div>
              <span className="text-gray-300">Ready to transform your preparation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes particle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
          }
          @keyframes orb-slow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, 30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes orb-medium {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-40px, 20px) scale(1.2); }
            66% { transform: translate(30px, -30px) scale(0.8); }
          }
          @keyframes orb-fast {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(50px, -20px) scale(1.3); }
          }
          @keyframes digital-rain {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 0.7; }
          }
          .animate-gradient {
            background-size: 300% 300%;
            animation: gradientShift 4s ease infinite;
          }
          .animate-particle {
            animation: particle linear infinite;
          }
          .animate-orb-slow {
            animation: orb-slow 20s ease-in-out infinite;
          }
          .animate-orb-medium {
            animation: orb-medium 15s ease-in-out infinite;
          }
          .animate-orb-fast {
            animation: orb-fast 10s ease-in-out infinite;
          }
          .animate-digital-rain {
            animation: digital-rain linear infinite;
          }
        `}
      </style>
      
      {/* Debug Instructions */}
      {debugMode && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-gray-300 text-sm p-3 rounded-lg backdrop-blur-sm border border-white/10">
          <p>Debug Mode Active - localStorage is disabled</p>
          <p>Press Ctrl+Shift+D again to disable debug</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;