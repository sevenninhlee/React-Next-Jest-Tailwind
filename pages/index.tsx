import Head from "next/head";
import PinInput from "@/components/PinInput";

export default function Home() {
  const onCompleteHandler = (codes: string) => {
    // handle request API
    console.log("codes", codes);
    
  };

  return (
    <>
      <Head>
        <title>Pin Inputs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="p-6 mt-10">
        <PinInput onComplete={onCompleteHandler} />
        <div className="flex justify-center">
        <button className="px-4 w-40 py-2 mt-3 border rounded-md text-sm text-white bg-green-600">Complete</button>
        </div>
      </div>
    </>
  );
}
