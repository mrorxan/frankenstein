import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Mən sənin Adəmin olmalı idim, amma mən daha çox düşmüş mələyəm...",
    character: "Məxluq"
  },
  {
    text: "Həyat, bəlkə də yalnız iztirabın toplanmasıdır, mənim üçün əzizdir və mən onu müdafiə edəcəyəm.",
    character: "Məxluq"
  },
  {
    text: "Diqqətli ol; çünki mən qorxmuram və buna görə də güclüyəm.",
    character: "Məxluq"
  },
  {
    text: "İnsan zehni üçün böyük və qəfil dəyişiklik qədər ağrılı heç nə yoxdur.",
    character: "Mary Shelley"
  },
  {
    text: "Dünya mənim üçün kəşf etmək istədiyim bir sirr idi; onun üçün isə öz təxəyyülü ilə doldurmaq istədiyi bir boşluq idi.",
    character: "Viktor Frankenstein"
  },
  {
    text: "Bilik əldə etmək nə qədər təhlükəlidir və doğma şəhərinin dünya olduğuna inanan insan, təbiətinin icazə verəcəyindən daha böyük olmağa can atan insandan nə qədər xoşbəxtdir.",
    character: "Viktor Frankenstein"
  },
  {
    text: "Əgər mən sevgi ilham edə bilmirəmsə, qorxu yaradacağam!",
    character: "Məxluq"
  },
  {
    text: "Bir canlı varlığın rəğbəti üçün mən hamı ilə barışardım. Məndə təsəvvür edə biləcəyiniz qədər sevgi və inanmayacağınız qədər qəzəb var.",
    character: "Məxluq"
  },
  {
    text: "Hətta Şeytanın da yoldaşları, onu heyran edən və ruhlandıran şeytan yoldaşları var idi, amma mən tənhayam və nifrət edilirəm.",
    character: "Məxluq"
  },
  {
    text: "Ruhumda başa düşmədiyim bir şey var.",
    character: "Viktor Frankenstein"
  },
  {
    text: "Mən xeyirxah və yaxşı idim; bədbəxtlik məni iblisə çevirdi.",
    character: "Məxluq"
  },
  {
    text: "Düşmüş mələk bədxah iblisə çevrilir. Lakin hətta Allahın və insanın o düşməni də öz tənhalığında dostlara və yoldaşlara malik idi; mən isə tənhayam.",
    character: "Məxluq"
  }
];

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [fadeIn, setFadeIn] = useState(true);
  const [lightningEffect, setLightningEffect] = useState(false);
  
  const generateNewQuote = () => {
    setFadeIn(false);
    // Remove the lightning effect that causes the blue flash
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setFadeIn(true);
    }, 500);
  };
  
  useEffect(() => {
    // Generate a random quote on initial load
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="quote-generator bg-gray-800 p-6 rounded-md flex flex-col h-full relative overflow-hidden">
      {/* Old book texture background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" 
           style={{ backgroundImage: "none" }}></div>
      
      {/* Rest of the component remains unchanged */}
      <div className="flex-grow flex items-center justify-center relative z-20">
        <div className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <blockquote className="text-xl italic text-gray-300 mb-4 relative">
            <span className="absolute -left-4 -top-4 text-4xl text-blood-red-700">"</span>
            {currentQuote.text}
            <span className="absolute -right-4 -bottom-0 text-4xl text-blood-red-700">"</span>
          </blockquote>
          <div className="text-right text-electric-blue-400">
            — {currentQuote.character}
          </div>
        </div>
      </div>
      
      <button 
        onClick={generateNewQuote}
        className="mt-6 px-4 py-2 bg-blood-red-800 hover:bg-blood-red-700 text-white rounded-md transition-all hover:scale-105 self-center relative z-20"
      >
        Yeni Sitat Göstər
      </button>
    </div>
  );
};

export default QuoteGenerator;