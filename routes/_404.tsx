import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <section class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-[calc(100vh-64px)] lg:items-center">
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-4xl font-bold">404 - Page not found</h1>
            <p class="my-4">
              The page you were looking for doesn't exist.
            </p>
            <a href="/" class="underline">Go back home</a>
          </div>
        </div>
      </section>
    </>
  );
}
