import { PageProps } from "$fresh/server.ts";
import { Header } from "../../components/Header.tsx";
import { env } from "../../config.ts";

export default function Layout({ Component, state }: PageProps) {
  const blockfrost = env["BLOCKFROST"] || Deno.env.get("BLOCKFROST");

  // do something with state here
  return (
    <div class="">
      <Header blockfrost={blockfrost} />
      <Component />
    </div>
  );
}
