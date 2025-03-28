// ... existing code ...
  
  return (
    <div className="thematic-analysis grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="modern-frankenstein bg-gray-800 p-4 rounded-md">
        <h2 className="text-2xl text-blood-red-500 mb-4">Müasir Frankensteinlər</h2>
        
        <p className="text-gray-300 text-sm mb-3">
          Mary Shelley'nin <em>Frankenstein</em> əsəri müasir dünyamızda, xüsusilə də yeni texnologiyalarla etik dilemmaları ilə üzləşdiyimiz zaman rezonans yaratmağa davam edir. Romanın nəzərəçiş olan ambisiyalar haqqında xəbərdarlıqları bugünkü inkişaflarla yeni aktualllıq tapır.
        </p>
        
        <div className="mb-3">
          <h3 className="text-lg text-electric-blue-400 mb-1">Süni İntellekt</h3>
          <p className="text-gray-300 text-sm">
            Viktorun məxluqu kimi, AI sistemləri də nəzarətsizlikdən xaosa yıxa biləcək insan yaradılışlarıdır. AI-nin insan zəkasını keçməsi qorxusu - çox vaxt "təhlükə" adlandırılır - Viktorun nəzarət edə bilmədiyi bir şey yaratmaq dəhşətini əks etdirir. Getdikcə daha avtonom sistemlər inkişaf etdirdiyimiz üçün, Shelley'nin yaradıcı məsuliyyəti haqqında sualları təcili olur.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg text-electric-blue-400 mb-1">Yaradılışa Məsuliyyət</h3>
          <p className="text-gray-300 text-sm">
            Bəlkə də <em>Frankenstein</em>-dən ən davamlı dərs yaradılışın önündə təhlükələri haqqında deyil, ondan sonra gələn məsuliyyət haqqındadır. Viktorun əsl günahı onu yaratmaq deyil, yaratdığını tərk etmək idi. İnsanlığı yenidən formalaşdıra biləcək texnologiyalar inkişaf etdirdiyimiz üçün, Shelley'nin romanı bizə xatırladır ki, etik düşüncə və davamlı qayğı olmadan innovasiya fəlakətə səbəb olur.
          </p>
        </div>
        
        <blockquote className="border-l-4 border-blood-red-700 pl-3 italic text-gray-400 text-sm mt-4">
          "Qorxunc olmadığı; çünki düşünün Yaradıcısının müdhişəm mexanizmini ələ salmaq üçün hər hansı bir insan səy edə biləcək qəribə olardı."
          <footer className="text-right text-xs mt-1">— Mary Shelley, <em>Frankenstein</em></footer>
        </blockquote>
      </div>
      
      <div className="tragic-quotes bg-gray-800 p-4 rounded-md">
        <h2 className="text-2xl text-blood-red-500 mb-4">Faciəvi Sitatlar</h2>
        
        <div className="quote-container space-y-4">
          <blockquote className="border-l-4 border-electric-blue-700 pl-3 italic text-gray-300 text-sm">
            <p>
              "Düşmüş mələk bədbəxt iblisə çevrilir. Lakin hətta Allahın və insanın düşməni də öz təhlükəsində dostlara və yoldaşlara malik idi, mən isə tənhayam."
            </p>
            <footer className="text-right mt-1">— Məxluq</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-electric-blue-700 pl-3 italic text-gray-300 text-sm">
            <p>
              "Mən xeyirxah və sevgi dolu idim; bədbəxtlik məni iblisə çevirdi. Məni yenidən xoşbəxt edin və mən yenidən fəzilətli olacağam."
            </p>
            <footer className="text-right mt-1">— Məxluq</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-electric-blue-700 pl-3 italic text-gray-300 text-sm">
            <p>
              "Əgər insan biliyinin və sirlərin axtarışında daha çox məmnunluq tapa bilsəydi, bir çox zərər qarşısını alınardı. Amma bizim elmlər ambisiyadır; bizim kəşflərimiz natamamdır."
            </p>
            <footer className="text-right mt-1">— Viktor Frankenstein</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-electric-blue-700 pl-3 italic text-gray-300 text-sm">
            <p>
              "Həyatım bir dəfə xoşbəxt idi; indi məhv olub; və mənim yeganə perspektivim sonsuz, amma aktiv bədbəxtlikdir."
            </p>
            <footer className="text-right mt-1">— Viktor Frankenstein</footer>
          </blockquote>
          
          <div className="text-right mt-4">
            <button className="px-3 py-1 bg-blood-red-800 text-gray-200 rounded-sm hover:bg-blood-red-700 transition-colors text-sm">
              Yeni Sitat Göstər
            </button>
          </div>
        </div>
      </div>
    </div>
  );