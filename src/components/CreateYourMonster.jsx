import { useState, useEffect } from 'react';

const CreateYourMonster = () => {
  const [humanity, setHumanity] = useState(50);
  const [intellect, setIntellect] = useState(50);
  const [rage, setRage] = useState(50);
  const [appearance, setAppearance] = useState(50);
  const [monsterDescription, setMonsterDescription] = useState('');
  const [lightningEffect, setLightningEffect] = useState(false);
  
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
    // Mavi yanıb-sönmə effektini tamamilə aradan qaldıraq
    // setLightningEffect(true);
    // setTimeout(() => setLightningEffect(false), 300);
  };
  
  useEffect(() => {
    updateDescription();
  }, [humanity, intellect, rage, appearance]);

  return (
    <div className="create-monster bg-gray-800 p-6 rounded-md relative overflow-hidden">
      {/* Laboratory equipment background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5" 
           style={{ backgroundImage: "url('/images/laboratory-equipment.jpg')" }}></div>
      
      {/* Lightning effect overlay - tamamilə silək */}
      {/* {lightningEffect && (
        <div className="absolute inset-0 bg-electric-blue-400 opacity-5 z-10 pointer-events-none transition-opacity duration-300"></div>
      )} */}
      
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
              {/* Laboratoriya avadanlığı siluetiləri - bu hissəni tamamilə silirəm */}
              
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
                  
                  {/* Add mouth based on humanity - daha yaxşı görünən ağız */}
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

const MonsterCreator = () => {
  const [monsterParts, setMonsterParts] = useState({
    brain: 'normal',
    eyes: 'normal',
    heart: 'normal',
    limbs: 'normal',
    skin: 'normal'
  });
  
  const [monsterName, setMonsterName] = useState('');
  const [monsterCreated, setMonsterCreated] = useState(false);
  
  const partOptions = {
    brain: ['normal', 'criminal', 'genius', 'animal'],
    eyes: ['normal', 'yellow', 'red', 'black'],
    heart: ['normal', 'cold', 'passionate', 'none'],
    limbs: ['normal', 'extra', 'mismatched', 'mechanical'],
    skin: ['normal', 'pale', 'decayed', 'stitched']
  };
  
  const handlePartChange = (part, value) => {
    setMonsterParts({
      ...monsterParts,
      [part]: value
    });
  };
  
  const handleNameChange = (e) => {
    setMonsterName(e.target.value);
  };
  
  const createMonster = () => {
    if (monsterName.trim() === '') {
      alert('Monstrunuza ad verin!');
      return;
    }
    setMonsterCreated(true);
  };
  
  const resetMonster = () => {
    setMonsterParts({
      brain: 'normal',
      eyes: 'normal',
      heart: 'normal',
      limbs: 'normal',
      skin: 'normal'
    });
    setMonsterName('');
    setMonsterCreated(false);
  };
  
  const getMonsterDescription = () => {
    let description = '';
    
    // Brain
    if (monsterParts.brain === 'criminal') {
      description += 'Cinayətkar düşüncələrlə dolu, ';
    } else if (monsterParts.brain === 'genius') {
      description += 'Dahi zəkaya sahib, ';
    } else if (monsterParts.brain === 'animal') {
      description += 'Heyvan instinktləri ilə idarə olunan, ';
    }
    
    // Eyes
    if (monsterParts.eyes === 'yellow') {
      description += 'sarı gözləri ilə hər şeyi izləyən, ';
    } else if (monsterParts.eyes === 'red') {
      description += 'qırmızı gözləri ilə qorxu saçan, ';
    } else if (monsterParts.eyes === 'black') {
      description += 'qara gözləri ilə qaranlığı əks etdirən, ';
    }
    
    // Heart
    if (monsterParts.heart === 'cold') {
      description += 'soyuq ürəkli, ';
    } else if (monsterParts.heart === 'passionate') {
      description += 'ehtirasla dolu ürəyi olan, ';
    } else if (monsterParts.heart === 'none') {
      description += 'ürəksiz, ';
    }
    
    // Limbs
    if (monsterParts.limbs === 'extra') {
      description += 'əlavə ətrafları olan, ';
    } else if (monsterParts.limbs === 'mismatched') {
      description += 'uyğunsuz ətrafları olan, ';
    } else if (monsterParts.limbs === 'mechanical') {
      description += 'mexaniki ətrafları olan, ';
    }
    
    // Skin
    if (monsterParts.skin === 'pale') {
      description += 'solğun dərili ';
    } else if (monsterParts.skin === 'decayed') {
      description += 'çürümüş dərili ';
    } else if (monsterParts.skin === 'stitched') {
      description += 'tikilmiş dərili ';
    } else {
      description += 'normal dərili ';
    }
    
    return description + 'bir məxluq.';
  };
  
  return (
    <div className="create-monster bg-gray-800 p-6 rounded-md">
      {!monsterCreated ? (
        <div className="monster-creator">
          <p className="mb-6 text-gray-300">Viktor Frankenstein kimi öz məxluqunuzu yaradın. Hissələri seçin və ona ad verin.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.keys(partOptions).map(part => (
              <div key={part} className="part-selector">
                <label className="block mb-2 text-lg font-semibold text-electric-blue-400 capitalize">
                  {part === 'brain' ? 'Beyin' : 
                   part === 'eyes' ? 'Gözlər' : 
                   part === 'heart' ? 'Ürək' : 
                   part === 'limbs' ? 'Ətraflar' : 
                   part === 'skin' ? 'Dəri' : part}
                </label>
                <select 
                  value={monsterParts[part]}
                  onChange={(e) => handlePartChange(part, e.target.value)}
                  className="w-full bg-gray-700 text-gray-200 p-2 rounded border border-gray-600 focus:border-electric-blue-500 focus:outline-none"
                >
                  {partOptions[part].map(option => (
                    <option key={option} value={option}>
                      {option === 'normal' ? 'Normal' : 
                       option === 'criminal' ? 'Cinayətkar' : 
                       option === 'genius' ? 'Dahi' : 
                       option === 'animal' ? 'Heyvan' : 
                       option === 'yellow' ? 'Sarı' : 
                       option === 'red' ? 'Qırmızı' : 
                       option === 'black' ? 'Qara' : 
                       option === 'cold' ? 'Soyuq' : 
                       option === 'passionate' ? 'Ehtirasli' : 
                       option === 'none' ? 'Yoxdur' : 
                       option === 'extra' ? 'Əlavə' : 
                       option === 'mismatched' ? 'Uyğunsuz' : 
                       option === 'mechanical' ? 'Mexaniki' : 
                       option === 'pale' ? 'Solğun' : 
                       option === 'decayed' ? 'Çürümüş' : 
                       option === 'stitched' ? 'Tikilmiş' : option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          
          <div className="mb-8">
            <label className="block mb-2 text-lg font-semibold text-electric-blue-400">
              Məxluqun Adı
            </label>
            <input 
              type="text" 
              value={monsterName}
              onChange={handleNameChange}
              className="w-full bg-gray-700 text-gray-200 p-2 rounded border border-gray-600 focus:border-electric-blue-500 focus:outline-none"
              placeholder="Məxluqunuza ad verin..."
            />
          </div>
          
          <button 
            onClick={createMonster}
            className="px-6 py-3 bg-blood-red-700 hover:bg-blood-red-600 text-white rounded-md transition-colors font-bold flex items-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Məxluqu Yarat
          </button>
        </div>
      ) : (
        <div className="monster-result text-center">
          <h3 className="text-2xl font-display text-electric-blue-400 mb-4">{monsterName}</h3>
          
          <div className="monster-image bg-gray-700 h-64 flex items-center justify-center rounded-md mb-6">
            <div className="text-6xl">👹</div>
          </div>
          
          <p className="text-gray-300 mb-8">{getMonsterDescription()}</p>
          
          <div className="monster-analysis mb-8">
            <h4 className="text-xl font-semibold text-blood-red-500 mb-4">Psixoloji Analiz</h4>
            <p className="text-gray-300">
              {monsterParts.brain === 'criminal' ? 'Bu məxluq cəmiyyət üçün təhlükəlidir və nəzarət altında saxlanılmalıdır.' : 
               monsterParts.brain === 'genius' ? 'Bu məxluq yüksək intellektə malikdir və düzgün istiqamətləndirildikdə faydalı ola bilər.' : 
               monsterParts.brain === 'animal' ? 'Bu məxluq instinktləri ilə hərəkət edir və təhlükəli ola bilər.' : 
               'Bu məxluq normal insan düşüncəsinə malikdir.'}
              {' '}
              {monsterParts.heart === 'cold' ? 'Empatiya qabiliyyəti yoxdur və başqalarına qarşı laqeyddir.' : 
               monsterParts.heart === 'passionate' ? 'Güclü emosiyalara malikdir və impulsiv hərəkət edə bilər.' : 
               monsterParts.heart === 'none' ? 'Hissləri yoxdur və tamamilə məntiqlə hərəkət edir.' : 
               'Normal emosional reaksiyalara malikdir.'}
            </p>
          </div>
          
          <button 
            onClick={resetMonster}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-md transition-colors font-bold"
          >
            Yenidən Başla
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateYourMonster;