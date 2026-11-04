// File: src/components/ProjectCardCarousel.jsx
import { useState, useEffect } from 'react';

const projectsData = [
    {
      id: 1,
      title: 'UMKM AAC - User and Admin Platform',
      description: 'A platform for showcasing local businesses and products in Alun-Alun Contong, Surabaya.',
      tech: 'Laravel | Livewire | Tailwind CSS',
      images: ['/umkm/umkmberanda.webp', '/umkm/2.webp', '/umkm/3.webp', '/umkm/4.webp', '/umkm/5.webp', '/umkm/6.webp'],
    },
    {
      id: 2,
      title: 'Cinereview and Filmerakey - User Platform and API Provider',
      description: 'An interactive movie review platform integrated with a REST API backend.',
      tech: 'Laravel | REST API',
      images: ['/film/1.webp', '/film/2.webp', '/film/3.webp', '/film/4.webp', '/film/5.webp', '/film/6.webp', '/film/7.webp'],
    },
    {
      id: 3,
      title: 'Minilemon Learning System - User and Admin Platform ',
      description: 'A LMS designed to support online learning and task management.',
      tech: 'Next.js | Tailwind CSS',
      images: ['/mls/1.webp', '/mls/2.webp', '/mls/3.webp', '/mls/4.webp','/mls/5.webp', '/mls/6.webp'],
    },
    {
      id: 4,
      title: 'Cycletech - User and Admin Platform',
      description: 'A digital platform for sharing recycling ideas and buying and selling recycled products.',
      tech: 'Laravel | Tailwind CSS',
      images: ['/cycle/userberanda.webp', '/cycle/userkelola.webp', '/cycle/userkreasi.webp', '/cycle/userrewards.webp', '/cycle/admindashboard.webp', '/cycle/admin1.webp', '/cycle/admin2.webp', '/cycle/admin3.webp'],
    },
  ];

function ProjectCardCarousel({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [currentIndex]);
  

  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[520px] rounded-2xl overflow-hidden shadow-md group">
      <div
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {project.images.map((img, index) => (
          <div key={index} className="w-full h-full shrink-0 relative">
            <img
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full h-full w-auto object-contain object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e8488c]/80 via-[#e8488c]/20 to-transparent" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-4 z-20 text-white font-outfit pr-16">
        <span className="text-xs font-semibold px-2.5 py-1 bg-[#751480]/80 rounded-lg backdrop-blur-sm mb-2 inline-block">
          {project.tech}
        </span>
        <h3 className="text-lg md:text-xl font-bold leading-tight">
          {project.title}
        </h3>
        <p className="text-xs md:text-sm text-slate-200 line-clamp-1">
          {project.description}
        </p>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
        aria-label="Previous slide"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
        aria-label="Next slide"
      >
        ❯
      </button>

      <div className="absolute bottom-3 right-4 z-30 flex gap-1.5">
        {project.images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectSection () {
    return (
    <section id='project' className="scroll-mt-30 mb-20">
        <h2 className='text-black font-bold text-4xl font-outfit shadow-xl mb-10'>My Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
                <ProjectCardCarousel project={projectsData[0]} />
            </div>
            <div className="md:col-span-1">
                <ProjectCardCarousel project={projectsData[1]} />
            </div>
            <div className="md:col-span-1">
                <ProjectCardCarousel project={projectsData[2]} />
            </div>
            <div className="md:col-span-2">
                <ProjectCardCarousel project={projectsData[3]} />
            </div>
        </div>
    </section>
    );
}