import { FreshContext } from "$fresh/server.ts";

type State = {
    dni: string;
}

export async function handler(req: Request, ctx: FreshContext<State>) {
    const headers = req.headers;
    const cookie = headers.get("Cookie")
    const cookies = cookie?.split(";");
    const dni_cookie = cookies?.find(c => c.trim().startsWith("dni="));
    
    if (dni_cookie) {
        
        const user_Dni = dni_cookie?.split("=")[1];
        ctx.state = { dni: user_Dni };
        const next = await ctx.next();
        return next;
    } else {
        const headers = new Headers();
        headers.set("location", "/");
        return new Response(null, {
            status: 303, // See Other
            headers,
        });
    }

    


}