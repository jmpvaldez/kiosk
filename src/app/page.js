import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Logo from "./../../public/images/pnglogo.png";
export default function Home() {
  return (
    <main
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.5), transparent), linear-gradient(to left, rgba(0,0,0,0.7), transparent), linear-gradient(to bottom, rgba(0,0,0,0.7), transparent), linear-gradient(to right, rgba(0,0,0,0.7), transparent), url("/images/bg.jpg")',
      }}
      className=" h-screen flex flex-col items-start justify-start p-12 md:p-28"
    >
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={350}
            height={100}
            alt="logo"
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex items-center">
         {/*  <input
            type="text"
            className="px-4 text-white py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl text-white" /> */}
        </div>
      </header>
      <main className="flex flex-col items-start justify-start w-full md:w-1/3 mt-16">
        <p className="text-white mb-4 text-3xl"> <strong>
          Welcome to the DSWD Interactive Kiosk!<br />
          Click the button to Start. </strong>
        </p> <br /> <br />
        <i className="text-white mb-4 text-2xl"> </i>
      </main> 
      <main className="flex flex-col items-start justify-start w-full md:w-1/3 mt-auto">
        <Link href={"/Menu"} className="px-20 py-3 bg-red-700 text-white text-xl mt-auto"> Start </Link>
      </main>
    </main>
  );
}
