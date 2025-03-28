import { useState, useEffect } from 'react';

const CreateYourMonster = () => {
  const [humanity, setHumanity] = useState(50);
  const [intellect, setIntellect] = useState(50);
  const [rage, setRage] = useState(50);
  const [appearance, setAppearance] = useState(50);
  const [monsterDescription, setMonsterDescription] = useState('');
  
  const updateDescription = () => {
    // Calculate overall monstrosity vs humanity
    const monstrosity = (100 - humanity + rage + (100 - appearance)) / 3;
    const intelligence = intellect;
    
    let description = '';
    
    // Base description on monstrosity
    if (monstrosity > 75) {
      description = 'Onu görən hər kəsdə qorxu yaradan dəhşətli bir məxluq. ';
    } else if (monstrosity > 50) {
      description = 'Yaxınlıqdakı insanlarda narahatlıq yaradan narahat edici bir fiqur. ';
    } else if (monstrosity > 25) {
      description = 'Bəzi narahat edici xüsusiyyətləri olan qeyri-adi bir varlıq, lakin tamamilə qorxuducu deyil. ';
    } else {
      description = 'Təbii olmayan mənşəyinin yalnız incə işarələri olan, əsasən insana bənzər bir fiqur. ';
    }
    
    // Add intelligence description
    if (intelligence > 75) {
      description += 'Fövqəladə intellektə sahib olan, dərin fəlsəfi suallar düşünən və heyrətamiz sürətlə öyrənən. ';
    } else if (intelligence > 50) {
      description += 'Kifayət qədər ağıllı və aydın, öyrənmək və mühakimə etmək qabiliyyətinə malik. ';
    } else if (intelligence > 25) {
      description += 'Əsas zəkaya malik, ünsiyyət qura bilən, lakin mürəkkəb anlayışlarla çətinlik çəkən. ';
    } else {
      description += 'Düşüncədə ibtidai, əsasən məntiqdən daha çox instinktlə idarə olunan. ';
    }
    
    // Add humanity description
    if (humanity > 75) {
      description += 'O, dərin empatiya göstərir və insan əlaqəsi və qəbul edilmək üçün dərindən can atır.';
    } else if (humanity > 50) {
      description += 'O, emosional qabiliyyət nümayiş etdirir və müəyyən yoldaşlıq arzulayır.';
    } else if (humanity > 25) {
      description += 'Məhdud emosional diapazonu var, lakin ara-sıra insanlıq əlamətləri göstərir.';
    } else {
      description += 'İnsan emosiyasından məhrumdur, soyuq məntiq və ya ibtidai qəzəblə hərəkət edir.';
    }
     
    // Add rage modifier
    if (rage > 75) {
      description += ' Nifrət və intiqamla dolu, onu rədd edənlər üçün son dərəcə təhlükəlidir.';
    } else if (rage > 50) {
      description += ' Təhrik olunduqda zorakılıq kimi özünü göstərə bilən kin bəsləyir.';
    }
    
    setMonsterDescription(description);
  };
  
  const handleSliderChange = (setter, value) => {
    setter(parseInt(value));
  };
  
  useEffect(() => {
    updateDescription();
  }, [humanity, intellect, rage, appearance]);

  return (
    <div className="create-monster bg-gray-800 p-6 rounded-md relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-5" 
           style={{ backgroundImage: "url('/images/laboratory-equipment.jpg')" }}></div>
      
      <div className="relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="sliders space-y-6">
            <div className="slider-container">
              <div className="flex justify-between mb-2">
                <label className="text-gray-300">İnsanlıq</label>
                <span className="text-electric-blue-400">{humanity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={humanity} 
                onChange={(e) => handleSliderChange(setHumanity, e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Canavar</span>
                <span>İnsan</span>
              </div>
            </div>
            
            <div className="slider-container">
              <div className="flex justify-between mb-2">
                <label className="text-gray-300">Zəka</label>
                <span className="text-electric-blue-400">{intellect}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={intellect} 
                onChange={(e) => handleSliderChange(setIntellect, e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>İbtidai</span>
                <span>Dahi</span>
              </div>
            </div>
            
            <div className="slider-container">
              <div className="flex justify-between mb-2">
                <label className="text-gray-300">Qəzəb</label>
                <span className="text-electric-blue-400">{rage}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={rage} 
                onChange={(e) => handleSliderChange(setRage, e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Sakit</span>
                <span>İntiqamçı</span>
              </div>
            </div>
            
            <div className="slider-container">
              <div className="flex justify-between mb-2">
                <label className="text-gray-300">Görünüş</label>
                <span className="text-electric-blue-400">{appearance}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={appearance} 
                onChange={(e) => handleSliderChange(setAppearance, e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Eybəcər</span>
                <span>Gözəl</span>
              </div>
            </div>
          </div>
          
          <div className="monster-result">
            <div className="bg-gray-900 p-6 rounded-md h-full flex flex-col relative overflow-hidden">
              <h3 className="text-xl text-electric-blue-400 mb-4 relative z-10">Yaratdığınız Məxluq</h3>
              
              <div className="monster-visualization flex-grow mb-4 relative z-10">
                <div className="aspect-square max-w-[200px] mx-auto relative">
                  {/* Monster visualization - simple representation based on sliders */}
                  <div 
                    className="absolute inset-0 rounded-full" 
                    style={{
                      background: `radial-gradient(circle, rgba(${Math.round(255 * (100-humanity)/100)}, ${Math.round(255 * intellect/100)}, ${Math.round(255 * (100-rage)/100)}, 0.8), transparent 70%)`,
                      transform: `scale(${0.5 + (appearance / 200)})`,
                      boxShadow: `0 0 ${rage/5}px ${rage/5}px rgba(${Math.round(255 * rage/100)}, 0, 0, 0.5)`
                    }}
                  ></div>
                  
                  {/* Add eyes based on intellect */}
                  <div className="absolute" style={{ 
                    top: '30%', 
                    left: '30%', 
                    width: `${intellect/10 + 5}px`, 
                    height: `${intellect/10 + 5}px`,
                    borderRadius: '50%',
                    background: `rgba(255, ${Math.min(255, intellect * 2)}, 0, 0.8)`,
                    boxShadow: `0 0 ${intellect/10}px rgba(255, ${Math.min(255, intellect * 2)}, 0, 0.5)`
                  }}></div>
                  
                  <div className="absolute" style={{ 
                    top: '30%', 
                    right: '30%', 
                    width: `${intellect/10 + 5}px`, 
                    height: `${intellect/10 + 5}px`,
                    borderRadius: '50%',
                    background: `rgba(255, ${Math.min(255, intellect * 2)}, 0, 0.8)`,
                    boxShadow: `0 0 ${intellect/10}px rgba(255, ${Math.min(255, intellect * 2)}, 0, 0.5)`
                  }}></div>
                  
                  {/* Add mouth based on humanity */}
                  <div className="absolute" style={{ 
                    bottom: '30%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    width: `${humanity/5 + 10}px`, 
                    height: `${(100-humanity)/10 + 2}px`,
                    borderRadius: humanity > 50 ? '0 0 10px 10px' : '10px 10px 0 0',
                    background: `rgba(255, ${Math.min(100, rage * 2)}, ${Math.min(100, humanity)}, 0.8)`,
                    boxShadow: `0 0 ${rage/10}px rgba(255, 0, 0, 0.5)`,
                    border: '1px solid rgba(255, 100, 100, 0.6)'
                  }}></div>
                </div>
              </div>
              
              <div className="monster-description bg-gray-800 p-4 rounded-md relative z-10">
                <p className="text-gray-300 italic">{monsterDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateYourMonster;