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

      <section className="relative min-h-screen w-full overflow-hidden py-20 sm:py-24 md:py-28">
        {/* Fondo degradado azul celeste a negro */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: 'linear-gradient(180deg, #000 0%, #000 25%, #1a5f7a 45%, #32C4F0 75%, #fff 100%)',
          }}
        />

        <div className="relative z-10 container max-w-5xl">
          <h1 className="mb-12 text-center text-3xl font-bold text-white md:mb-14 md:text-4xl">
            Mis <span style={{ color: '#32C4F0' }}>proyectos</span>
          </h1>

          <div className="mb-10 grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
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
              className="inline-block rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-100 sm:text-base"
              style={{ backgroundColor: '#32C4F0' }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
