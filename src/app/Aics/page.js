import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import aicslogo from "../../../public/images/aics.png";
import { FaArrowRightLong } from "react-icons/fa6";
import AicsCard from "../components/AicsCard";
import Logo from "../../../public/images/Logo.png";

export default function Aics() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start p-12 md:p-36">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={250}
            height={70}
            alt="logo"
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex items-center">
          {/* <input
            type="text"
            className="px-4 py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl" /> */}
          <IoIosArrowRoundBack />
          <Link
            href={"Programs"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </header>

      <div className="  flex flex-col md:flex-col lg:flex-row mt-5 md:mt-4 gap-8">
        <div className="w-full md:w-full md:gap-5 lg:w-1/3 border-r-0 lg:border-r-2 px-8  md:px-12 items-center  flex flex-col justify-between">
          <Link
            href={"Aics"}
            className="border rounded-3xl mx-auto text-blue-900 mb-5 min-w-full md:w-10/12 md:mb-0 items-center gap-1 py-4  hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col justify-center text-center"
          >
            <Image width={300} height={300} src={aicslogo} alt="pic" />
            <FaArrowRightLong />
          </Link>
          <p>
            AICS serves as a social safety net or stop-gap measure to support the recovery of individuals and families identified to be suffering from any adversity or crisis through the provision of financial assistance, psychosocial intervention, and referral services that will enable the clients to meet their basic needs in the form of food, transportation, medical, educational, material, funeral, and cash assistance for other support services, among others.
          </p>
          <p>
            The provision of psychosocial support, including psychological first aid, and counseling, as well as financial assistance to disadvantaged and marginalized sectors, are part of the social protection services of the Department. These protective services aim to help individuals and families to cope with the present difficult situation they are experiencing, such as illness, death, loss of job, or source of income.  In order to effectively and efficiently respond to existing and emerging crisis situations among vulnerable sectors, a Citizens Charter was crafted to provide a comprehensive guide on the provision of the aforementioned assistance.
          </p>
        </div>

        <main className="md:grid md:grid-cols-2 lg:grid-cols-4  items-start justify-items-center gap-4 w-full mt-5 md:mt-4 ">
          <AicsCard />
        </main>




      </div>


      {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">

        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image height={100} width={100} src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image height={100} width={100} src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image height={100} width={100} src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image height={100} width={100} src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image height={100} width={100} src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>

        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only text-black">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}


      <main className="items-center justify-between p-12 text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12s md:mt-auto">
        <div></div>
        <div className="flex flex-row justify-center  items-center gap-3">
          <IoIosArrowRoundBack />
          <Link
            href={"Menu"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </main>
    </main>
  );
}
