export const FormularioDni = () => {
  return (
    <div class = "formulario">
      <h1>Introduce el DNI</h1>
      
      <form action="/" method="GET">
        <input type="text" name="dni" placeholder="DNI..." />
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
};
