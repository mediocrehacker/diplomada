// export default function Home() {
//   const count = useSignal(3);
//   return (
//     <div class="px-4 py-8 mx-auto bg-[#86efac]">
//       <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
//         <img
//           class="my-6"
//           src="/logo.svg"
//           width="128"
//           height="128"
//           alt="the Fresh logo: a sliced lemon dripping with juice"
//         />
//         <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
//         <p class="my-4">
//           Try updating this message in the
//           <code class="mx-2">./routes/index.tsx</code> file, and refresh.
//         </p>
//         <Counter count={count} />
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
}

function Header() {
  return (
    <header class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="#">
              <span class="sr-only">Home</span>
              <svg class="h-12" viewBox="0 0 28 24" fill="none"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.945 1.25h8.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.498.498-1.105.763-1.816.907c-.69.14-1.523.176-2.508.187h-.23a2.456 2.456 0 0 1-.473.85a.96.96 0 0 0-.226.546a2.46 2.46 0 0 1-2.257 2.257a.96.96 0 0 0-.546.226a2.46 2.46 0 0 1-3.192 0a.96.96 0 0 0-.546-.226A2.46 2.46 0 0 1 7.6 20.142a.96.96 0 0 0-.226-.546a2.454 2.454 0 0 1-.472-.848c-1.04-.007-1.911-.036-2.627-.167c-.758-.14-1.403-.404-1.928-.93c-.602-.601-.86-1.36-.981-2.26c-.117-.866-.117-1.969-.117-3.336v-4.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117m-1.04 15.998c.096-.302.253-.59.47-.844a.96.96 0 0 0 .226-.546A2.46 2.46 0 0 1 9.858 13.6a.96.96 0 0 0 .546-.227a2.46 2.46 0 0 1 3.192 0a.96.96 0 0 0 .546.227a2.46 2.46 0 0 1 2.257 2.257a.96.96 0 0 0 .226.546c.217.254.373.54.47.842h.22c.985-.01 1.687-.048 2.222-.156c.514-.105.822-.267 1.054-.499c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v4c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.243.243.572.41 1.138.515c.57.104 1.316.134 2.357.142M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6m-2 3.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m6.373 5.016a.96.96 0 0 0-1.246 0a2.46 2.46 0 0 1-1.4.58a.96.96 0 0 0-.88.881a2.46 2.46 0 0 1-.58 1.4a.96.96 0 0 0 0 1.246c.335.394.538.884.58 1.4a.96.96 0 0 0 .88.88a2.46 2.46 0 0 1 1.4.58a.96.96 0 0 0 1.246 0a2.46 2.46 0 0 1 1.4-.58a.96.96 0 0 0 .88-.88a2.46 2.46 0 0 1 .58-1.4a.96.96 0 0 0 0-1.246a2.46 2.46 0 0 1-.58-1.4a.96.96 0 0 0-.88-.88a2.46 2.46 0 0 1-1.4-.58m.365 1.936a.75.75 0 1 1 1.024 1.096l-2.143 2a.75.75 0 0 1-1.024 0l-.857-.8a.75.75 0 0 1 1.024-1.096l.345.322z" clip-rule="evenodd"/></svg>
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="#">NFT Дипломы</a>
                </li>
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="#">Проверить</a>
                </li>
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="#">Выпустить</a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <a
                  class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                 Вход 
                </a>

                <div class="hidden sm:flex">
                  <a
                    class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="#"
                  >
                    Регистрация 
                  </a>
                </div>
              </div>

              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


function Banner() {
  return (
<section class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-[calc(100vh-64px)] lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-4xl">
        Цифровые сертификаты 
        <strong class="font-extrabold text-teal-700 sm:block"> в образовании. </strong>
      </h1>
      <p class="mt-4 sm:text-xl/relaxed"> Выдача сертификатов с использованием невзаимозаменяемых токенов NFT</p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
          href="#"
        >
          Старт 
        </a>

        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
          href="#"
        >
          Подробнее 
        </a>
      </div>
    </div>
  </div>
</section>

  );
}
