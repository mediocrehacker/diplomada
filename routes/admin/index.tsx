export default function Page() {
  return (
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <ul class="mx-auto text-center flex flex-col gap-8">
        <li>
          <button class="btn btn-outline btn-primary">
            Connect Nami Wallet
          </button>
        </li>
        <li>
          <button class="btn btn-outline btn-secondary">
            Connect Lace Wallet
          </button>
        </li>
      </ul>
    </div>
  );
}
