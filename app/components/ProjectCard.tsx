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
      className="rounded-[3rem] border-2 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.46)', borderColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <div className="p-4">
        <div className="h-48 rounded-[2rem] relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-[2rem]"
          />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white mb-4 text-base leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex justify-end">
          <a
            href={href}
            className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:scale-110 hover:shadow-lg"
            style={{ backgroundColor: '#32C4F0' }}
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
}
