import { useState } from 'react';

const characters = [
  {
    id: 'victor',
    name: 'Viktor Frankenstein',
    image: '/images/victor.jpg',
    description: 'Qadağan olunmuş biliklər axtarışı faciəyə səbəb olan hırslı alim.',
    traits: [
      { name: 'Ambisiya', description: 'Nəticələrindən asılı olmayaraq elmi kəşfləri can atması.' },
      { name: 'Günahkarlıq', description: 'Məxluqu yaratdıqdan sonra onu bürüyən dərin peşmanlıq.' },
      { name: 'Tarı Kompleksi', description: 'Həyat və ölüm üzərində ilahi güc əldə etmək istəyi.' }
    ],
    quotes: [
      "Bilik əldə etmək nə qədər təhlükəlidir və doğma şəhərinin dünya olduğuna inanan insan, təbiətinin icazə verəcəyindən daha böyük olmağa can atan insandan nə qədər xoşbəxtdir.",
      "Ruhumda başa düşmədiyim bir şey var."
    ]
  },
  {
    id: 'creature',
    name: 'Məxluq',
    image: '/images/creature.jpg',
    description: 'Cəmiyyət tərəfindən rədd edilən və yaradıcısı tərəfindən tərk edilən faciəvi varlıq.',
    traits: [
      { name: 'Tənhalıq', description: 'Dərin təcrid və rədd edilmə hissi.' },
      { name: 'Qisas', description: 'Rədd edilməsinə görə yaradıcısına qarşı qəzəb.' },
      { name: 'Özünüdərk', description: 'Öz vəziyyəti və cəmiyyətdəki yeri haqqında dərin düşüncələr.' }
    ],
    quotes: [
      "Əgər mən sevgi ilham edə bilmirəmsə, qorxu yaradacağam!",
      "Mən xeyirxah və yaxşı idim; bədbəxtlik məni iblisə çevirdi.",
      "Hətta Şeytanın da yoldaşları var idi, amma mən tənhayam və nifrət edilirəm."
    ]
  },
  {
    id: 'elizabeth',
    name: 'Elizabeth Lavenza',
    image: '/images/elizabeth.jpg',
    description: 'Viktorun nişanlısı və əmisi qızı, mərhəmət və sevgi təcəssümü.',
    traits: [
      { name: 'Mərhəmət', description: 'Başqalarına qarşı dərin qayğı və şəfqət.' },
      { name: 'Sadiqliq', description: 'Viktora qarşı sarsılmaz sevgi və dəstək.' },
      { name: 'Məsumluq', description: 'Viktorun qaranlıq dünyasına qarşı işıq və saflıq.' }
    ],
    quotes: [
      "Sevgi və mərhəmət həyatın ən böyük dəyərləridir.",
      "Həyatımı Viktor ilə bölüşmək mənim ən böyük arzumdur."
    ]
  },
  {
    id: 'clerval',
    name: 'Henri Klerval',
    image: '/images/clerval.jpg',
    description: 'Viktorun ən yaxın dostu, humanist və sənətkar ruh.',
    traits: [
      { name: 'Sədaqət', description: 'Viktora qarşı sarsılmaz dostluq.' },
      { name: 'Humanizm', description: 'İncəsənət və ədəbiyyata dərin sevgi.' },
      { name: 'Tarazlıq', description: 'Viktorun elmi hırsına qarşı tarazlaşdırıcı qüvvə.' }
    ],
    quotes: [
      "Dostluq həyatın ən böyük nemətlərindən biridir.",
      "Elm və incəsənət arasında tarazlıq olmalıdır."
    ]
  },
  // Adding new characters with quotes
  {
    id: 'captain',
    name: 'Kapitan Robert Walton',
    image: '/images/captain.jpg',
    description: 'Şimal qütbünə ekspedisiya zamanı Viktoru xilas edən gəmi kapitanı və hekayənin ravisi.',
    traits: [
      { name: 'Macəra Ruhu', description: 'Naməlum ərazilərə kəşf etmək və şöhrət qazanmaq istəyi.' },
      { name: 'Empatiya', description: 'Viktorun faciəvi hekayəsini dinləmək və ondan dərs almaq qabiliyyəti.' },
      { name: 'Özünüdərk', description: 'Viktorun hekayəsindən sonra öz ambisiyalarını yenidən qiymətləndirməsi.' }
    ],
    quotes: [
      "Mən də Viktor kimi şöhrət və kəşf üçün can atıram, lakin onun faciəsindən dərs almalıyam.",
      "Bəzən ambisiyalarımız bizi məhvə aparır."
    ]
  },
  {
    id: 'alphonse',
    name: 'Alphonse Frankenstein',
    image: '/images/alphonse.jpg',
    description: 'Viktorun atası, ailə dəyərləri və məsuliyyəti təcəssüm etdirən hörmətli şəxs.',
    traits: [
      { name: 'Ailə Sevgisi', description: 'Ailəsinə qarşı dərin bağlılıq və qayğı.' },
      { name: 'Əxlaq', description: 'Güclü əxlaqi dəyərlər və prinsiplər.' },
      { name: 'Kədər', description: 'Ailəsinin faciəvi taleyinə görə yaşadığı dərin kədər.' }
    ],
    quotes: [
      "Ailə həyatın ən böyük xəzinəsidir, oğlum.",
      "Elm yaxşı şeydir, lakin əxlaq və məsuliyyət daha vacibdir."
    ]
  },
  {
    id: 'justine',
    name: 'Justine Moritz',
    image: '/images/justine.jpg',
    description: 'Frankenstein ailəsinin sadiq xidmətçisi, ədalətsiz şəkildə cinayətdə günahlandırılır.',
    traits: [
      { name: 'Sadiqlik', description: 'Frankenstein ailəsinə sarsılmaz sədaqət.' },
      { name: 'Məsumluq', description: 'Günahsız olmasına baxmayaraq, ədalətsiz şəkildə ittiham edilir.' },
      { name: 'Fədakarlıq', description: 'Başqalarının rifahı üçün özünü qurban vermək istəyi.' }
    ],
    quotes: [
      "Mən günahsızam, lakin taleyimə boyun əyirəm.",
      "Frankenstein ailəsinə xidmət etmək mənim üçün şərəfdir."
    ]
  }
];

