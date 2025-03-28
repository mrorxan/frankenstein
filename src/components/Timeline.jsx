import { useState, useRef, useEffect } from 'react';

const timelineEvents = [
  {
    id: 1,
    title: 'Viktorun Erkən Həyatı',
    date: '1770-ci illər',
    description: 'Viktor Cenevrədə sevgi dolu ailəsi ilə böyüyür və erkən yaşlarından təbii fəlsəfəyə maraq göstərir.',
    mood: 'neytral',
    image: '/images/geneva.jpg'
  },
  {
    id: 2,
    title: 'Ingolstadt Universiteti',
    date: '1790-cı illər',
    description: 'Viktor təhsilinə başlayır və həyatın sirrini kəşf etməyə aludə olur.',
    mood: 'neytral',
    image: '/images/ingolstadt.jpg'
  },
  {
    id: 3,
    title: 'Yaradılış',
    date: 'Noyabr 1793',
    description: 'Aylarla işlədikdən sonra Viktor məxluqunu həyata gətirir, lakin dərhal etdiklərindən dəhşətə gəlir.',
    mood: 'ümidsizlik',
    image: '/images/creation.jpg'
  },
  {
    id: 4,
    title: 'Viktorun Xəstəliyi',
    date: 'Qış 1793-1794',
    description: 'Dəhşətə qapılan Viktor xəstələnir və Henri Klerval tərəfindən sağaldılır.',
    mood: 'ümidsizlik',
    image: '/images/illness.jpg'
  },
  {
    id: 5,
    title: 'Williamın Qətli',
    date: 'May 1794',
    description: 'Viktorun kiçik qardaşı William öldürülür və Justine cinayətdə haqsız yerə ittiham olunur.',
    mood: 'faciə',
    image: '/images/william.jpg'
  },
  {
    id: 6,
    title: 'Məxluqla Görüş',
    date: 'Yay 1794',
    description: 'Viktor dağlarda məxluqu ilə qarşılaşır, o, qadın yoldaş tələb edir.',
    mood: 'qəzəb',
    image: '/images/meeting.jpg'
  },
  {
    id: 7,
    title: 'Yaradılışın Məhvi',
    date: 'Gec 1794',
    description: 'Viktor qadın məxluq üzərində işləməyə başlayır, lakin onu tamamlamadan məhv edir.',
    mood: 'qəzəb',
    image: '/images/destroyed.jpg'
  },
  {
    id: 8,
    title: 'Clervalın Qətli',
    date: 'Sentyabr 1794',
    description: 'Məxluq qadın məxluqu məhv etdiyinə görə Henri Clervalı öldürür.',
    mood: 'faciə',
    image: '/images/clerval2.jpg'
  },
  {
    id: 9,
    title: 'Elizabethin Qətli',
    date: 'Toy Gecəsi, 1794',
    description: 'Toy gecələrində məxluq Elizabethi öldürür, intiqam vədini yerinə yetirir.',
    mood: 'faciə',
    image: '/images/elizabeth-death.jpg'
  },
  {
    id: 10,
    title: 'Arktik Təqib',
    date: '1795-1796',
    description: 'Viktor məxluqu Arktikaya qədər təqib edir, onu məhv etməyə qərarlıdır.',
    mood: 'qəzəb',
    image: '/images/arctic.jpg'
  },
  {
    id: 11,
    title: 'Viktorun Ölümü',
    date: '1796',
    description: 'Viktor Waltonun gəmisində hekayəsini danışdıqdan sonra ölür, məxluqu məhv edə bilmir.',
    mood: 'faciə',
    image: '/images/victor-death.jpg'
  },
  {
    id: 12,
    title: 'Məxluqun Ağısı',
    date: '1796',
    description: 'Məxluq Viktorun ölümünə yas tutur və öz həyatına son qoymağa söz verir, Arktik qaranlığa yox olur.',
    mood: 'ümidsizlik',
    image: '/images/lament.jpg'
  }
];

