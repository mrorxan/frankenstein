const ModernFrankensteins = () => {
  return (
    <div className="modern-frankensteins bg-gray-800 p-6 rounded-md h-full relative overflow-hidden">
      {/* Laboratory notes background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5" 
           style={{ backgroundImage: "url('/images/science-notes.jpg')" }}></div>
      
      <div className="relative z-10">
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">
            Mary Shelley'nin <em>Frankenstein</em> əsəri müasir dünyamızda, xüsusilə də yeni texnologiyalarda etik dilemmaları ilə üzləşdiyimiz zaman rezonans yaratmağa davam edir. Romanın nəzarətsiz elmi ambisiyalar haqqında xəbərdarlıqları bugünkü inkişaflarda yeni aktuallıq tapır.
          </p>
          
          <h3 className="text-xl text-electric-blue-400 mt-6 mb-3">Süni İntellekt</h3>
          <p className="mb-4">
            Viktor'un məxluqu kimi, AI sistemləri də nəzarətimizdən kənara çıxa biləcək insan yaradılışlarıdır. AI-nin insan zəkasını keçməsi qorxusu - çox vaxt "tekliklə" adlandırılır - Viktor'un nəzarət edə bilmədiyi bir şey yaratmaq dəhşətini əks etdirir. Getdikcə daha avtonom sistemlər inkişaf etdirdiyimiz üçün, Shelley'nin yaradıcı məsuliyyəti haqqında sualları təcili olur.
          </p>
          
          <h3 className="text-xl text-electric-blue-400 mt-6 mb-3">Genetik Mühəndislik</h3>
          <p className="mb-4">
            CRISPR texnologiyası və genetik modifikasiya alimlərə həyatın fundamental tikinti bloklarını dəyişdirməyə imkan verir. Genləri redaktə etmək qabiliyyəti tanrı oynamaq haqqında dərin suallar qaldırır - Viktor'u məhv edən məhz bu günah idi. Embrionları dəyişdirmək və potensial olaraq təkmilləşdirilmiş insanlar yaratmaq gücünə sahib olduğumuz üçün, Shelley'nin iki əsr əvvəl qoyduğu eyni əxlaqi suallarla üzləşirik.
          </p>
          
          <h3 className="text-xl text-electric-blue-400 mt-6 mb-3">Yaradılışa Məsuliyyət</h3>
          <p className="mb-4">
            Bəlkə də <em>Frankenstein</em>-dən ən davamlı dərs yaradılışın özünün təhlükələri haqqında deyil, ondan sonra gələn məsuliyyət haqqındadır. Viktor'un əsl günahı onu yaratmaq deyil, yaratdığını tərk etmək idi. İnsanlığı yenidən formalaşdıra biləcək texnologiyalar inkişaf etdirdiyimiz üçün, Shelley'nin romanı bizə xatırladır ki, etik düşüncə və davamlı qayğı olmadan innovasiya faciəyə səbəb olur.
          </p>
          
          <div className="mt-6 p-4 border border-blood-red-800 rounded-md bg-gray-900">
            <p className="italic text-gray-400">
              "Qorxunc olmalıdır; çünki dünyanın Yaradıcısının möhtəşəm mexanizmini ələ salmaq üçün hər hansı bir insan səyi son dərəcə qorxunc olardı."
              <span className="block text-right mt-2">— Mary Shelley, <em>Frankenstein</em></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernFrankensteins;