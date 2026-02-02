// src/components/LandingPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  // Pehle check karein
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  const handleVideoEnd = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    
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
    localStorage.setItem('hasSeenIntro', 'true');
    navigate('/home');
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        <video
          autoPlay
          // 🎵 "muted" HATA DIYA - ab audio play hoga
          onEnded={handleVideoEnd}
          className="w-full h-auto rounded-xl"
        >
          {/* 🎵 Video path correct kiya: /team-intro.mp4 (not /public/team-intro.mp4) */}
          <source src="/team-intro.mp4" type="video/mp4" />
        </video>
        
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 px-4 py-2 bg-black/50 text-white rounded-lg"
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
      </div>
    </div>
  );
};

export default LandingPage;