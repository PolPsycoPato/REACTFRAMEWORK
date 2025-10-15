import React, { useState } from "react";;

export default function Form() {
  // Estado para guardar el nombre que escribe el usuario
  const [nombre, setNombre] = useState("");
  // Estado para guardar el nombre enviado
  const [nombreMostrado, setNombreMostrado] = useState("");

  // Manejador del cambio en el input
  const handleChange = (event) => {
    // 'event' contiene información del input que está cambiando
    setNombre(event.target.value); // guardamos el texto que se escribe
  };

  // Manejador del envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // evita que se recargue la página
    console.log("Formulario enviado:", nombre);
    setNombreMostrado(nombre); // mostramos el nombre en pantalla
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Formulario simple</h2>

      <form onSubmit={handleSubmit}>
        <label>Escribe tu nombre: </label>
        <input
          type="text"
          value={nombre}
          onChange={handleChange}
          placeholder="Tu nombre aquí"
        />
        <button type="submit">Enviar</button>
      </form>

      <hr />

      {/* Si ya se envió, mostramos el resultado */}
      {nombreMostrado && (
        <h3>Hola, <span style={{ color: "red" }}>{nombreMostrado}</span> 👋</h3>
      )}
    </div>
  );
}
