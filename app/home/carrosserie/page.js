"use client";
import AnimatedText from "@/components/accets/common/AnimatedText";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#202020] text-gray-200 flex flex-col items-center relative w-full overflow--hidden">
        {/* Desktop Image Blocks */}
        <div className="w-full h-screen absolute top-[100vh] z-0 hidden md:block">
          <div className="absolute top-0 left-[60%] 2xl:left-[70%] w-[40%]">
            <img
              src="/Home/image_block (1).png"
              className="w-full h-[50vh] object-cover"
            />
          </div>
          <div className="h-[25vh] w-[50vw] bg-[#202020] top-[40vh] left-[52%] absolute -rotate-[10deg] z-10"></div>
          <div className="h-[55vh] w-40 bg-[#202020] top-0 left-[55vw] 2xl:left-[65vw] absolute -rotate-12 z-10"></div>
        </div>

        {/* Mobile Image Blocks */}
        <div className="w-full h-[35vh] absolute top-[100vh] md:hidden block">
          <img
            src="/Home/image_block (1).png"
            className="w-full h-full object-cover"
          />
          <div className="w-[150vw] h-[25vh] bg-[#202020] bottom-[-26%] right-[-3%] rotate-[8deg] absolute"></div>
        </div>

        <Head>
          <title>
            Autocenter Niederbipp - Ihre Carrosserie-Experten am neue Standort
          </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="relative w-full h-auto">
          <div className="w-full h-[100vh]">
            <img
              src="/news/theam-desk.avif"
              alt="Race Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-white mb-2">07 JUL</p>
              <AnimatedText>
                <h1 className="text-6xl text-brGold font-bold">Carrosserie</h1>
              </AnimatedText>
              <p className="text-3xl text-white">Autocenter Niederbipp AG</p>
            </div>
          </div>
        </header>

        <div className="md:w-[80%] w-full z-50 md:mt-0 mt-12 relative">
          <div className="absolute top-[12%] px-4">
            <button
              className="text-2xl font-semibold text-brGold"
              onClick={() => router.back()}
            >
              zurück
            </button>
          </div>
          <div className="md:w-[75%] w-full mt-32 ">
            <main className="container mx-auto md:px-4 px-3 py-8">
              <h1 className="text-3xl font-bold text-start mb-4 text-brGold">
                Autocenter Niederbipp - Ihre Carrosserie-Experten am neuen
                Standort
              </h1>
              <p className="text-gray-400 text-start mb-8">
                16.07.2024 | Autocenter Niederbipp
              </p>

              <p className="text-lg mb-4 text-white">
                Das Autocenter Niederbipp bietet erstklassige
                Carrosserie-Dienstleistungen am neuen Standort. Unser erfahrenes
                Team steht Ihnen für alle Arten von Carrosserie-Reparaturen zur
                Verfügung – von kleinen Kratzern bis hin zu umfassenden
                Unfallreparaturen. Wir arbeiten mit modernster Technik und
                hochwertigen Materialien, um sicherzustellen, dass Ihr Fahrzeug
                schnell wieder auf die Straße kommt und aussieht wie neu.
              </p>

              <p className="text-gray-400 mb-8">
                Vertrauen Sie auf unser Know-how, wenn es um
                Carrosserie-Arbeiten geht, und profitieren Sie von unserem
                umfassenden Service.
              </p>

              <p className="text-lg mb-4 text-brGold">
                Besuchen Sie uns am neuen Standort oder erfahren Sie mehr über
                unsere Carrosserie-Dienstleistungen auf unserer Website:
                Autocenter Niederbipp - Carrosserie.
              </p>

              <div className="flex md:flex-row flex-col gap-2 mb-2">
                <div className="bg-[#4c4a4a] justify-center rounded-lg p-3 gap-1 items-center flex h-10 w-auto">
                  <h3 className="text-sm text-light text-brGold">Gebäudetyp</h3>
                  <p className="text-white font-bold text-sm">Gewerbe</p>
                </div>
                <div className="bg-[#4c4a4a] rounded-lg justify-center p-3 gap-1 items-center flex h-10 w-auto">
                  <h3 className="text-sm font-light text-brGold">Anwendung</h3>
                  <p className="text-white text-sm font-bold">Fassade</p>
                </div>
                <div className="bg-[#4c4a4a] rounded-lg p-3 gap-1 items-center justify-end flex h-10 w-auto">
                  <h3 className="text-sm text-brGold">Produkt</h3>
                  <p className="text-white md:text-sm text-xs font-bold">
                    SILVERSTAR Wärmedämmbeschichtung
                  </p>
                </div>
              </div>

              <div className="bg-[#4c4a4a] w-full rounded-lg text-xs md:text-sm p-4 mb-8 h-10 flex items-center justify-center gap-2 md:w-[30vw]">
                <h3 className="text-sm text-brGold">Standort</h3>
                <p className="text-white text-sm font-bold">
                  Autocenter Niederbipp AG
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto bg-[red]">
        <HorizontalScroll />
      </div>
    </div>
  );
}

