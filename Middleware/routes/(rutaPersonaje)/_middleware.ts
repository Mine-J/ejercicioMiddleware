import { FreshContext } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Character, info } from "../../types.ts";



export async function handler(req: Request, ctx: FreshContext<info>) {
    const headers = req.headers;
    const cookie = headers.get("Cookie")
    const cookies = cookie?.split(";");
    const name_cookie = cookies?.find(c => c.trim().startsWith("dni="));

    if (name_cookie) {
        const user_name = name_cookie?.split("=")[1];
        const character = await Axios.get<Character[]>(
            "https://hp-api.onrender.com/api/characters"
        );
        const characterFiltrado: Character | undefined = character.data.find((p) => p.name.toLowerCase === user_name.toLowerCase);
        if (characterFiltrado) {
            ctx.state = { data: characterFiltrado };
        } else {

            const headers = new Headers();
            headers.set("location", "/FormPersonaje");
            return new Response(null, {
                status: 303, // See Other
                headers,
            });
        }
        const next = await ctx.next();
        return next;
    } else {
        const headers = new Headers();
        headers.set("location", "/FormPersonaje");
        return new Response(null, {
            status: 303, // See Other
            headers,
        });
    }
}