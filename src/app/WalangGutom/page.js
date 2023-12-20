import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import NewsCard from "../components/NewsCard";
import Logo from "../../../public/images/Logo.png";
import FeaturedCard from "../components/FeaturedCard";
import BuongBansaCard from "../components/BuongBansaCard";
import PagAbotCard from "../components/PagAbotCard";
import TaraBasaCard from "../components/TaraBasaCard";
import WalangGutomCard from "../components/WalangGutomCard";

export default function Featured() {
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
          {/* <input
            type="text"
            className="px-4 py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl" /> */}
           <IoIosArrowRoundBack />
          <Link
            href={"Menu"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </header>
      <div className="flex mt-6 items-start  md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className=" text-gray-500 font-bold items-center gap-6 p-3 md:text-5xl flex flex-row">
          <Image
            width={80}
            height={80}
            src={icons}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>Flagship Program</p>
        </div>
      </div>
      <main className="  w-full mt-5 md:mt-4 ">
        <WalangGutomCard />
      </main>
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
