import Image from 'next/image';
import Link from 'next/link';
import ImageGallery from './ImageGallery';
import NavBar from '../../components/NavBar';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  /** Resumen breve solo para la primera sección (hero) */
  description: string;
  image: string;
  websiteUrl?: string;
}

const projects: { [key: string]: Project } = {
  'jm-estudio': {
    id: 'jm-estudio',
    title: 'Proyecto',
    subtitle: 'JM Estudio',
    tag: 'Página web',
    description:
      'Sitio web para una agencia digital: comunicar servicios con claridad, generar confianza y facilitar el contacto desde cualquier dispositivo.',
    image: '/images/jmportada.png',
    websiteUrl: 'https://jm-estudio.vercel.app',
  },
  clarity: {
    id: 'clarity',
    title: 'Proyecto',
    subtitle: 'Clarity',
    tag: 'App móvil',
    description:
      'App para ordenar tus finanzas personales: registrar movimientos, ver el panorama del mes y decidir con información clara, no abrumadora.',
    image: '/images/app.png',
  },
  imprenta: {
    id: 'imprenta',
    title: 'Proyecto',
    subtitle: 'Imprenta',
    tag: 'Rediseño web',
    description:
      'Rediseño del sitio de una imprenta: imagen más profesional y actual, sin perder la cercanía con clientes que ya conocen el negocio.',
    image: '/images/imprentaportad.png',
  },
};

const projectAccent: Record<string, { glow: string; chip: string }> = {
  clarity: {
    glow: 'from-violet-500/30 via-[#1A7AB5]/20 to-transparent',
    chip: 'border-[#1A7AB5]/40 bg-[#1A7AB5]/15',
  },
  imprenta: {
    glow: 'from-[#1A7AB5]/35 via-blue-600/12 to-transparent',
    chip: 'border-[#1A7AB5]/40 bg-[#1A7AB5]/15',
  },
  'jm-estudio': {
    glow: 'from-[#1A7AB5]/35 via-blue-600/12 to-transparent',
    chip: 'border-[#1A7AB5]/40 bg-[#1A7AB5]/15',
  },
};

const defaultAccent = {
  glow: 'from-[#1A7AB5]/25 via-slate-500/10 to-transparent',
  chip: 'border-[#1A7AB5]/40 bg-[#1A7AB5]/15',
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const project = projects[resolvedParams.id];

  if (!project) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white">
        <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-28 text-center sm:px-8 md:px-10">
          <p className="type-body-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">404</p>
          <h1 className="type-section-title mt-4">Proyecto no encontrado</h1>
          <Link
            href="/#proyectos"
            className="type-button-sm mt-10 rounded-full border border-[#1A7AB5]/40 bg-[#1A7AB5]/10 px-6 py-3 text-[#79B5DA] transition hover:bg-[#1A7AB5]/20"
          >
            Volver a proyectos
          </Link>
        </div>
      </main>
    );
  }

  const accent = projectAccent[project.id] ?? defaultAccent;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <NavBar baseHref="/" className="top-6" />

      {/* Intro */}
      <section className="relative overflow-hidden pb-12 pt-28 sm:pt-32 md:pb-20 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(26,122,181,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-bl ${accent.glow} blur-3xl md:h-[520px] md:w-[520px]`}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-5 md:px-6 lg:px-1 xl:px-2">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 lg:col-span-5">
              <h1 className="flex flex-col gap-2">
                <span className="type-body-sm font-normal text-neutral-400">{project.title}</span>
                <span className="type-section-title leading-[1.08] tracking-tight">
                  {project.subtitle}
                </span>
              </h1>
              <span
                className={`type-pill inline-flex rounded-full border px-4 py-2 text-white ${accent.chip}`}
              >
                {project.tag}
              </span>
              <p className="type-body max-w-xl text-neutral-400">
                {project.description}
              </p>
              {project.id === 'jm-estudio' && (
                <a
                  href={project.websiteUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-button-sm inline-flex items-center gap-2 rounded-full border-2 border-[#1A7AB5] bg-[#1A7AB5]/10 px-8 py-3 text-white transition hover:scale-[1.02] hover:bg-[#1A7AB5]/25"
                >
                  Ver sitio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              )}
            </div>

            <div className="relative lg:col-span-7">
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${accent.glow} opacity-80 blur-2xl`}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_28px_80px_-24px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
                <Image
                  src={project.image}
                  alt={project.subtitle}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interfaz: título, descripción e imágenes */}
      <section className="border-t border-white/[0.07] bg-neutral-950 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-5 md:px-6 lg:px-1 xl:px-2">
          <div className="mx-auto max-w-2xl text-center md:max-w-3xl">
            <h2 className="type-subsection-title">Interfaz</h2>
            <p className="type-body-sm mt-3 text-neutral-400 md:mt-4">
              {project.id === 'clarity'
                ? 'Selecciona la imagen para ver completa la app.'
                : 'Selecciona la imagen para ver completa la página.'}
            </p>
          </div>
          <div className="mt-12 md:mt-16">
            <ImageGallery projectId={project.id} projectImage={project.image} />
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-4 z-50 sm:bottom-8 sm:right-8">
        <a
          href="/#proyectos"
          className="type-button-sm flex items-center gap-2 rounded-full border border-[#1A7AB5]/35 bg-neutral-950/90 px-5 py-3 text-white shadow-lg shadow-black/40 backdrop-blur-md transition hover:border-[#1A7AB5]/60 hover:bg-[#1A7AB5]/15"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.25}
            stroke="currentColor"
            className="h-5 w-5 text-[#1A7AB5]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Regresar
        </a>
      </div>
    </main>
  );
}
