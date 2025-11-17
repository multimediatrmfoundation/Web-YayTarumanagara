import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
    <Image
        src="/TarumanagaraTeam.png" 
        alt="Tarumanagara Foundation"
        fill
        className="object-cover object-center brightness-75"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

      <div className="absolute inset-0 flex flex-col justify-end text-white pb-32 px-8 md:px-24 z-10">
        <p className="text-lg md:text-xl font-light tracking-wide mb-2 font-roboto">Tarumanagara Foundation</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight font-roboto">
          PRIDE IN EXCELLENCE
        </h1>
      </div>
    </section>
  );
}
