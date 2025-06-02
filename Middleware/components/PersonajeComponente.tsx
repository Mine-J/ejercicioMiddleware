import { FunctionalComponent } from "preact";
import { Character, info } from "../types.ts";

const PersonajeComponente: FunctionalComponent<info> = ({ data }) => {
    const personajes: Character = data;

    return (
        <div className="personaje-componente">
            <h1 className="personaje-nombre">{personajes.name}</h1>
            <img className="personaje-imagen" src={personajes.image} alt="foto" />
            <p className="personaje-genero">Género: {personajes.gender}</p>
            <p className="personaje-casa">Casa: {personajes.house}</p>
            <p className="personaje-especie">Especie: {personajes.species}</p>
        </div>
    );
};

export default PersonajeComponente;
