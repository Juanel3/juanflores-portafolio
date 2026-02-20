'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { EVENT_OPEN_CLARITY_GALLERY, EVENT_OPEN_PROJECT_GALLERY } from './OpenGalleryButton';

export interface GallerySlide {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  projectId: string;
  projectImage: string;
}

const JM_PROYECT_IMAGES: GallerySlide[] = [
  { src: '/images/inicio.jpg', alt: 'Inicio' },
  { src: '/images/Servicios.jpg', alt: 'Servicios' },
  { src: '/images/Nosotros.jpg', alt: 'Nosotros' },
  { src: '/images/foto-jm-3.jpg', alt: 'JM Estudio' },
];

export default function ImageGallery({ projectId, projectImage }: ImageGalleryProps) {
  const [slides, setSlides] = useState<GallerySlide[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const serviciosImage = projectId === 'jm-estudio' ? '/images/Servicios.jpg' : projectImage;

  const isJmEstudio = projectId === 'jm-estudio';
  const isImprenta = projectId === 'imprenta';
  const isClarity = projectId === 'clarity';
  const useSameGalleryLayout = isJmEstudio || isImprenta || isClarity;

  const imprentaImage = '/images/neg.png';
  const clarityCenterImage = '/images/imagen.png';
  const clarityImages = ['/images/Inicio.png', '/images/Cuentas.png', '/images/imagen.png', '/images/Mis%20cuentas.png', '/images/Cuenta.png'];
  const clarityGalleryImages = clarityImages.filter((src) => src !== '/images/imagen.png');
  const clarityLeftImage = '/images/Inicio.png';
  const clarityRightImage = '/images/Cuenta.png';
  const leftImage = isJmEstudio ? '/images/jmproyect3.png' : isImprenta ? imprentaImage : isClarity ? clarityLeftImage : projectImage;
  const centerImage = isJmEstudio ? '/images/jmproyect.png' : isImprenta ? imprentaImage : isClarity ? clarityCenterImage : serviciosImage;
  const rightImage = isJmEstudio ? '/images/jmproyect3.png' : isImprenta ? imprentaImage : isClarity ? clarityRightImage : projectImage;

  const clarityAlts = ['Inicio', 'Cuentas', 'Vista principal', 'Mis cuentas', 'Cuenta'];
  const clarityGalleryAlts = clarityAlts.filter((_, i) => clarityImages[i] !== '/images/imagen.png');

  const openLightbox = (newSlides: GallerySlide[], startIndex = 0) => {
    setSlides(newSlides);
    setIndex(startIndex);
    setIsOpen(true);
  };

  const openModal = (imageSrc: string) => {
    openLightbox([{ src: imageSrc, alt: 'Imagen' }]);
  };

  const openJmProyectModal = () => {
    openLightbox(JM_PROYECT_IMAGES, 0);
  };

  const openClarityGalleryModal = (startIndex = 0) => {
    openLightbox(clarityGalleryImages.map((src, i) => ({ src, alt: clarityGalleryAlts[i] })), startIndex);
  };

  const openCenterModal = () => {
    if (isJmEstudio) openJmProyectModal();
    else if (isImprenta) openModal('/images/foto-imprenta.jpg');
    else if (isClarity) openClarityGalleryModal(0);
  };

  const openGalleryModal = () => {
    if (isClarity) openClarityGalleryModal(0);
    else openCenterModal();
  };

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isClarity) {
      const handler = () => openGalleryModal();
      window.addEventListener(EVENT_OPEN_CLARITY_GALLERY, handler);
      return () => window.removeEventListener(EVENT_OPEN_CLARITY_GALLERY, handler);
    }
    return undefined;
  }, [isClarity]);

  useEffect(() => {
    if (isJmEstudio || isImprenta) {
      const handler = () => openCenterModal();
      window.addEventListener(EVENT_OPEN_PROJECT_GALLERY, handler);
      return () => window.removeEventListener(EVENT_OPEN_PROJECT_GALLERY, handler);
    }
    return undefined;
  }, [isJmEstudio, isImprenta]);

  // Galería móvil: imagen central en grande + botón Ver galería
  const singleImageProject = isJmEstudio || isImprenta;
  const mobileCenterSrc = isClarity ? clarityImages[2] : isJmEstudio ? '/images/jmproyect.png' : isImprenta ? imprentaImage : centerImage;
  const mobileCenterAlt = isClarity ? clarityAlts[2] : 'Vista principal';
  const mobileCenterOnClick = isClarity ? () => openClarityGalleryModal(0) : openCenterModal;

  return (
    <>
      {/* Vista móvil: imagen central grande + botón Ver galería */}
      <div className="mx-auto max-w-[90rem] px-2 pt-0 pb-6 md:hidden">
        <button
          type="button"
          onClick={mobileCenterOnClick}
          className={`relative block w-full overflow-hidden rounded-2xl transition-transform active:scale-[0.99] ${singleImageProject ? 'mb-0' : 'mb-4'}`}
        >
          <div className={`relative w-full overflow-hidden rounded-2xl ${singleImageProject ? 'min-h-0' : 'aspect-[3/4]'}`}>
            {singleImageProject ? (
              <Image
                src={mobileCenterSrc}
                alt={mobileCenterAlt}
                width={800}
                height={1200}
                className="w-full h-auto object-contain object-top rounded-2xl"
              />
            ) : (
              <Image
                src={mobileCenterSrc}
                alt={mobileCenterAlt}
                fill
                className="object-contain rounded-2xl"
              />
            )}
          </div>
        </button>
        {!singleImageProject && !isClarity && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={openGalleryModal}
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:scale-105 active:scale-100"
            >
              Ver galería
            </button>
          </div>
        )}
      </div>

      {/* Vista desktop */}
      {isClarity ? (
        <div className="mx-auto hidden px-2 max-w-[90rem] grid-cols-[0.95fr_0.95fr_1.8fr_0.95fr_0.95fr] gap-0 items-start md:grid -mt-8">
          {clarityImages.map((src, i) => {
            const isCenter = i === 2;
            const scaleClass = isCenter ? '' : 'md:scale-100';
            const marginClass = isCenter ? '' : i === 0 || i === 4 ? 'md:mt-20 lg:mt-24' : 'md:mt-8 lg:mt-10';
            const pullCenter = i === 0 ? 'md:mr-4' : i === 1 ? 'md:-mr-6' : i === 3 ? 'md:-ml-6' : i === 4 ? 'md:ml-4' : '';
            const delayClass = ['animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400', 'animation-delay-500'][i];
            return (
              <div
                key={src}
                className={`relative flex items-center justify-center overflow-hidden rounded-3xl animate-float-in ${delayClass} ${isCenter ? 'z-10' : `z-0 ${scaleClass} ${marginClass} ${pullCenter}`}`}
              >
                {isCenter ? (
                  <div
                    className="relative flex w-full cursor-pointer justify-center overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-[1.02]"
                    onClick={openCenterModal}
                  >
                    <Image
                      src={src}
                      alt={clarityAlts[i]}
                      width={420}
                      height={840}
                      className="max-h-[72vh] w-full object-contain rounded-3xl"
                    />
                  </div>
                ) : (
                  <div
                    className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => openClarityGalleryModal(0)}
                  >
                    <Image
                      src={src}
                      alt={clarityAlts[i]}
                      width={380}
                      height={760}
                      className="max-h-[80vh] w-full object-contain rounded-3xl"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : singleImageProject ? (
      /* JM Estudio / Imprenta: solo imagen principal */
      <div className="mx-auto hidden max-w-6xl px-2 md:block">
        <div
          className="relative w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex justify-center rounded-3xl overflow-hidden"
          onClick={openCenterModal}
        >
          <Image
            src={isJmEstudio ? '/images/jmproyect.png' : imprentaImage}
            alt={isJmEstudio ? 'Vista principal JM Estudio' : 'Vista principal Imprenta'}
            width={1600}
            height={2100}
            className="w-full h-auto max-h-[95vh] object-contain rounded-3xl"
          />
        </div>
      </div>
      ) : (
      <div
        className={`mx-auto hidden px-2 md:grid ${useSameGalleryLayout ? 'max-w-[90rem] grid-cols-[1fr_3fr_1fr] gap-0 items-start' : 'max-w-5xl grid-cols-3 gap-4'}`}
      >
        {/* Izquierda */}
        <div className={`group relative order-2 md:order-1 ${useSameGalleryLayout ? 'z-0 md:scale-85 md:-mr-16 lg:-mr-24 md:mt-16 lg:mt-24' : ''}`}>
          {useSameGalleryLayout ? (
            <div className="relative w-full rounded-3xl overflow-hidden flex items-center justify-center aspect-[4/5]">
                <Image
                  src={leftImage}
                  alt="Servicios"
                  fill
                  className="object-cover w-full h-full rounded-3xl"
                />
            </div>
          ) : (
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white w-full relative transform transition-all duration-300 group-hover:scale-105">
              <div className="aspect-[4/5] bg-gray-100 relative w-full">
                <Image src={leftImage} alt="Inicio" fill className="object-cover w-full h-full rounded-3xl transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 px-4 py-4">
                  <div className="bg-black/40 backdrop-blur-md rounded-lg px-4 py-2 inline-block">
                    <h3 className="text-lg font-normal text-white">Inicio</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Centro */}
        <div className={`group relative order-1 md:order-2 ${useSameGalleryLayout ? 'z-10 flex justify-center' : ''}`}>
          {useSameGalleryLayout ? (
            <div
              className="relative w-full max-w-6xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex justify-center -mt-0 md:-mt-8 rounded-3xl overflow-hidden"
              onClick={openCenterModal}
            >
              <Image
                src={centerImage}
                alt="Vista principal del sitio"
                width={1400}
                height={1800}
                className="w-full h-auto max-h-[100vh] object-contain rounded-3xl"
              />
            </div>
          ) : (
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white w-full relative transform transition-all duration-300 group-hover:scale-105 cursor-pointer" onClick={() => openModal(centerImage)}>
              <div className="aspect-[4/5] bg-gray-100 relative w-full">
                <Image src={centerImage} alt="Servicios" fill className="object-cover w-full h-full rounded-3xl transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 px-4 py-4">
                  <div className="bg-black/40 backdrop-blur-md rounded-lg px-4 py-2 inline-block">
                    <h3 className="text-lg font-normal text-white">Servicios</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Derecha */}
        <div className={`group relative order-3 md:order-3 ${useSameGalleryLayout ? 'z-0 md:scale-85 md:-ml-16 lg:-ml-24 md:mt-16 lg:mt-24' : ''}`}>
          {useSameGalleryLayout ? (
            <div className={`relative w-full rounded-3xl overflow-hidden flex items-center justify-center ${isClarity ? 'min-h-0' : 'aspect-[4/5]'}`}>
              {isClarity ? (
                <Image
                  src={rightImage}
                  alt="Cuenta"
                  width={280}
                  height={560}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-3xl"
                />
              ) : (
                <Image
                  src={rightImage}
                  alt="Nosotros"
                  fill
                  className="object-cover w-full h-full rounded-3xl"
                />
              )}
            </div>
          ) : (
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white w-full relative transform transition-all duration-300 group-hover:scale-105">
              <div className="aspect-[4/5] bg-gray-100 relative w-full">
                <Image src={rightImage} alt="Portafolio" fill className="object-cover w-full h-full rounded-3xl transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 px-4 py-4">
                  <div className="bg-black/40 backdrop-blur-md rounded-lg px-4 py-2 inline-block">
                    <h3 className="text-lg font-normal text-white">Portafolio</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      )}

      <Lightbox
        open={isOpen}
        close={closeModal}
        index={index}
        slides={slides}
        plugins={[Zoom]}
        zoom={{ scrollToZoom: false }}
        carousel={{ imageFit: 'contain' }}
        controller={{ closeOnBackdropClick: true }}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