//  const Cards = ({ date, src, text }) => {
//     return (
//       <>
//         <div className='md:w-[33vw] w-[85vw] md:h-[70vh] h-auto md:mb-0 mb-20 flex flex-col gap-3 overflow-hidden'>

//           <div className='w-full h-45% overflow-hidden '>
//             <img src={src} alt="news" className='w-full h-full object-cover rounded-[16px] hover:scale-110 transition-transform ease-linear duration-5000' />
//           </div>
//           <div className='flex items-center text-brGold gap-3 px-3 py-1'><p>{date}</p><div className='w-[6rem] h-[0.3px] bg-brGold' ></div><p>BRITISH GP</p></div>
//           <div className='font-extrabold text-2xl px-3 py-1'>{text}</div>
//         </div>
//       </>
//     )
//   }

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);

  return (
    <div className="bg-[#202020]">
      {/* Horizontal Scroll for Desktop */}
      <div className="h-[300vh] w-auto md:block hidden" ref={targetRef}>
        <div className="h-screen w-auto sticky top-0 items-center justify-start overflow-hidden">
          <motion.div
            className="flex gap-6 pl-10 pt-20 w-[300vw] md:mt-0 mt-[30rem]"
            style={{ x }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            {/* Optimized Images for Desktop */}
            <div>
              <Image
                src="/news/scroll/1.jpg"
                alt="news"
                width={500}
                height={500}
                className="w-[40vw] h-[70vh] 2xl:w-[40vw] 2xl:h-[50vh] rounded-xl"
                sizes="(max-width: 500px) 85vw, (max-width: 500px) 40vw, 33vw"
              />
            </div>
            <div>
              <Image
                src="/news/scroll/2.jpg"
                alt="news"
                width={500}
                height={500}
                className="w-[40vw] h-[70vh] rounded-xl"
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 33vw"
              />
            </div>
            <div>
              <Image
                src="/news/scroll/3.jpg"
                alt="news"
                width={500}
                height={500}
                className="w-[40vw] h-[70vh] rounded-xl"
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 33vw"
              />
            </div>
            <div>
              <Image
                src="/news/scroll/4.avif"
                alt="news"
                width={500}
                height={500}
                className="w-[40vw] h-[70vh] rounded-xl"
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 33vw"
              />
            </div>
            <div>
              <Image
                src="/news/scroll/5.jpg"
                alt="news"
                width={500}
                height={500}
                className="w-[40vw] h-[70vh] rounded-xl"
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll for Mobile */}
      <div className="md:hidden w-full h-auto flex gap-3 p-4  overflow-x-scroll no-scrollbar">
        <div className="relative">
          <div className="-rotate-90 left-5 top-5 absolute">
            <Image
              src="/icon/down.svg"
              alt="scroll left"
              width={32}
              height={32}
              className="animate-bounce"
            />
          </div>
          <Image
            src="/news/scroll/1.jpg"
            alt="news"
            width={500}
            height={500}
            className="min-w-[85vw] h-[50vh] rounded-xl"
            sizes="(max-width: 768px) 85vw"
          />
        </div>
        <div>
          <Image
            src="/news/scroll/2.jpg"
            alt="news"
            width={500}
            height={500}
            className="min-w-[85vw] h-[50vh] rounded-xl"
            sizes="(max-width: 768px) 85vw"
          />
        </div>
        <div>
          <Image
            src="/news/scroll/3.jpg"
            alt="news"
            width={500}
            height={500}
            className="min-w-[85vw] h-[50vh] rounded-xl"
            sizes="(max-width: 768px) 85vw"
          />
        </div>
        <div>
          <Image
            src="/news/scroll/4.avif"
            alt="news"
            width={500}
            height={500}
            className="min-w-[85vw] h-[50vh] rounded-xl"
            sizes="(max-width: 768px) 85vw"
          />
        </div>
        <div className="relative">
          <div className="right-5 top-5 absolute">
            <Image
              src="/icon/down.svg"
              alt="scroll right"
              width={32}
              height={32}
              className="animate-bounce"
            />
          </div>
          <Image
            src="/news/scroll/5.jpg"
            alt="news"
            width={500}
            height={500}
            className="min-w-[85vw] h-[50vh] rounded-xl"
            sizes="(max-width: 768px) 85vw"
          />
        </div>
      </div>
    </div>
  );
};
