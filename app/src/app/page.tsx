import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#1d3a30] to-[#5A5D4F] px-4">
      <div className="flex flex-col items-center space-y-12 text-center">
        <div className="relative h-32 w-80 sm:h-40 sm:w-96">
          <Image
            src="/logo-dark.svg"
            alt="AuxPoll"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="max-w-xl text-xl text-zinc-400 sm:text-2xl">
          Vote your vibe!
        </p>

        <p className="animate-pulse text-sm font-medium tracking-wider text-zinc-500">
          COMING SOON...
        </p>
      </div>
    </main>
  );
}
