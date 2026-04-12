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
      className="mx-auto flex w-full max-w-[18rem] cursor-pointer flex-col rounded-3xl border border-white/25 bg-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:rounded-[2rem] md:mx-0 md:max-w-none"
    >
      <div className="p-3 sm:p-4">
        <div className="relative h-40 overflow-hidden rounded-xl sm:h-44 sm:rounded-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col p-4 sm:p-5">
        <h3 className="mb-1.5 text-lg font-bold text-white sm:text-xl">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-white sm:text-base">
          {description}
        </p>
        <div className="flex justify-end">
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
