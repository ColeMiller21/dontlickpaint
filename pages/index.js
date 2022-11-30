import SEOMeta from "../components/SEOMeta";

const SEODesc = "Dont Buy Lick Paint -- It's Shit... Coming Soon";

export default function Home() {
  return (
    <>
      <SEOMeta page="" description={SEODesc} />
      <div className="min-full-page bg-[#3a4247] flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center relative">
          <h1 className="text-[4rem] text-[#ff8e85] z-10 font-teko font-bold mb-[-2rem] md:text-[7rem] md:mb-[-5rem] lg:text-[9rem] lg:mb-[-6rem] ">
            DO NOT BUY
          </h1>
          <h1 className="text-[5rem] md:text-[9rem] lg:text-[12rem] text-white z-10 font-didot">
            Lick Paint
          </h1>
          <img
            src="/its-shit.png"
            alt="it's shit"
            className="absolute bottom-[-15%] right-[-10%] md:bottom-[-10%] md:right-[-15%] h-[40%] w-[40%] lg:bottom-[-10%] lg:right-[-20%]"
          />
        </div>
        <p className="mt-[3rem] text-[1.25rem] text-white">
          coming <span className="italic">very</span> soon
        </p>
      </div>
    </>
  );
}
