'use client';

export const EVENT_OPEN_CLARITY_GALLERY = 'open-clarity-gallery';
export const EVENT_OPEN_PROJECT_GALLERY = 'open-project-gallery';

export function dispatchOpenClarityGallery() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EVENT_OPEN_CLARITY_GALLERY));
  }
}

export function dispatchOpenProjectGallery() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EVENT_OPEN_PROJECT_GALLERY));
  }
}

export default function OpenGalleryButton() {
  return (
    <div className="flex justify-center mb-3 md:hidden">
      <button
        type="button"
        onClick={dispatchOpenClarityGallery}
        className="type-button rounded-full border-2 border-[#32C4F0] px-8 py-3 text-white transition-all hover:scale-105 hover:bg-[#32C4F0]/10 active:scale-100"
      >
        Ver galería
      </button>
    </div>
  );
}
