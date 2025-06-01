import { FreshContext, PageProps } from "$fresh/server.ts";
import { PersonajeComponente } from "../../components/PersonajeComponente.tsx";


export async function handler(req: Request, ctx: FreshContext<string>) {
  const headers = req.headers;
  const cookie = headers.get("Cookie");
  const cookies = cookie?.split(";");
  const name_cookie = cookies?.find((c) => c.trim().startsWith("name="));

    const user_name = name_cookie?.split("=")[1];
    console.log(user_name)
    if (user_name) {
        ctx.render(user_name);
    }
    ctx.render();
  
}
export const Home = (props: PageProps<string>) => {
    const nombre = props.data
    
    return <PersonajeComponente props= {nombre} />;
}