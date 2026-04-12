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
      className="flex h-full w-full cursor-pointer flex-col rounded-[2rem] border border-white/[0.14] bg-[rgba(50,50,50,0.42)] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] sm:rounded-[2.25rem] sm:p-5"
    >
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-[calc(2rem-1rem)] sm:h-48 sm:rounded-[calc(2.25rem-1.25rem)]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="mt-4 flex flex-1 flex-col sm:mt-5">
        <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
        <p className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-white sm:text-base">{description}</p>
        <div className="mt-auto flex shrink-0 justify-end pt-4">
          <a
            href={href}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md shadow-black/25 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-black/30"
            style={{ backgroundColor: '#32C4F0' }}
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
}
