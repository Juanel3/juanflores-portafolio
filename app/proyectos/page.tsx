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

      <section className="relative w-full py-32 overflow-hidden min-h-screen">
        {/* Fondo degradado azul celeste a negro */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: 'linear-gradient(180deg, #000 0%, #000 25%, #1a5f7a 45%, #32C4F0 75%, #fff 100%)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-20 text-white text-center">
            Mis <span style={{ color: '#32C4F0' }}>proyectos</span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              className="px-10 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:brightness-110 active:scale-105 inline-block"
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
