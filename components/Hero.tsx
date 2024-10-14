import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex max-w-[1400px] w-full justify-between items-center flex-wrap gap-5">
      <div className="flex-1 flex flex-col gap-10 max-w-[500px] w-full">
        <Image
          src="/clynime-logo-white.png"
          alt="logo"
          width={121}
          height={116}
          className="object-contain"
        />
       <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Discover the <span className="red-gradient">Vibrant Worlds</span> of Anime
        </h1>
      </div>
      <div className="lg:flex-1 relative  h-[60vh] justify-center max-w-[500px] w-full">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
     </div>
    </header>
  );
}

export default Hero;