const getMoodColor = (mood) => {
  switch(mood) {
    case 'neytral': return 'bg-gray-500';
    case 'ümidsizlik': return 'bg-indigo-700';
    case 'qəzəb': return 'bg-blood-red-700';
    case 'faciə': return 'bg-black';
    default: return 'bg-gray-500';
  }
};

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(timelineEvents[0]);
  const timelineRef = useRef(null);
  
  const scrollToEvent = (event) => {
    setActiveEvent(event);
    const element = document.getElementById(`timeline-event-${event.id}`);
    if (element && timelineRef.current) {
      const scrollLeft = element.offsetLeft - (timelineRef.current.clientWidth / 2) + (element.clientWidth / 2);
      timelineRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  // Əvvəlki və sonrakı hadisələrə keçid üçün funksiyalar
  const handlePrevious = () => {
    const currentIndex = timelineEvents.findIndex(e => e.id === activeEvent.id);
    if (currentIndex > 0) {
      scrollToEvent(timelineEvents[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = timelineEvents.findIndex(e => e.id === activeEvent.id);
    if (currentIndex < timelineEvents.length - 1) {
      scrollToEvent(timelineEvents[currentIndex + 1]);
    }
  };

  useEffect(() => {
    // Initialize the timeline with the first event
    const firstElement = document.getElementById(`timeline-event-1`);
    if (firstElement && timelineRef.current) {
      timelineRef.current.scrollLeft = firstElement.offsetLeft - 100;
    }
  }, []);

  // Function to determine if an event is tragic (murder or death)
  const isTragedyEvent = (event) => {
    return event.mood === 'faciə' || 
           event.title.toLowerCase().includes('qətli') || 
           event.title.toLowerCase().includes('ölümü');
  };

  return (
    <div className="timeline-section">
      {/* Zaman Xətti başlığını silmək üçün Timeline.jsx faylında dəyişiklik edirəm */}
      
      <div className="event-display mb-8">
        <div className="grid md:grid-cols-2 gap-6 bg-gray-800 p-6 rounded-md">
          <div className="event-image aspect-w-16 aspect-h-9 bg-gray-700 rounded-md overflow-hidden">
            {activeEvent.image ? (
              <img 
                src={activeEvent.image} 
                alt={activeEvent.title}
                className="w-full h-full object-cover"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500 text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p>{activeEvent.title}</p>
                </div>
              </div>
            )}
            {isTragedyEvent(activeEvent) && (
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blood-red-900 opacity-40"></div>
            )}
          </div>
          
          <div className="event-details">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getMoodColor(activeEvent.mood)} text-white`}>
              {activeEvent.mood === 'faciə' ? 'Faciəvi' : 
               activeEvent.mood === 'neytral' ? 'Neytral' : 
               activeEvent.mood === 'ümidsizlik' ? 'Ümidsizlik' : 
               activeEvent.mood === 'qəzəb' ? 'Qəzəb' : 'Faciə'}
            </div>
            <h3 className="text-2xl font-bold text-electric-blue-400 mb-2">{activeEvent.title}</h3>
            <div className="text-sm text-gray-400 mb-4">{activeEvent.date}</div>
            <p className="text-gray-300">{activeEvent.description}</p>
          </div>
        </div>
      </div>
      
      <div 
        ref={timelineRef}
        className="timeline-scroll-container overflow-x-auto pb-6 mb-2 hide-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="timeline-track relative flex items-center min-w-max px-4 py-20">
          <div className="timeline-line absolute h-2 bg-gray-700 left-0 right-0 top-1/2 transform -translate-y-1/2"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              id={`timeline-event-${event.id}`}
              key={event.id} 
              className={`timeline-event relative mx-12 cursor-pointer transition-all duration-300 ${
                activeEvent.id === event.id ? 'scale-110 z-10' : 'opacity-70 hover:opacity-100'
              } ${isTragedyEvent(event) ? 'blood-event' : ''}`}
              onClick={() => scrollToEvent(event)}
            >
              <div className={`timeline-dot w-8 h-8 rounded-full ${getMoodColor(event.mood)} z-10 relative ${
                isTragedyEvent(event) ? 'border-2 border-blood-red-500' : ''
              } ${activeEvent.id === event.id ? 'ring-2 ring-white' : ''}`}></div>
              <div className="timeline-label absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium bg-gray-800 px-2 py-1 rounded">
                {event.title}
              </div>
              <div className="timeline-date absolute bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                {event.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Düymələri daha yuxarı qaldırdım - padding və margin dəyərlərini azaltdım */}
      <div className="flex justify-center mt-0 mb-6">
        <button 
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-800 text-gray-300 rounded-l-md hover:bg-gray-700 transition-colors"
          disabled={activeEvent.id === timelineEvents[0].id}
        >
          Əvvəlki
        </button>
        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-gray-300 rounded-r-md hover:bg-gray-700 transition-colors"
          disabled={activeEvent.id === timelineEvents[timelineEvents.length - 1].id}
        >
          Sonrakı
        </button>
      </div>
    </div>
  );
};

export default Timeline;