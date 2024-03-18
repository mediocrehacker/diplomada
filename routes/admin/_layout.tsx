import { PageProps } from "$fresh/server.ts";
import { HeaderAdmin } from "../../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="">
      <HeaderAdmin />
      <Component />
    </div>
  );
}
