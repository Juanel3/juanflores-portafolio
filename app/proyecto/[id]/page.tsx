import Image from 'next/image';
import Link from 'next/link';
import ImageGallery from './ImageGallery';
import OpenGalleryButton from './OpenGalleryButton';
import OpenProjectGalleryButton from './OpenProjectGalleryButton';
import NavBar from '../../components/NavBar';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image: string;
  websiteUrl?: string;
  laptopImage?: string;
  previewImages?: {
    inicio?: string;
    servicios?: string;
    portafolio?: string;
  };
}

const projects: { [key: string]: Project } = {
  'jm-estudio': {
    id: 'jm-estudio',
    title: 'Proyecto',
    subtitle: 'JM Estudio',
    tag: 'Página web',
    description: 'El objetivo del proyecto es crear una página web moderna y funcional que muestre los servicios de la agencia, genere confianza en los clientes y ayude a aumentar su presencia en línea.',
    image: '/images/jmportada.png',
    websiteUrl: 'https://jm-estudio.vercel.app',
  },
  'clarity': {
    id: 'clarity',
    title: 'Proyecto',
    subtitle: 'Clarity',
    tag: 'App móvil',
    description: 'App móvil para organizar mejor tu dinero y tomar el control de tus finanzas personales.',
    image: '/images/app.png',
  },
  'imprenta': {
    id: 'imprenta',
    title: 'Proyecto',
    subtitle: 'Imprenta',
    tag: 'Rediseño web',
    description: 'El objetivo es que la nueva página web refleje una imagen más profesional y actual de la empresa. Se espera que el diseño facilite la navegación, sea más atractivo y que ayude a mejorar la comunicación con los clientes y reforzar la presencia de la marca.',
    image: '/images/imprentaportad.png',
  },
};

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> | { id: string }
}) {
  // Handle both sync and async params
  const resolvedParams = params instanceof Promise ? await params : params;
  const project = projects[resolvedParams.id];

  if (!project) {
    return (
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Proyecto no encontrado</h1>
          <Link href="/#proyectos" className="text-blue-400 hover:underline">
            Volver a proyectos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <NavBar baseHref="/" className="top-6" />

      {/* Project Introduction Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: 'linear-gradient(to bottom, #0D97C0, #0B4E62, #042F3B, #011015, #000000)',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Project Info */}
            <div className="text-white space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                {project.title} {project.subtitle && <span style={{ color: '#32C4F0' }}>{project.subtitle}</span>}
              </h1>
              <div className="pt-4">
                <span className="px-6 py-3 rounded-full text-base font-medium" style={{ backgroundColor: '#32C4F0', color: 'white' }}>
                  {project.tag}
                </span>
              </div>
              <p className="text-xl leading-relaxed text-gray-300 max-w-lg pt-4">
                {project.description}
              </p>
              {project.id === 'jm-estudio' && (
                <a
                  href={project.websiteUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2 border-white text-white bg-transparent"
                >
                  Ver sitio
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>

            {/* Right side - Image - se acopla al tamaño de la imagen */}
            <div className="flex justify-center items-center w-full">
              <div className="relative w-full max-w-4xl rounded-[3rem] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-[3rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Section */}
      <section className="bg-black pt-2 md:pt-20 pb-3 md:pb-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 text-center">
            Interfaz
          </h2>
          {project.id === 'clarity' ? (
            <OpenGalleryButton />
          ) : (project.id === 'imprenta' || project.id === 'jm-estudio') ? (
            <OpenProjectGalleryButton />
          ) : (
            <div className="flex justify-center mb-3 md:mb-0">
              <button className="px-5 py-2.5 text-sm bg-black border-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ borderColor: '#32C4F0' }}>
                Selecciona la imagen para ver completo el sitio.
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Website Previews Section */}
      <section className="relative w-full pt-0 pb-12 md:pt-8 md:pb-20 md:overflow-visible" style={{ background: 'linear-gradient(to bottom, #000000, #011015, #042F3B, #0B4E62, #0D97C0)' }}>
        <div className="container mx-auto px-4">
          <ImageGallery projectId={project.id} projectImage={project.image} />
        </div>
      </section>

      {/* Back Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="/#proyectos" 
          className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center gap-2"
          style={{ backgroundColor: '#32C4F0' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Regresar
        </a>
      </div>
    </main>
  );
}

