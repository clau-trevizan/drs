import { useEffect, useState } from 'react';

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = Array.from(document.images);
      if (images.length === 0) {
        startFade();
        return;
      }
      const allLoaded = images.every((img) => img.complete && img.naturalHeight !== 0);
      if (allLoaded) {
        startFade();
      } else {
        const promises = images
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise<void>((resolve) => {
                img.addEventListener('load', () => resolve(), { once: true });
                img.addEventListener('error', () => resolve(), { once: true });
              })
          );
        Promise.all(promises).then(startFade);
      }
    };

    const startFade = () => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 500);
    };

    // Wait for DOM to be ready, then check images
    const timer = setTimeout(checkImagesLoaded, 100);

    // Fallback: max 6 seconds
    const fallback = setTimeout(startFade, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#16493C' }}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
    </div>
  );
}
