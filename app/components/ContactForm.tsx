'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el enlace mailto con los datos del formulario
    const subject = encodeURIComponent(`Mensaje de ${formData.nombre}`);
    const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`);
    const mailtoLink = `mailto:juanmf3@outlook.com?subject=${subject}&body=${body}`;

    // Abrir el cliente de correo
    window.location.href = mailtoLink;

    // Resetear el formulario después de un breve delay
    setTimeout(() => {
      setFormData({ nombre: '', email: '', mensaje: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div>
        <label htmlFor="nombre" className="type-label mb-1 block text-white">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="type-input w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder-gray-300 backdrop-blur-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A7AB5] sm:px-4 sm:py-3"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="type-label mb-2 block text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="type-input w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder-gray-300 backdrop-blur-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A7AB5] sm:px-4 sm:py-3"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="type-label mb-2 block text-white">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={4}
          className="type-input w-full resize-none rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder-gray-300 backdrop-blur-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A7AB5] sm:px-4 sm:py-3"
          placeholder="Tu mensaje..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="type-button w-full rounded-xl px-6 py-2.5 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:py-3"
        style={{ backgroundColor: '#1A7AB5' }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}

