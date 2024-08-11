// src/components/Loader.jsx
import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-container">
      <video autoPlay muted loop playsInline>
        <source src="/loader.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          z-index: 9999;
        }
        video {
          height: auto;
          display: block;
        }
        @media screen and (max-width: 375px) {
          video {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}
