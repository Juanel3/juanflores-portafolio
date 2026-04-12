import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './components/ContactForm';
import HeroBackground from './components/HeroBackground';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NavBar />

      {/* Hero Section with Background Image */}
      <section
        id="inicio"
        className="relative w-full min-h-screen flex items-center overflow-hidden"
      >
        <HeroBackground />
        
        {/* Overlay para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />
        
        {/* Content */}
        <div className="relative z-10 container w-full pt-16 pb-16 sm:pt-20 sm:pb-20">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center space-y-6 text-center text-white sm:space-y-7 lg:max-w-2xl lg:space-y-5">
            <p className="type-hero-intro drop-shadow-md animate-hero-subtitle">
              ¡Hola, soy <strong className="font-bold text-white">Juan Flores</strong>!
            </p>
            <h1 className="type-hero-display drop-shadow-lg animate-hero-title animation-delay-200">
              <span className="hero-title-gradient-text">Diseñador UX/UI</span>
            </h1>
            <p className="type-hero-tagline drop-shadow-md animate-hero-subtitle animation-delay-400">
              Bienvenido a mi portafolio
            </p>
            <div className="flex w-full max-w-md flex-col gap-4 pt-9 animate-hero-cta animation-delay-600 sm:max-w-none sm:flex-row sm:justify-center sm:gap-5 sm:pt-7 lg:gap-4 lg:pt-6">
              <a href="#proyectos" className="type-button inline-flex w-full items-center justify-center rounded-full border-2 border-transparent px-8 py-3 text-center text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-100 sm:w-auto sm:px-10 sm:py-3.5 lg:px-9 lg:py-3" style={{ backgroundColor: '#32C4F0' }}>
                Ver proyectos
              </a>
              <a href="#contacto" className="type-button inline-flex w-full items-center justify-center rounded-full border-2 bg-transparent px-8 py-3 text-center text-white transition-all duration-300 hover:scale-105 hover:bg-opacity-20 hover:shadow-lg active:scale-100 sm:w-auto sm:px-10 sm:py-3.5 lg:px-9 lg:py-3" style={{ borderColor: '#32C4F0' }}>
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="bg-black">
        <div className="container w-full max-w-4xl py-16 sm:py-20 md:py-24 lg:max-w-5xl xl:max-w-6xl">
          <h2 className="type-section-title mb-8 text-center md:mb-10">
            Sobre <span style={{ color: '#32C4F0' }}>mí</span>
          </h2>

          <div className="mb-10 md:mb-12">
            <p className="type-lead text-white">
              Soy Juan Flores, ingeniero en desarrollo de software con enfoque en diseño UX/UI. Aplico mis conocimientos para diseñar soluciones intuitivas y visualmente atractivas que mejoran la experiencia del usuario. Cuento con experiencia en marketing digital, en creación de contenido y gestión de redes sociales. Siempre estoy en busca de nuevas oportunidades para aprender, innovar y mejorar mis habilidades.
            </p>
          </div>

          {/* Cuadrícula 2x2: Educación, Cursos, Habilidades, Software */}
          <div className="mb-6 grid gap-4 md:grid-cols-2 md:gap-5">
            {/* Educación */}
            <div className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-5 pt-16 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:rounded-[2.25rem]">
              <h3
                className="type-pill absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Educación
              </h3>
              <div className="text-white">
                <p className="type-body mb-2 font-medium text-white">Ingeniería en desarrollo de software</p>
                <p className="type-body mb-1 text-gray-200">Universidad Tecmilenio</p>
                <p className="type-body text-gray-300">2021 - 2025</p>
              </div>
            </div>

            {/* Cursos | certificados */}
            <div className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-5 pt-16 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:rounded-[2.25rem]">
              <h3
                className="type-pill absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-left leading-snug text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Cursos | certificados
              </h3>
              <div className="text-white">
                <ul className="type-body list-inside list-disc space-y-1.5">
                  <li>Certificado en desarrollo de apps móviles</li>
                  <li>Certificado en diseño multimedia</li>
                  <li>Certificado en programación de videojuegos</li>
                  <li>Curso de marketing digital</li>
                  <li>Curso de community manager</li>
                </ul>
              </div>
            </div>

            {/* Habilidades */}
            <div className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-5 pt-16 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:rounded-[2.25rem]">
              <h3
                className="type-pill absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Habilidades
              </h3>
              <div className="text-white">
                <ul className="type-body list-inside list-disc space-y-1.5">
                  <li>Diseño web</li>
                  <li>Fotografía</li>
                  <li>Diseño UX/UI</li>
                  <li>Marketing digital</li>
                  <li>Edición de video</li>
                </ul>
              </div>
            </div>

            {/* Software */}
            <div className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-5 pt-16 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:rounded-[2.25rem]">
              <h3
                className="type-pill absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Software
              </h3>
              <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8">
                <Image
                  src="/images/image 2.png"
                  alt="Software 1"
                  width={64}
                  height={64}
                  className="h-14 object-contain sm:h-16"
                />
                <Image
                  src="/images/image 3.png"
                  alt="Software 2"
                  width={64}
                  height={64}
                  className="h-14 object-contain sm:h-16"
                />
                <Image
                  src="/images/image 4.png"
                  alt="Software 3"
                  width={64}
                  height={64}
                  className="h-14 object-contain sm:h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="relative w-full overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div className="projects-bg-animated" />
          <div className="projects-bg-glow-soft" />
        </div>
        <div className="relative z-10 px-5 sm:px-6 md:px-0">
          <div className="container w-full max-w-4xl py-16 sm:py-20 md:py-24 lg:max-w-5xl xl:max-w-6xl">
            <h2 className="type-section-title mb-8 text-center md:mb-10">
              Mis <span style={{ color: '#32C4F0' }}>proyectos</span>
            </h2>
            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            <ProjectCard
              title="Clarity"
              description="App móvil para organizar mejor tu dinero y tomar el control de tus finanzas personales."
              imageSrc="/images/app.png"
              imageAlt="Clarity App"
              href="/proyecto/clarity"
            />
            <ProjectCard
              title="JM Estudio"
              description="Página web moderna y funcional que muestre los servicios de una agencia."
              imageSrc="/images/jmportada.png"
              imageAlt="JM Estudio"
              href="/proyecto/jm-estudio"
            />
            <ProjectCard
              title="Imprenta"
              description="Rediseño web para mostrar los servicios que ofrece la empresa."
              imageSrc="/images/imprentaportad.png"
              imageAlt="Imprenta"
              href="/proyecto/imprenta"
            />
          </div>
          <div className="mt-8 flex justify-center md:mt-10">
            <Link
              href="/proyectos"
              className="type-button-sm inline-block rounded-full px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-100"
              style={{ backgroundColor: '#32C4F0' }}
            >
              Ver todos
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="relative w-full overflow-hidden bg-black py-16 md:py-20"
      >
        <div className="relative z-10 container w-full">
          <div className="mx-auto w-full max-w-md">
            <h2 className="type-section-title mb-3 text-center md:mb-4">
              Contacto
            </h2>
            <p className="type-lead mb-8 text-center text-gray-300 sm:mb-10">
              ¿Necesitas una web o una app?{' '}
              <span style={{ color: '#32C4F0' }}>Contáctame</span>.
            </p>

            <div className="rounded-3xl border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 md:p-10">
              <div className="w-full text-white">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container flex max-w-4xl flex-col items-center justify-center gap-4 py-8 text-center">
          <div>
            <p className="type-body font-medium text-white">Juan Flores</p>
            <div className="type-body-sm mt-1 flex items-center justify-center gap-2 text-gray-400">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                className="w-4 h-4 flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:juanmf3@outlook.com" className="hover:text-[#32C4F0] transition-colors">
                juanmf3@outlook.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

