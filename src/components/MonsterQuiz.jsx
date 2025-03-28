import { useState } from 'react';

const MonsterQuiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  
  const quizOptions = [
    {
      id: 'victor',
      title: 'Viktor Frankenstein',
      description: 'Məsuliyyətsiz şəkildə həyat yaratdı və öz yaratdığını tərk etdi, faciəni başlatdı.',
      result: 'Viktor elmi ambisiyalarının qurbanı oldu. O, həyat yaratmaq istəyirdi, lakin yaratdığı varlığın ehtiyaclarını nəzərə almadı. Onun əsas günahı yaratmaq deyil, yaratdığını tərk etmək idi. Bu, müasir texnologiya və süni intellekt yaradıcıları üçün bir dərsdir - yaratdığımız şeylərə qarşı məsuliyyət daşımalıyıq.'
    },
    {
      id: 'creature',
      title: 'Məxluq',
      description: 'Şəraitinə baxmayaraq, intiqam üçün zorakılıq və qətl seçdi.',
      result: 'Məxluq doğulduğu andan etibarən rədd edildi və sevgidən məhrum edildi. Onun zorakılığı və qəzəbi anlaşılandır, lakin günahsız insanları öldürmək seçimi onu da məsuliyyət daşıyıcısına çevirir. O, öz taleyini seçdi, lakin bu seçim cəmiyyətin ona verdiyi seçimlərlə məhdudlaşdırılmışdı.'
    },
    {
      id: 'society',
      title: 'Cəmiyyət',
      description: 'Sadəcə görünüşünə görə məxluqu rədd edərək onu zorakılığa məcbur etdi.',
      result: 'Cəmiyyət fərqliliyi qəbul etməkdə uğursuz oldu. İnsanlar məxluqu tanımadan, onun qəlbini və zəkasını görmədən rədd etdilər. Bu rədd edilmə məxluqu qəzəbə və intiqama yönəltdi. Müasir cəmiyyətdə də "başqalarını" necə qəbul etdiyimiz haqqında düşünməliyik.'
    },
    {
      id: 'none',
      title: 'Heç biri tam canavar deyil',
      description: 'Roman, heç bir tərəfin tam məsuliyyət daşımadığı mürəkkəb bir mənəvi mənzərə təqdim edir.',
      result: 'Frankenstein əsəri qara və ağ deyil, boz sahələrlə doludur. Viktor, məxluq və cəmiyyət - hamısı faciəyə töhfə verdi. Bu, insan təbiətinin mürəkkəbliyini və əxlaqi qərarların çətinliyini göstərir. Bəlkə də əsl canavar bizim içimizdəki potensial qaranlıqdır.'
    }
  ];
  
  const handleSubmit = () => {
    if (selectedOption) {
      setShowResult(true);
    }
  };
  
  const resetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="monster-quiz bg-gray-800 p-6 rounded-md">
      {!showResult ? (
        <>
          <p className="text-xl text-center mb-8 text-gray-300">
            Mary Shelley'nin romanında əsl canavar kimdir? Seçiminizi edin və nəticəni görün.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {quizOptions.map(option => (
              <div 
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`p-5 border rounded-md cursor-pointer transition-all ${
                  selectedOption === option.id 
                    ? 'border-electric-blue-500 bg-gray-700 transform scale-105' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <h3 className="text-xl font-bold mb-2 text-electric-blue-400">{option.title}</h3>
                <p className="text-gray-400">{option.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="px-6 py-3 bg-blood-red-800 hover:bg-blood-red-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Nəticəni Göstər
            </button>
          </div>
        </>
      ) : (
        <div className="result-container">
          <h3 className="text-2xl font-bold mb-4 text-electric-blue-400 text-center">
            {quizOptions.find(o => o.id === selectedOption).title}
          </h3>
          
          <div className="bg-gray-900 p-6 rounded-md mb-6">
            {/* Remove the typewriter class that's causing the text to cut off */}
            <p className="text-gray-300 leading-relaxed whitespace-normal">
              {quizOptions.find(o => o.id === selectedOption).result}
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={resetQuiz}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
            >
              Yenidən Sına
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonsterQuiz;