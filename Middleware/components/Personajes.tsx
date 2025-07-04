import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character, infoArray } from "../types.ts";

export const Personajes: FunctionalComponent<infoArray> = (data) => {
  const personajes = data.data;
  return (
    <div class="contenedor">
      {personajes.map((p: Character, index: number) => {
        return (
          <div class="personaje" key={p.id || index}>
            <img class="imagenPersonaje" src={p.image} alt="foto" />
            <div class="nombrefav">
              <h1>{p.name}</h1>
              {p.favorito ? (
                <button class="botonFav" type="button">
                  <img class="fotoFav" src="/favoritoOn.png" alt="foto" />
                </button>
              ) : (
                <button class="botonFav" type="button">
                  <img class="fotoFav" src="/favoritoOff.png" alt="foto" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
