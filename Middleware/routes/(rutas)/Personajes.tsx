import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Character } from "../../types.ts";
import { Personajes } from "../../components/Personajes.tsx";
import { CharacterFavCollection } from "../db/db.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Character[]>) => {
    const personajes = await Axios.get<Character[]>(
      "https://hp-api.onrender.com/api/characters"
    );

    const personajesBuenos = await Promise.all(
      personajes.data.map(async (p) => {
        const favorito = await CharacterFavCollection.findOne({ id: p.id });

        const personaje: Character = {
          id: p.id,
          name: p.name,
          species: p.species,
          gender: p.gender,
          house: p.house,
          alive: p.alive,
          image: p.image,
          favorito: false,
        };
        if (favorito) {
          personaje.favorito = true;
        }
        return personaje;
      })
    );

    return ctx.render(personajesBuenos);
  },
};

export default function Home(props: PageProps<Character[]>) {
  const personajes = props.data;

  return<Personajes data={personajes} />;
}
