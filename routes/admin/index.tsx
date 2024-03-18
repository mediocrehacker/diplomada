import { env } from "../../config.ts";
import Connect from "../../islands/Connect.tsx";
import MetaDataForm from "../../islands/MetaDataForm.tsx";

export default function Page() {
  const blockfrost = env["BLOCKFROST"] || Deno.env.get("BLOCKFROST");

  return (
    <div class="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
      <MetaDataForm blockfrost={ blockfrost } />
    </div>
  );
}
