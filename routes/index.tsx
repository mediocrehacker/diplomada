import { Header } from "../components/Header.tsx";
import { env } from "../config.ts";

export default function Page() {
  const blockfrost = env["BLOCKFROST"] || Deno.env.get("BLOCKFROST");

  return (
    <div>
      <Header blockfrost={blockfrost} />
      <Banner />
    </div>
  );
}

function Banner() {
  return (
    <section class="bg-gay-50">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-[calc(100vh-74px)] lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold sm:text-4xl">
            Цифровые сертификаты
          </h1>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-teal-700 sm:block">
            в образовании.
          </h2>
          <p class="mt-4 sm:text-xl/relaxed">
            Выдача сертификатов с использованием невзаимозаменяемых токенов NFT
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="https://appdiplomada.deno.dev"
            >
              Старт
            </a>

            <a
              class="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
              href="/nftdiploma"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
