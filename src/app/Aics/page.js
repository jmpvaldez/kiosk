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

      <div className="flex flex-col md:flex-col  mt-5 md:mt-4 gap-8">
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
