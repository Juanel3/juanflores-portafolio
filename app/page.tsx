import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './components/ContactForm';
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
        {/* Background Image - scroll en móvil (fixed no funciona en Safari/iOS) */}
        <div 
          className="absolute inset-0 w-full h-full z-0 hero-bg-inicio"
          style={{
            backgroundImage: "url('/images/Hero Gradient - 34.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Overlay para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-20">
          <div className="w-full grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg animate-fade-in-up">
                ¡Hola, soy<br /><strong className="font-bold">Juan Miguel</strong>!
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md animate-fade-in-up animation-delay-200">
                Bienvenido a mi <strong className="font-bold">portafolio</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-up animation-delay-400">
                <a href="#proyectos" className="px-8 py-3 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:brightness-110 active:scale-105 text-center" style={{ backgroundColor: '#32C4F0' }}>
                  Ver proyectos
                </a>
                <a href="#contacto" className="px-8 py-3 bg-transparent border-2 text-white rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-opacity-20 hover:shadow-lg active:scale-105 text-center" style={{ borderColor: '#32C4F0' }}>
                  Contáctame
                </a>
              </div>
            </div>
            
            {/* Right side - 3D Character */}
            <div className="flex justify-center items-center order-first md:order-last">
              <div className="w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center relative animate-fade-in-right animation-delay-600">
                <Image
                  src="/images/persona1.png"
                  alt="Juan Miguel trabajando en laptop"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="bg-black container mx-auto px-4 pt-32 pb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Sobre <span style={{ color: '#32C4F0' }}>mi</span>
        </h2>
        
        {/* Sobre mi - Tarjeta horizontal con el mismo diseño que los cuadros */}
        <div 
          className="rounded-[2.5rem] overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl"
          style={{ 
            backgroundColor: 'rgba(50, 50, 50, 0.5)',
            boxShadow: '0 0 10px 5px rgba(50, 196, 240, 0.4)',
            border: '2px solid #32C4F0'
          }}
        >
          <div className="grid md:grid-cols-3 gap-0 min-h-[320px]">
            {/* Left - Texto (2/3 del ancho en desktop) */}
            <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-white text-lg leading-relaxed mb-6">
                Soy Juan Flores, ingeniero en desarrollo de software con una gran pasión por la tecnología y el diseño. Aplico mis conocimientos en desarrollo y UX/UI para diseñar soluciones intuitivas y visualmente atractivas que mejoran la experiencia del usuario.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                La fotografía y edición de video son otras de mis pasiones, y las utilizo para añadir un toque único a mis proyectos. Cuento con experiencia en marketing digital, en creación de contenido y gestión de redes sociales.
              </p>
              <p className="text-white text-lg leading-relaxed">
                Siempre estoy en busca de nuevas oportunidades para aprender, innovar y mejorar mis habilidades.
              </p>
            </div>
            {/* Right - Foto dentro del cuadro con margen */}
            <div className="p-4 md:p-6 flex items-center justify-center">
              <div className="relative w-full min-h-[280px] md:min-h-[260px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/animation.png"
                  alt="Juan Miguel - Sobre mi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cuadrícula 2x2: Educación, Cursos, Habilidades, Software */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Educación */}
          <div className="rounded-[2.5rem] relative p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', boxShadow: '0 0 10px 5px rgba(50, 196, 240, 0.4)', border: '2px solid #32C4F0' }}>
            <h3 className="absolute top-4 left-6 px-5 py-2 rounded-full text-lg font-semibold text-white z-10 whitespace-nowrap" style={{ backgroundColor: '#32C4F0' }}>
              Educación
            </h3>
            <div className="text-white pt-12">
              <p className="text-lg font-medium mb-2">Ingeniería en desarrollo de software</p>
              <p className="text-gray-200 mb-1">Universidad Tecmilenio</p>
              <p className="text-gray-300">2021 - 2025</p>
            </div>
          </div>

          {/* Cursos | certificados */}
          <div className="rounded-[2.5rem] relative p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', boxShadow: '0 0 10px 5px rgba(50, 196, 240, 0.4)', border: '2px solid #32C4F0' }}>
            <h3 className="absolute top-4 left-6 px-5 py-2 rounded-full text-lg font-semibold text-white z-10 whitespace-nowrap" style={{ backgroundColor: '#32C4F0' }}>
              Cursos | certificados
            </h3>
            <div className="text-white pt-12">
              <ul className="space-y-2 list-disc list-inside">
                <li>Certificado en desarrollo de apps móviles</li>
                <li>Certificado en diseño multimedia</li>
                <li>Certificado en programación de videojuegos</li>
                <li>Curso de marketing digital</li>
                <li>Curso de community manager</li>
              </ul>
            </div>
          </div>

          {/* Habilidades */}
          <div className="rounded-[2.5rem] relative p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', boxShadow: '0 0 10px 5px rgba(50, 196, 240, 0.4)', border: '2px solid #32C4F0' }}>
            <h3 className="absolute top-4 left-6 px-5 py-2 rounded-full text-lg font-semibold text-white z-10 whitespace-nowrap" style={{ backgroundColor: '#32C4F0' }}>
              Habilidades
            </h3>
            <div className="text-white pt-12">
              <ul className="space-y-2 list-disc list-inside">
                <li>Diseño web</li>
                <li>Fotografía</li>
                <li>Diseño UX/UI</li>
                <li>Marketing digital</li>
                <li>Edición de video</li>
              </ul>
            </div>
          </div>

          {/* Software */}
          <div className="rounded-[2.5rem] relative p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', boxShadow: '0 0 10px 5px rgba(50, 196, 240, 0.4)', border: '2px solid #32C4F0' }}>
            <h3 className="absolute top-4 left-6 px-5 py-2 rounded-full text-lg font-semibold text-white z-10 whitespace-nowrap" style={{ backgroundColor: '#32C4F0' }}>
              Software
            </h3>
            <div className="flex items-center justify-start gap-8 flex-wrap pt-12 pl-2">
              <Image
                src="/images/image 2.png"
                alt="Software 1"
                width={80}
                height={80}
                className="object-contain h-20"
              />
              <Image
                src="/images/image 3.png"
                alt="Software 2"
                width={80}
                height={80}
                className="object-contain h-20"
              />
              <Image
                src="/images/image 4.png"
                alt="Software 3"
                width={80}
                height={80}
                className="object-contain h-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="proyectos" 
        className="relative w-full py-32 overflow-hidden"
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
        
        <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-14 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            Mis <span style={{ color: '#32C4F0' }}>proyectos</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
          <div className="flex justify-center mt-16">
            <Link
              href="/proyectos"
              className="px-10 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:brightness-110 active:scale-105 inline-block"
              style={{ backgroundColor: '#32C4F0' }}
            >
              Ver todos
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Fondo footer.jpg, ilustración correo */}
      <section 
        id="contacto" 
        className="relative w-full min-h-screen flex items-center overflow-hidden"
      >
        {/* Fondo de la sección: footer.jpg */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/footer.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Contacto
            </h2>
            
            <div className="w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              {/* Izquierda - Formulario */}
              <div className="text-white pt-8">
                <ContactForm />
              </div>
              
              {/* Derecha - Ilustración correo, alineada con inputs y mismo alto que el formulario */}
              <div className="pt-8 h-full min-h-[320px] flex">
                <div className="w-full h-full rounded-3xl bg-white/95 shadow-xl border border-blue-100 overflow-hidden p-6 flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full flex items-center justify-center">
                    <Image
                      src="/images/correo.jpg"
                      alt="Contacto - comunicación"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center gap-6">
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

