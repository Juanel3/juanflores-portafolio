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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-white mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#32C4F0] focus:border-transparent"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#32C4F0] focus:border-transparent"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-white mb-2">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#32C4F0] focus:border-transparent resize-none"
          placeholder="Tu mensaje..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#32C4F0' }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}

