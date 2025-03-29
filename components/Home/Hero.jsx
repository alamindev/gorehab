import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-4  pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-28">
      <Image
        src={"/images/hero-bg.svg"}
        className="w-full object-cover object-bottom"
        alt="hero bg"
        fill
      />
      <div className="container mx-auto relative ">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-1 max-lg:gap-12 lg:grid-cols-2 items-center">
            <div className="pr-4 lg:pr-14">
              <h1 className="font-beatrice font-normal text-white text-2xl sm:text-3xl md:text-[40px] leading-[1.3] ">
                Regain Control Over Your{" "}
                <span className="font-semibold">Hands with DextEgg</span> – For
                an Active Life
              </h1>
              <p className="font-normal text text-sm md:text-lg text-white leading-normal mt-2 mb-8">
                Our interactive therapy with the DextEgg System enhances your
                fine motor skills, allowing you to perform daily movements with
                confidence and ease.
              </p>
              <div className="flex flex-row items-center pt-4">
                <a
                  className="font-bold text-sm sm:text-[15px] text-headText bg-[#BBCCC2] border-2 border-[#BBCCC2] max-w-[200px] w-full p-3 text-center rounded-md mr-4"
                  href="#contact"
                >
                  Contact Us
                </a>
                <a
                  className="font-bold text-sm sm:text-[15px] text-white bg-tranparent border-2 border-white col-span-12 lg:col-span-6 max-w-[200px] w-full p-3 text-center rounded-md mr-2"
                  href="#newsletter"
                >
                  Newsletter
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative sm:absolute -left-0 lg:-left-[35px] bg-[#f4eaeacc] rounded-lg px-4 py-3 mb-2 sm:mb-0 w-full sm:w-[245px]">
                <div className="flex items-center">
                  <Image src={"/images/icons/h1.png"} width={30} height={30} />
                  <div className="ml-4">
                    <h3 className="font-bold text-sm text-[#595959]">B2B</h3>
                    <p className="font-semibold text-[11px] text-[#545567]">
                      Hospitals, rehabilitation clinics
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative sm:absolute top-0 sm:top-0 right-0 bg-[#f4eaeacc] rounded-lg px-4 py-3 mb-2 sm:mb-0 w-full sm:w-[220px]">
                <div className="flex items-center">
                  <Image src={"/images/icons/h2.png"} width={30} height={30} />
                  <div className="ml-4">
                    <h3 className="font-bold text-sm text-[#595959]">
                      Congratulations
                    </h3>
                    <p className="font-semibold text-[11px] text-[#545567]">
                      Your Session completed
                    </p>
                  </div>
                </div>
              </div>

              <Image
                className="w-full"
                src={"/images/hero-right.png"}
                alt="HeroImage"
                width={650}
                height={410}
              />

              <div className="relative sm:absolute bottom-0 right-0 bg-[#f4eaeacc] rounded-lg px-4 py-3 mb-2 sm:mb-0 w-full sm:w-[220px]">
                <div className="flex items-center">
                  <Image src={"/images/icons/h3.png"} width={30} height={30} />
                  <div className="ml-4">
                    <h3 className="font-bold text-sm text-[#595959]">B2C</h3>
                    <p className="font-semibold text-[11px] text-[#545567]">
                      Patients and therapists
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative sm:absolute sm:bottom-[45px] -left-0 lg:-left-[45px] bg-[#f4eaeacc] rounded-lg px-4 py-3 mb-2 sm:mb-0 w-full sm:w-[235px] z-1">
                <div className="flex items-start">
                  <div className="relative">
                    <Image src={"/images/profile.png"} width={30} height={30} />
                    <div className="absolute w-[10px] h-[10px] rounded-full bg-red right-0 bottom-0"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[12px] text-[#595959]">
                      Rehabilitation Technology
                    </h3>
                    <p className="font-semibold text-[10px] text-[#545567]">
                      Today at 12.00 PM
                    </p>
                    <a
                      className="font-bold text-[10px] mt-3 inline-block bg-[#699980] text-white px-6 py-1.5 rounded-full"
                      href="#"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
