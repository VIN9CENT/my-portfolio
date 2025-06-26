import React, { useEffect, useRef, useState } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Contact from "./components/Contact";

function App() {
  const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
  
    useEffect(() => {
      if (!vantaEffect && window.VANTA && window.VANTA.NET && window.THREE) {
        const effect = window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3f81,
          backgroundColor: 0x23153c,
          points: 15,
          maxDistance: 20,
          spacing: 15,
          showDots: true,
        });
        setVantaEffect(effect);
      }
  
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
  
  

  return (
    <>
    <div ref={vantaRef} className="w-full min-h-full h-full bg-gradient-to-b from-gray-900 to-gray-800">
     <Header />
     <Hero />
     <Content />
     <Contact/>
     <Footer />
     </div>
    </>
  )
}

export default App
