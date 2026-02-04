import { useEffect, useState } from 'react';

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if this is the initial load
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    // Mark as loaded
    sessionStorage.setItem('hasLoaded', 'true');

    // Start fade out after a delay
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 800);

    // Remove loader after fade
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent" style={{ borderColor: '#15AF97', borderTopColor: 'transparent' }}></div>
    </div>
  );
}
