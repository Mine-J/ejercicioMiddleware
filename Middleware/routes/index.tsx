import { FreshContext, Handlers } from "$fresh/server.ts";
import { ObjectId } from "mongodb";
import { Formulario } from "../components/Formulario.tsx";
import { DniCollection } from "../routes/db/db.ts"
import { dniModel } from "../types.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const dni = url.searchParams.get("dni");
    if (dni) {
      const objeto: dniModel = {
        _id: new ObjectId(),
        dni: dni,
      };
      const existe = await DniCollection.findOne({ dni })
      if (!existe) {
        await DniCollection.insertOne(objeto);
      }
      const headers = new Headers();
      headers.append("Set-Cookie", `dni=${dni};path=/`);
      headers.append("location", "/Personajes");
      return new Response(null, {
        status: 302,
        headers,
      });
    }
    
    return ctx.render();
  }
}

export default function Home() {
  return (
    
      <Formulario />
    
  );
}
