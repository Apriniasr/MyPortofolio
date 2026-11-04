import React, { useState } from 'react';
import ProjectSection from './projectcard';
import AchievementSection from './achievementcard';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#feb0d1]">

      {/* Header */}
      <header className='w-full bg-[#feb0d3] sticky top-0 z-50 shadow-xl'>
        <div className='flex flex-row justify-between items-center px-2 md:px-20 py-2 text-[#751480]'>
          <div className='flex items-center gap-3 text-3xl lg:text-5xl font-cursive animate-slide-left'>
            <img src="/logoku.png" alt="logo saya" className='w-12 md:w-20'/>
            PORTOFOLIO
          </div>
          <nav className='text-l hidden md:flex gap-4 font-cursive animate-slide-right'>
            <a href="#about" className='lg:text-xl hover:opacity-80 transition'>About</a>
            <a href="#project" className='lg:text-xl hover:opacity-80 transition'>Project</a>
            <a href="#achieve" className='lg:text-xl hover:opacity-80 transition'>Achievement</a>
            <a href="#contact" className='lg:text-xl hover:opacity-80 transition'>Contact</a>
          </nav>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-3xl focus:outline-none p-2'
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        {isOpen && (
          <nav className='md:hidden bg-[#feb0d3] border-t border-[#751480]/20 flex flex-col items-center py-4 font-cursive text-[#751480] shadow-lg gap-6'>
            <a href="#about" onClick={() => setIsOpen(false)} className='text-xl hover:opacity-80 transition'>About</a>
            <a href="#project" onClick={() => setIsOpen(false)} className='text-xl hover:opacity-80 transition'>Project</a>
            <a href="#achieve" onClick={() => setIsOpen(false)} className='text-xl hover:opacity-80 transition'>Achievement</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className='text-xl hover:opacity-80 transition'>Contact</a>
          </nav>
        )}
      </header>
      
      <div className="w-full md:max-w-7xl mx-auto py-2 md:py-16 px-12 lg:px-20">
      {/* Introduction */}
          <div className="flex flex-col sm:flex-row gap-6 items-start py-14 mb-20">
            <div className="w-full md:w-1/3 flex flex-col items-center animate-slide-left">
              <div className="relative w-64 h-80 flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0 w-48 h-62 overflow-hidden ">
                  <img 
                    src="/nosuitnobg.png"
                    alt="Foto Casual" 
                    className="w-3/4 h-auto object-cover filter blur-[1.5px]"
                  />
                  <div className="absolute inset-0 bg-[000000]/20" />
                </div>

                <div className="absolute bottom-0 right-0 z-10 w-auto h-full overflow-hidden transition hover:scale-105 duration-300">
                  <img 
                    src="/nobg.png" 
                    alt="Foto Profil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-8 left-4 z-20 px-2">
                  <h3 className="text-3xl text-left font-bold text-white drop-shadow-md font-outfit">
                    Aprinia<br/>
                    Salsabila <br/>
                    Roiqoh
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 items-center animate-slide-right">
              <h2 className="text-2xl md:text-4xl font-bold text-black mb-2 font-outfit">
                Front-End Developer<br />
              </h2>
              <h3 className='text-l md:text-xl text-grey-800 font-quick'>
                React.js · Next.js · Laravel
              </h3>
              <h4 className='text-m md:text-l text-grey-800 font-quick'>
                Informatics Graduate | Web Developer | Open to Work
              </h4>
              <p className='text-m md:text-l mt-4 text-grey-600 font-quick text-justify'>
                Hi, I'm Aprinia Salsabila, an Informatics graduate passionate about building modern, responsive, and user-friendly 
                web applications.<br/><br/>
                With hands-on experience in academic, internship, and personal projects, I specialize in Front-End Development 
                using React.js, Next.js, Laravel, Livewire, and Tailwind CSS. I also have experience in REST API integration, 
                UI development, and building interactive web applications.<br/><br/>
                I'm passionate about learning new technologies, solving problems, and turning ideas into functional digital 
                experiences.
              </p>
              <div className='flex justify-end mt-4 md:mt-0'>
                <a href='#contact' className='px-10 py-4 bg-[#751480] text-white text-l rounded-xl hover:bg-[#5b0e64] hover:shadow-lg hover:-translate-y-0.5'>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        
          {/* About Me */}
          <section id='about' className='scroll-mt-30 mb-20'>
            <h2 className='text-black font-bold text-4xl font-outfit shadow-xl'>My Background</h2>
            <div className='flex flex-col md:flex-row justify-between items-center gap-0 md:gap-6'>
              <div className='w-full md:w-4/7'>
                <h2 className='text-2xl md:text-3xl text-black mt-10 font-outfit font-bold'>Education</h2>
                <h3 className='text-l md:text-xl text-grey-800 font-quick'>Bachelor of Informatics</h3>
                <h4 className='text-m md:text-l text-grey-800 font-quick'> UPN "Veteran Jawa Timur | 2022 - 2026</h4>
                <p className='text-m md:text-l mt-4 text-grey-600 font-quick text-justify'>
                  Graduated with a GPA of 3.92/4.00. Throughout my studies, I developed a strong foundation in software development, 
                  web programming, database management, and information systems. I gained hands-on experience through academic projects 
                  involving website development, application design, database implementation, and REST API integration. These experiences 
                  helped me strengthen my technical skills, problem-solving abilities, and teamwork in developing functional web-based 
                  applications.
                </p>
              </div>
              <div className='md:w-3/7 relative flex items-center justify-center md:p-4'>
                <img src="/Logo UPN.png" alt="Logo UPN"
                className="relative z-10 hidden md:flex md:w-3/5 h-auto object-contain drop-shadow-md " />
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center md:gap-6'>
              <div className='md:w-3/7 relative flex items-center justify-center md:p-4'>
                <img src="/techlogo.png" alt="Tech Stack Logo"
                className="relative z-10 hidden md:flex md:w-3/5 h-auto object-contain drop-shadow-md " />
              </div>
              <div className='w-full md:w-4/7'>
                <h2 className='text-2xl md:text-3xl text-black mt-10 font-outfit font-bold'>Tech Stack</h2>
                <h3 className='text-l md:text-xl text-grey-800 font-quick'>Web Development Tools</h3>
                <h4 className='text-m md:text-l text-grey-800 font-quick'>Front-End Developer</h4>
                <p className='text-m md:text-l mt-4 text-grey-600 font-quick text-justify'>
                  Throughout my academic journey, internships, and development projects, I have gained hands-on experience 
                  working with various technologies to build web applications. My primary focus is Front-End Development, 
                  while also exploring Back-End Development, database management, and REST API integration.
                </p>
              </div>

            </div>
          </section>

          {/* Projects */}
          <ProjectSection />          

          {/* Achievement */}
          <AchievementSection />

          {/* Contact */}
          <section id='contact' className='scroll-mt-30 mb-20'>
            <h2 className='text-black font-bold text-4xl font-outfit shadow-xl items-center'>Get in Touch</h2>
            <div className="rounded-3xl shadow-xl backdrop-blur-xs mt-5 py-12">
              <div className='grid grid-cols-2 items-center'>
                <div className='col-span-1'>
                  <h2 className="px-12 text-2xl md:text-4xl font-outfit font-bold mb-4">
                    Let's Work Together!
                  </h2>
                  <p className="font-quick text-left px-12 text-grey-800">
                    I am currently open to new opportunities, freelance projects, and collaborations. 
                    Feel free to reach out if you'd like to connect or discuss a project!
                  </p>
                </div>
                <div className="col-span-1 flex flex-col gap-6 items-center">
                  <div>
                    <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=apriniasalsabila99@gmail.com" target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#751480] hover:bg-[#5b0e64] text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-200 text-sm sm:text-base cursor-pointer">
                    Send Me an Email
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-semibold">
                    <a
                      href="www.linkedin.com/in/aprinia-salsabila-491484305"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/70 hover:bg-white text-slate-800 rounded-xl border border-slate-200/60 transition duration-200"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://github.com/Apriniasr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/70 hover:bg-white text-slate-800 rounded-xl border border-slate-200/60 transition duration-200"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Frontend Developer. All rights reserved.</p>
            <div className="flex gap-6">
             <span className="text-slate-600 font-normal px-2">
                📍 Surabaya, Indonesia
              </span>
            </div>
          </footer>
      </div>
    </div>
  );
}