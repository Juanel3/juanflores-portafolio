import Link from 'next/link';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Clarity',
    description: 'App móvil para organizar mejor tu dinero y tomar el control de tus finanzas personales.',
    imageSrc: '/images/app.png',
    imageAlt: 'Clarity App',
    href: '/proyecto/clarity',
  },
  {
    title: 'JM Estudio',
    description: 'Página web moderna y funcional que muestre los servicios de una agencia.',
    imageSrc: '/images/jmportada.png',
    imageAlt: 'JM Estudio',
    href: '/proyecto/jm-estudio',
  },
  {
    title: 'Imprenta',
    description: 'Rediseño web para mostrar los servicios que ofrece la empresa.',
    imageSrc: '/images/imprentaportad.png',
    imageAlt: 'Imprenta',
    href: '/proyecto/imprenta',
  },
];

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-black">
      <NavBar />

      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Fondo degradado azul celeste a negro */}
        <div
          className="absolute inset-0 z-0 h-full w-full"
          style={{
            background: 'linear-gradient(180deg, #000 0%, #000 25%, #1a5f7a 45%, #32C4F0 75%, #fff 100%)',
          }}
        />

        <div className="relative z-10 px-5 sm:px-6 md:px-0">
          <div className="container w-full max-w-4xl py-16 sm:py-20 md:py-24 lg:max-w-5xl xl:max-w-6xl">
            <h1 className="type-section-title mb-8 text-center md:mb-10">
              Mis <span style={{ color: '#32C4F0' }}>proyectos</span>
            </h1>

            <div className="mb-8 grid gap-4 md:grid-cols-2 md:mb-10 md:gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.href}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  href={project.href}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="/#inicio"
                className="type-button-sm inline-block rounded-full px-8 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-100"
                style={{ backgroundColor: '#32C4F0' }}
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
