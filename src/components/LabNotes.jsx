import { useState, useEffect } from 'react';

const labNotes = [
  {
    id: 1,
    date: '13 Avqust, 1793',
    title: 'Canlandırma Kəşfi',
    content: `İlkin təcrübələrim uğurlu oldu. Elektrik stimulyasiyasının bərpaedici gücü heyrətamizdir. Ölü toxumada hərəkət yaratdım. Konqur hüceyrələri, elektrik stimulyasiyasının köməkçisiylə, ölü toxumada hərəkət yaratdı. Konqur - Qalvani və Spallanzani əldə etmiş nəticələri təkrarladım. Cəsədlərdən daha çox material təmin etmək, alternativ metodlar araşdırmaq lazımdır.`,
    importance: 'high'
  },
  {
    id: 2,
    date: '7 Sentyabr, 1793',
    title: 'Montaj Başlayır',
    content: 'Bu gün ilk dəfə olaraq bütün bir bədən üzərində işləməyə başladım. Hissələri bir araya gətirmək çətindir, lakin mümkündür. Anatomiya biliyim əvəzsizdir. Bədən hissələrini meyitxanadan əldə etdim. Bəzi hissələr çürümüş olduğundan istifadə edilə bilməz. Daha təzə materiallar lazımdır.',
    importance: 'medium'
  },
  {
    id: 3,
    date: '19 Oktyabr, 1793',
    title: 'Sınaqlar',
    content: 'Kiçik elektrik cərəyanları ilə sınaqlar keçirdim. Əzələ toxuması reaksiya verir, lakin tam canlanma yoxdur. Daha güclü elektrik mənbəyi lazımdır. Qalvanik batareyaları təkmilləşdirməliyəm. Waldman professor mənim işimlə maraqlanmağa başlayıb. Ehtiyatlı olmalıyam.',
    importance: 'medium'
  },
  {
    id: 4,
    date: '1 Noyabr, 1793',
    title: 'Uğurumun Qaranquşu',
    content: 'Bu gün kiçik bir uğur əldə etdim! Ayrı bir əl üzərində tam hərəkət əldə etdim. Elektrik stimulyasiyası ilə barmaqlar hərəkət etdi, sanki canlı idi. Bu, böyük layihəm üçün ümidverici bir işarədir. Tezliklə tam bədəni canlandırmağa hazır olacağam.',
    importance: 'medium'
  },
  {
    id: 5,
    date: '15 Noyabr, 1793',
    title: 'TANRI MƏNİ BAĞIŞLASIN',
    content: 'NƏ ETDİYİMİ BİLMİRƏM. BU GECƏ İLDIRIM ÇAXDI VƏ MƏN... MƏN ONU CANLANDIRDIM. O YAŞAYIR. GÖZLƏR AÇILDI. AMAN TANRIM, O NƏFƏS ALIR. MƏN NƏ ETMİŞƏM? BU SƏHV İDİ. BÖYÜK BİR SƏHV. O, MƏNİM YARATDIĞIM ŞEY... BU BİR KABUS. QAÇMALIYAM. UZAQLAŞMALIYAM.',
    importance: 'critical'
  }
];

const LabNotes = () => {
  const [selectedNote, setSelectedNote] = useState(labNotes[0]);
  const [typedContent, setTypedContent] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    setTypedContent('');
    setIsTyping(true);
    
    let currentText = '';
    let index = 0;
    
    const typingInterval = setInterval(() => {
      if (index < selectedNote.content.length) {
        currentText += selectedNote.content.charAt(index);
        setTypedContent(currentText);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 20); // Yazma sürəti
    
    return () => clearInterval(typingInterval);
  }, [selectedNote]);
  
  const getImportanceIndicator = (importance) => {
    switch(importance) {
      case 'low': return null;
      case 'medium': return <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>;
      case 'high': return <span className="inline-block w-2 h-2 bg-orange-500 rounded-full ml-2"></span>;
      case 'critical': return (
        <>
          <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-2"></span>
          <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
        </>
      );
      default: return null;
    }
  };
  
  return (
    <div className="lab-notes-section">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-gray-900 rounded-md overflow-hidden">
          <h3 className="text-electric-blue-400 p-4 border-b border-gray-800" style={{ fontFamily: "'Special Elite', cursive" }}>Viktorun Jurnalı</h3>
          <ul className="lab-notes-list">
            {labNotes.map(note => (
              <li 
                key={note.id}
                className={`p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors ${
                  selectedNote.id === note.id ? 'bg-gray-700' : ''
                } ${note.importance === 'critical' ? 'bg-red-900 bg-opacity-50' : ''}`}
                onClick={() => setSelectedNote(note)}
              >
                <div className="text-sm text-gray-400" style={{ fontFamily: "'Special Elite', cursive" }}>{note.date}</div>
                <div className="flex items-center">
                  <div className="font-medium text-gray-300" style={{ fontFamily: "'Special Elite', cursive" }}>{note.title}</div>
                  {getImportanceIndicator(note.importance)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <div 
            className="lab-note-content p-6 rounded-md h-full relative overflow-hidden"
            style={{
              backgroundImage: "url('/images/old-paper.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#e8d9b0',
              boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.2)'
            }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl text-red-900 mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>{selectedNote.title}</h3>
              <div className="text-sm text-gray-800 mb-6" style={{ fontFamily: "'Special Elite', cursive" }}>{selectedNote.date}</div>
              
              <div className="lab-note-text text-gray-900 leading-relaxed" 
                 style={{ 
                   fontFamily: "'Special Elite', cursive",
                   fontSize: "1.1rem",
                   letterSpacing: "0.5px",
                   lineHeight: "1.8",
                   textShadow: "0 0 1px rgba(255, 255, 255, 0.5)"
                 }}>
                <p className={`${isTyping ? 'typing-effect' : ''}`}>
                  {typedContent}
                  {isTyping && <span className="typing-cursor">|</span>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabNotes;