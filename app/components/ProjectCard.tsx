import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export default function ProjectCard({ title, description, imageSrc, imageAlt, href }: ProjectCardProps) {
  return (
    <div
      className="glass-panel mx-auto flex h-full w-full max-w-lg cursor-pointer flex-col overflow-hidden rounded-[2rem] p-4 hover:scale-[1.01] sm:rounded-[2.25rem] sm:p-5 md:mx-0 md:max-w-none"
    >
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-[calc(2rem-1rem)] sm:h-48 sm:rounded-[calc(2.25rem-1.25rem)]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) min(100vw, 32rem), 33vw" />
      </div>
      <div className="mt-4 flex flex-1 flex-col sm:mt-5">
        <h3 className="type-card-title text-white">{title}</h3>
        <p className="type-body mt-3 min-h-0 flex-1 text-white">{description}</p>
        <div className="mt-auto flex shrink-0 justify-end pt-4">
          <a
            href={href}
            className="type-button-sm rounded-full px-5 py-2 text-white shadow-md shadow-black/25 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-black/30"
            style={{ backgroundColor: '#1A7AB5' }}
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
}
