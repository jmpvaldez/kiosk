import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import Logo from "../../../public/images/pnglogo.png";

export default function Start() {
  return (
    /* eslint-disable react/no-unescaped-entities */

    <main
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.5), transparent), linear-gradient(to left, rgba(0,0,0,0.7), transparent), linear-gradient(to bottom, rgba(0,0,0,0.7), transparent), linear-gradient(to right, rgba(0,0,0,0.7), transparent), url("/images/bg.jpg")',
      }}
      className=" h-screen flex flex-col items-start justify-start "
    >
      <header className="md:py-14 md:px-36 md:pl-36 flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={350}
            height={100}
            priority={true}
            alt="logo"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex  items-center">
         {/*  <input
            type="text"
            className="px-4 py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl text-white" /> */}
        </div>
      </header>
      <div className="flex flex-col bg-gray-200 md:w-1/2 h-1/2 rounded-r-2xl items-center w-full  space-y-3 md:space-y-4 p-9">
        <div className="flex items-center justify-center">
          <p className="text-gray-700 mb-4 text-2xl"></p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24">
          <Link href={"Menu"} className="px-32 md:px-24 py-2 bg-red-700 text-white z-50 text-xl"> Click here to start </Link>
        </div>

        <div className="flex items-center  justify-center">
          <p className="text-gray-600 mb-4 text-center text-xl md:text-4xl">
            <br /><br />Hi there! <br /> How can I help you today? <br /> <br />
            <i className="text-gray-600 mb-4 text-center text-xl md:text-2xl">Magandang araw! <br /> Paano kita matutulungan ngayon? </i>
          </p>
        </div>
        
      </div>

      <main className="md:py-14 md:px-36 flex flex-row  items-center gap-3 justify-start w-full md:w-1/3  mt-auto">
        <IoIosArrowRoundBack />
        <Link href={"/"} className=" text-white rounded-md mt-auto">
          Back
        </Link>
      </main>
    </main>
  );
}
