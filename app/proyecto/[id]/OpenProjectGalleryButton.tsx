'use client';

import { dispatchOpenProjectGallery } from './OpenGalleryButton';

export default function OpenProjectGalleryButton() {
  return (
    <div className="flex justify-center mb-3 md:mb-0">
      <button
        type="button"
        onClick={dispatchOpenProjectGallery}
        className="type-body-sm font-medium rounded-full border-2 border-[#32C4F0] bg-black px-5 py-2.5 text-white transition-all duration-300 hover:scale-105 hover:bg-[#32C4F0]/10 hover:shadow-lg"
      >
        Selecciona la imagen para ver completo el sitio.
      </button>
    </div>
  );
}
