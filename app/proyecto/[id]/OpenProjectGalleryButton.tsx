'use client';

import { dispatchOpenProjectGallery } from './OpenGalleryButton';

export default function OpenProjectGalleryButton() {
  return (
    <div className="flex justify-center mb-3 md:mb-0">
      <button
        type="button"
        onClick={dispatchOpenProjectGallery}
        className="px-5 py-2.5 text-sm bg-black border-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{ borderColor: '#32C4F0' }}
      >
        Selecciona la imagen para ver completo el sitio.
      </button>
    </div>
  );
}
