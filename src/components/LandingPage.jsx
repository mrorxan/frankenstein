import { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnterLab }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  
  const frankensteinFacts = [
    "Mary Shelley 18 yaşında ikən 'Frankenstein' romanını yazmağa başladı.",
    "Əsər 1818-ci ildə anonim olaraq nəşr edildi və çoxları onun müəllifinin bir kişi olduğunu düşünürdü.",
    "Roman Lord Byron-un villasında keçirilən məşhur qorxu hekayələri yarışmasından sonra yarandı.",
    "Frankenstein əslində yaradılan məxluqun deyil, onu yaradan alimin adıdır.",
    "Bu roman elmi-fantastika janrının ilk nümunələrindən biri hesab olunur.",
    "Əsər insan ambisiyası, elm etikası və yaradıcının məsuliyyəti haqqında dərin fəlsəfi suallar qaldırır."
  ];
  
  useEffect(() => {
    // Fade in animation for the title
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    // Rotate through facts
    const factInterval = setInterval(() => {
      setFactIndex(prev => (prev + 1) % frankensteinFacts.length);
    }, 5000);
    
    return () => clearInterval(factInterval);
  }, []);
  
  return (
    <div className="landing-page min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 z-0">
        <div className="lightning-corner top-0 left-0"></div>
        <div className="lightning-corner top-0 right-0"></div>
        <div className="lightning-corner bottom-0 left-0"></div>
        <div className="lightning-corner bottom-0 right-0"></div>
      </div>
      
      <div className={`text-center max-w-4xl px-4 py-12 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-6xl md:text-7xl font-display mb-4 text-white">
          Psixoloji Təhlil
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          Mary Shelley'nin əsərinin müasir dünyada əks-sədası
        </p>
        
        {/* Interactive Facts Carousel */}
        <div className="facts-carousel relative h-32 mb-12 overflow-hidden rounded-lg bg-gray-800 bg-opacity-50 p-6">
          {frankensteinFacts.map((fact, index) => (
            <p 
              key={index} 
              className={`fact-item absolute inset-0 flex items-center justify-center p-6 text-lg text-electric-blue-300 transition-all duration-1000 ${index === factIndex ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            >
              {fact}
            </p>
          ))}
          
          <div className="fact-indicators absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {frankensteinFacts.map((_, index) => (
              <span 
                key={index} 
                className={`h-2 w-2 rounded-full transition-all duration-300 ${index === factIndex ? 'bg-electric-blue-400 w-4' : 'bg-gray-600'}`}
                onClick={() => setFactIndex(index)}
              ></span>
            ))}
          </div>
        </div>
        
        <button 
          onClick={onEnterLab}
          className="mt-8 px-8 py-3 bg-frankenstein-dark border border-frankenstein-gold text-frankenstein-gold hover:bg-gray-800 rounded-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-frankenstein-gold focus:ring-opacity-50 animate-pulse"
        >
          Laboratoriyaya Daxil Ol
        </button>
      </div>
    </div>
  );
};

export default LandingPage;