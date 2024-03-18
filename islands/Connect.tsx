import { useEffect, useState } from "preact/hooks";
import { Blockfrost, Lucid, Address } from "lucid-cardano";

export type AppState = {
  lucid?: Lucid;
  wAddr?: Address;
  isLoading: Bool;
};

const initialAppState: AppState = {
  isLoading: false,
};

function makeSafe(fn, errorHandler) {
  return function() {
    fn().catch(errorHandler);
  }
}
export default function Connect(props: { blockfrost: string }) {
  const [appState, setAppState] = useState<AppState>(initialAppState);

  const connectLucidAndNami = async () => {
    const lucid = await Lucid.new(
      new Blockfrost(
        "https://cardano-preview.blockfrost.io/api/v0",
        props.blockfrost,
      ),
      "Preview",
    );

    const nami = await window.cardano.nami.enable();
    lucid.selectWallet(nami);
    setAppState({
      ...initialAppState,
      lucid: lucid,
      wAddr: await lucid.wallet.address(),
      isLoading: false,
    });
  };

  const resetState = () => {
    setAppState({
      ...initialAppState,
      isLoading: false,
    });
  }

  const connectSafe = makeSafe(connectLucidAndNami, resetState);

  useEffect(() => {
    if (appState.lucid) return;
    if (!appState.isLoading) return;
    // connectSafe();
  }, [appState]);


  if (appState.isLoading) { return <Loading />  }

  if (appState.lucid) {
      return(
        <> 
          <span>Nami подключен</span>
          <div id="container" class="w-full">
             <SuccessMessage /> 
          </div>
        </>
      );
  }
  return (
        <button
          onClick={connectLucidAndNami}
          class=""
        >
          Подключить Nami
        </button>
    //       Connect Nami Wallet
    // <ul class="mx-auto text-center flex flex-col gap-8">
    //   <li>
    //     <button
    //       onClick={connectLucidAndNami}
    //       class="btn btn-outline btn-primary"
    //     >
    //       Connect Nami Wallet
    //     </button>
    //   </li>
    //   <li>
    //     <button class="btn btn-outline btn-secondary">
    //       Connect Lace Wallet
    //     </button>
    //   </li>
    // </ul>
  );
}

function SuccessMessage() {
  return (
    <div id="hideMe" role="alert" className="alert alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Your Nami wallet has been connected!</span>
    </div>
  );
}

const Loading = () => (
  <div class="flex mx-auto">
    <span class="mx-auto loading loading-bars loading-md"></span>
  </div>
)