const CharacterAnalysis = () => {
  const [activeCharacter, setActiveCharacter] = useState(characters[0]);

  return (
    <div className="character-analysis">
      {/* Personaj Təhlili başlığını silirəm */}
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {characters.map(character => (
          <button
            key={character.id}
            onClick={() => setActiveCharacter(character)}
            className={`px-4 py-2 rounded-sm transition-all ${
              activeCharacter.id === character.id 
                ? 'bg-blood-red-800 text-gray-200' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {character.name}
          </button>
        ))}
      </div>
      
      <div className="character-display grid md:grid-cols-2 gap-8 bg-gray-800 p-6 rounded-md">
        <div className="character-image-container relative">
          <div className="bg-gray-700 rounded-md overflow-hidden" style={{ height: "500px", width: "100%" }}>
            <img 
              loading="lazy"
              src={activeCharacter.image} 
              alt={activeCharacter.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-3xl font-display text-electric-blue-400">{activeCharacter.name}</h3>
            <p className="text-gray-300 italic">{activeCharacter.description}</p>
          </div>
        </div>
        
        <div className="character-details">
          <div className="mb-6">
            <h4 className="text-xl font-bold border-b border-blood-red-700 pb-2 mb-4">Psixoloji Profil</h4>
            <ul className="space-y-4">
              {activeCharacter.traits.map((trait, index) => (
                <li key={index} className="flex flex-col">
                  <span className="text-lg font-semibold text-blood-red-500">{trait.name}</span>
                  <span className="text-gray-400">{trait.description}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold border-b border-blood-red-700 pb-2 mb-4">Əlamətdar Sitatlar</h4>
            <div className="space-y-4">
              {activeCharacter.quotes && activeCharacter.quotes.map((quote, index) => (
                <blockquote key={index} className="border-l-4 border-electric-blue-700 pl-4 italic text-gray-300">
                  "{quote}"
                </blockquote>
              ))}
              {(!activeCharacter.quotes || activeCharacter.quotes.length === 0) && (
                <p className="text-gray-400 italic">Bu personaj üçün sitat mövcud deyil.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterAnalysis;