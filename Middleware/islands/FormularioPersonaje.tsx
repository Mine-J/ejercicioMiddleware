import { useState } from "preact/hooks";

export const FormularioPersonaje = () => {
  const [nombre, setNombre] = useState<string>("");
    const cookiesCrear = (e:Event) => {
        e.preventDefault();
        document.cookie = `name= ${nombre};path=/`
        globalThis.location.href = "/Personaje";
  };
  return (
    <div class="formulario">
      <h1>Introduce el nombre del Personaje</h1>

      <form action="/Personaje" method="POST" onSubmit={cookiesCrear}>
        <input
          type="text"
          
          placeholder="Nombre..."
          value={nombre}
          onChange={(e) => setNombre(e.currentTarget.value)}
        />
        <button type="submit" onClick={cookiesCrear}>
          Aceptar
        </button>
      </form>
    </div>
  );
};
