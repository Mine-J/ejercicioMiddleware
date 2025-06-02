import { FreshContext, PageProps } from "$fresh/server.ts";

import PersonajeComponente from "../../components/PersonajeComponente.tsx";
import { Character, info } from "../../types.ts";


export function handler(_req: Request, ctx: FreshContext<info,Character>) {
    return ctx.render(ctx.state.data);
}
const Home = (props: PageProps<Character>) => {
  const char = props.data;

  return <PersonajeComponente data= {char} />;
};

export default Home;
