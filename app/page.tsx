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
          <div className="mx-auto w-full max-w-3xl px-1 text-white flex flex-col items-center text-center space-y-5 sm:space-y-6">
            <p className="text-lg font-medium text-white/90 drop-shadow-md animate-hero-subtitle sm:text-xl md:text-2xl">
              ¡Hola, soy <strong className="font-bold text-white">Juan Flores</strong>!
            </p>
            <h1 className="text-4xl font-bold leading-tight drop-shadow-lg animate-hero-title animation-delay-200 md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="hero-title-gradient-text">Diseñador UX/UI</span>
            </h1>
            <p className="text-base text-white drop-shadow-md animate-hero-subtitle animation-delay-400 md:text-lg">
              Bienvenido a mi portafolio
            </p>
            <div className="flex w-full max-w-sm flex-col gap-3 pt-8 animate-hero-cta animation-delay-600 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 sm:pt-6">
              <a href="#proyectos" className="inline-flex w-full items-center justify-center rounded-full border-2 border-transparent px-6 py-2.5 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-100 sm:w-auto sm:px-7 sm:py-3 sm:text-base" style={{ backgroundColor: '#32C4F0' }}>
                Ver proyectos
              </a>
              <a href="#contacto" className="inline-flex w-full items-center justify-center rounded-full border-2 bg-transparent px-6 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-opacity-20 hover:shadow-lg active:scale-100 sm:w-auto sm:px-7 sm:py-3 sm:text-base" style={{ borderColor: '#32C4F0' }}>
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="bg-black">
        <div className="container max-w-5xl py-16 sm:py-20 md:py-24">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-10 md:text-4xl">
            Sobre <span style={{ color: '#32C4F0' }}>mí</span>
          </h2>

          <div className="mb-10 md:mb-12">
            <p className="text-sm leading-relaxed text-white sm:text-base">
              Soy Juan Flores, ingeniero en desarrollo de software con enfoque en diseño UX/UI. Aplico mis conocimientos para diseñar soluciones intuitivas y visualmente atractivas que mejoran la experiencia del usuario. Cuento con experiencia en marketing digital, en creación de contenido y gestión de redes sociales. Siempre estoy en busca de nuevas oportunidades para aprender, innovar y mejorar mis habilidades.
            </p>
          </div>

          {/* Cuadrícula 2x2: Educación, Cursos, Habilidades, Software */}
          <div className="mb-6 grid gap-4 md:grid-cols-2 md:gap-5">
            {/* Educación */}
            <div className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-5 pt-16 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:rounded-[2.25rem]">
              <h3
                className="absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-sm font-semibold text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2 sm:text-base"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Educación
              </h3>
              <div className="text-white">
                <p className="mb-2 text-base font-medium text-white">Ingeniería en desarrollo de software</p>
                <p className="mb-1 text-gray-200">Universidad Tecmilenio</p>
                <p className="text-gray-300">2021 - 2025</p>
              </div>
            </div>

            {/* Cursos | certificados */}
            <div className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-5 pt-16 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:rounded-[2.25rem]">
              <h3
                className="absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-left text-sm font-semibold leading-snug text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2 sm:text-base"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Cursos | certificados
              </h3>
              <div className="text-white">
                <ul className="list-inside list-disc space-y-1.5 text-sm sm:text-base">
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
                className="absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-sm font-semibold text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2 sm:text-base"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Habilidades
              </h3>
              <div className="text-white">
                <ul className="list-inside list-disc space-y-1.5 text-sm sm:text-base">
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
                className="absolute left-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] items-center rounded-[2rem] px-4 py-2 text-sm font-semibold text-white sm:left-4 sm:top-4 sm:rounded-[2.25rem] sm:px-4 sm:py-2 sm:text-base"
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
      <section 
        id="proyectos" 
        className="relative w-full overflow-hidden py-20 sm:py-24 md:py-28"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-screen h-full z-0 animate-float-bg"
          style={{
            backgroundImage: "url('/images/Hero Gradient - 34.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            left: '50%',
            marginLeft: '-50vw',
            width: '100vw'
          }}
        />
        
        {/* Overlay para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />
        
        <div className="relative z-10 container max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-10 md:text-4xl">
            Mis <span style={{ color: '#32C4F0' }}>proyectos</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-7">
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
          <div className="mt-10 flex justify-center md:mt-12">
            <Link
              href="/proyectos"
              className="inline-block rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-100 sm:text-base"
              style={{ backgroundColor: '#32C4F0' }}
            >
              Ver todos
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="relative w-full overflow-hidden bg-black py-16 md:py-20"
      >
        <div className="relative z-10 container w-full">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 md:p-10">
              <h2 className="mb-6 text-center text-3xl font-bold text-white md:mb-8 md:text-4xl">
                Contacto
              </h2>

              <div className="mx-auto w-full max-w-md text-white">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container flex max-w-5xl flex-col items-center justify-center gap-4 py-8 text-center">
          <div>
            <p className="text-white font-medium mb-1">Juan Flores</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
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

