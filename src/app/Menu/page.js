import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import MenuCard from "../components/MenuCard";
import Logo from "../../../public/images/Logo.png";
import Footer from "../components/Footer";

export default function Menu() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start p-12 md:py-14 md:px-36">
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
            className="px-4 py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl" /> */}
           <IoIosArrowRoundBack />
          <Link
            href={"/"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </header>

      <div className="md:grid md:grid-cols-1 gap-4 items-start justify-start w-full mt-5 md:mt-14">
        <MenuCard />
      </div>

      <div className="items-center text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12s md:mt-auto">
        <IoIosArrowRoundBack />
        <Link href={"/"} className=" text-dark rounded-md mt-auto">
          Back to home
        </Link>
      </div>
    </main>
  );
}
