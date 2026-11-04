import React, { useState } from 'react';

const achievementsData = [
  {
    id: 1,
    title: 'Sertifikasi BNSP',
    category: 'Professional Certification',
    image: '/achievements/BNSP.png',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2026',
    description: 'National professional certification in Web Programming, validating competence in developing structural web applications.',
  },
  {
    id: 2,
    title: 'Hak Kekayaan Intelektual (HKI)',
    category: 'Intellectual Property',
    image: '/achievements/HKI.png',
    issuer: 'Ministry of Law and Human Rights RI',
    year: '2026',
    description: 'Granted Intellectual Property Rights (Copyright) for original website user interface design and software architectural layout.',
  },
  {
    id: 3,
    title: 'Rakamin Academy',
    category: 'Intensive Bootcamp',
    image: '/achievements/RAKAMIN.png',
    issuer: 'Rakamin Academy x Kampus Merdeka',
    year: '2024',
    description: 'Completed intensive full-stack development training, mastering front-end, back-end API integration, and collaborative software projects.',
  },
  {
    id: 4,
    title: 'Conference Presenter',
    category: 'Academic Speaker',
    image: '/achievements/PRESENTER.png',
    issuer: 'Academic Conference Committee',
    year: '2026',
    description: 'Actively presented data science and machine learning research findings before an academic audience and peer reviewers.',
  },
];

function AchievementCard({ item, onOpenModal }) {
  return (
    <div className="w-full sm:w-[220px] lg:w-[240px] bg-[#e8488c] p-2 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300 font-outfit text-center flex flex-col items-center justify-between">
      <div className="w-full aspect-[3/4] mb-3 rounded-xl overflow-hidden flex items-center justify-center p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>
      <div className="w-full">
        <span className="text-m md:text-l font-quick px-3 py-1 bg-white/20 text-white rounded-full inline-block mb-2">
          {item.category}
        </span>
        <h3 className="text-l md:text-xl font-bold text-white leading-snug line-clamp-2 min-h-[40px] flex items-center justify-center">
          {item.title}
        </h3>
      </div>
      <button
        onClick={() => onOpenModal(item)}
        className="mt-3 w-full py-1.5 px-3 bg-[#751480] hover:bg-[#5b0e64] text-white text-xs font-semibold rounded-xl transition duration-200 cursor-pointer shadow-sm"
      >
        View Detail
      </button>
    </div>
  );
}

export default function AchievementSection() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="achieve" className="scroll-mt-30 mb-20">
      <h2 className="text-black font-bold text-4xl font-outfit shadow-xl">
        Achievements & Certifications
      </h2>

      {/* Layout Piramida Terbalik (3 Atas, 2 Bawah) */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 ">
        {achievementsData.map((item) => (
          <AchievementCard
            key={item.id}
            item={item}
            onOpenModal={setSelectedAchievement}
          />
        ))}
      </div>

      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="bg-[#f0a5c5] rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative font-outfit text-left animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close (X) */}
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition duration-200 cursor-pointer"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Gambar Sertifikat Utuh */}
              <div className="w-full bg-slate-100/70 rounded-2xl p-2 flex justify-center">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
                />
              </div>
              <div className="w-full font-quick font-grey-800">
                <span className="text-l md:text-xl px-3 py-1 bg-[#751480]/10 text-[#751480] rounded-full inline-block mb-3">
                  {selectedAchievement.category}
                </span>
                <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
                  {selectedAchievement.title}
                </h3>
                <p className="text-l md:text-xl mb-1">
                  Issued by: <span className="text-slate-700 font-semibold">{selectedAchievement.issuer}</span>
                </p>
                <p className="text-l md:text-xl mb-4">
                  Year: <span className="text-slate-700 font-semibold">{selectedAchievement.year}</span>
                </p>
                <p className="text-l md:text-xl leading-relaxed border-t border-slate-100 pt-3">
                  {selectedAchievement.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}