"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Reveal } from "../Reveal";


export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkndyagj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form className="block mt-4 text-primaryDark " onSubmit={handleSubmit}>
    <Reveal>

      <label htmlFor="email">
       Nos comunicamos con vos: 
      </label>
      </Reveal>
      <br />
    <Reveal>

      <input
        id="email"
        type="email" 
        name="email"
        placeholder="DEJA TU EMAIL AQUÍ"
        style={{
            backgroundColor: '#333', // Color de fondo gris oscuro
            color: '#fff', // Color del texto blanco
            padding: '10px', // Espaciado interno
            border: 'none', // Sin borde
            borderRadius: '5px', // Bordes redondeados
            width: '300px', // Ancho del input
          }}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </Reveal>

    <Reveal>

      <button type="submit" disabled={state.submitting} 
      className="mt-2 gap-5 px-8 py-3 rounded-3xl group hover:bg-radialBlack text-primaryDark hover:text-white">
        Enviar
      </button>
    </Reveal>

    </form>
  );
}
