import SEOMeta from "../components/SEOMeta";

const SEODesc = "Dont Buy Lick Paint -- It's Shit... Coming Soon";

export default function Home() {
  return (
    <>
      <SEOMeta page="" description={SEODesc} />
      <div className="min-full-page bg-[#3a4247] flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center relative">
          <h1 className="text-[2.7rem] md:text-[5rem] lg:text-[6rem] mb-[-2rem] md:mb-[-4rem] lg:mb-[-5rem] text-[#ff8e85] z-10">
            DO NOT BUY
          </h1>
          <h1 className="text-[5rem] md:text-[9rem] lg:text-[12rem] text-white z-10">
            Lick Paint
          </h1>
          <img
            src="/its-shit.png"
            alt="it's shit"
            className="absolute bottom-[-10%] right-[-10%] md:bottom-[-15%] md:right-[-15%] h-[40%] w-[40%] lg:bottom-[-15%] lg:right-[-30%] lg:h-[50%] lg:w-[50%] "
          />
        </div>
        <p className="mt-[3rem] text-[1.25rem] text-white">coming very soon</p>
      </div>
    </>
  );
}
