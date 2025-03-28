import { useState } from 'react'
import Header from './components/Header'
import CharacterAnalysis from './components/CharacterAnalysis'; // Corrected the import path
import Timeline from './components/Timeline'
import ModernFrankensteins from './components/ModernFrankensteins'
import QuoteGenerator from './components/QuoteGenerator'
import CreateYourMonster from './components/CreateYourMonster'
import LabNotes from './components/LabNotes'
import Footer from './components/Footer'
import MonsterQuiz from './components/MonsterQuiz'

function App() {
  const [showLabNotes, setShowLabNotes] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-serif">
      <div className="app-container min-h-screen">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <section className="mb-16">
            <div className="section-header relative">
              <h2 className="text-4xl font-display text-center mb-12 text-blood-red-600 relative z-10">
                Personaj Təhlili
              </h2>
            </div>
            <CharacterAnalysis />
          </section>
          
          <section className="mb-16">
            <div className="section-header relative">
              <h2 className="text-4xl font-display text-center mb-12 text-blood-red-600 relative z-10">
                Zaman Xətti
              </h2>
            </div>
            <Timeline />
          </section>
          
          <section className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="ink-stain">
              <div className="section-header relative">
                <h2 className="text-3xl font-display mb-6 text-blood-red-600 relative z-10">
                  Müasir Frankensteinlər
                </h2>
              </div>
              <ModernFrankensteins />
            </div>
            <div>
              <div className="section-header relative">
                <h2 className="text-3xl font-display mb-6 text-blood-red-600 relative z-10">
                  Faciəvi Sitatlar
                </h2>
              </div>
              <QuoteGenerator />
            </div>
          </section>
          
          {/* Restoring the Create Your Monster section */}
          <section className="mb-16">
            <div className="section-header relative">
              <h2 className="text-4xl font-display text-center mb-12 text-blood-red-600 relative z-10">
                Öz Monstrunu Yaradın
              </h2>
            </div>
            <CreateYourMonster />
          </section>
          
          <section className="mb-16">
            <div className="section-header relative">
              <h2 className="text-4xl font-display text-center mb-12 text-blood-red-600 relative z-10">
                "Əsl canavar cəmiyyət idimi?"
              </h2>
            </div>
            <MonsterQuiz />
          </section>
          
          {showLabNotes && (
            <section className="mb-16">
              <div className="section-header relative">
                <h2 className="text-4xl font-display text-center mb-12 text-blood-red-600 relative z-10">
                  Gizli Laboratoriya Qeydləri
                </h2>
              </div>
              <LabNotes />
            </section>
          )}
          
          <button 
            onClick={() => setShowLabNotes(!showLabNotes)}
            className="mb-16 px-4 py-2 bg-red-900 hover:bg-red-800 text-gray-200 rounded flex items-center mx-auto transition-all hover:scale-105"
          >
            {showLabNotes ? 'Laboratoriya Qeydlərini Gizlət' : 'Gizli Laboratoriya Qeydlərini Göstər'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App