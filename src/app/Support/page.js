import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Logo from "../../../public/images/Logo.png";


import A from "../../../public/images/A.png";
import B from "../../../public/images/B.png";
import C from "../../../public/images/C.png";
import D from "../../../public/images/D.png";
import E from "../../../public/images/E.png";
import F from "../../../public/images/cart/F.png";

import G from "../../../public/images/cart/G.png";
import H from "../../../public/images/cart/H.png";
import I from "../../../public/images/cart/I.png";
import J from "../../../public/images/cart/J.png";
import K from "../../../public/images/cart/K.png";
import L from "../../../public/images/cart/L.png";
//import M from "../../../public/images/cart/M.png";
import N from "../../../public/images/cart/N.png";
import O from "../../../public/images/cart/O.png";



export default function Support() {
  return (
    <main className=" flex flex-col p-12 md:py-14 md:px-36">
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
            href={"Menu"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </header>
      <div className="flex flex-col my-6 w-full mb-4">
        <div className=" text-red-500 font-bold items-center gap-6 p-3  md:text-5xl flex flex-row">
          <Image
            width={50}
            height={100}
            src={icons}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-[25px]">CART AND ARTU ORGANIZATION STRUCTURE</p>
        </div>

        <Image
       className="object-cover mx-auto"
       width={1000}
       height={1000}
            src={A}
            alt="pic"
          />
          <br />
          <Image
          className="object-cover mx-auto"
            width={1000}
            height={1000}
            src={B}
            alt="pic"
          />
          <br /><Image
            className="object-cover mx-auto"
            width={1000}
            height={1000}
            src={C}
            alt="pic"
          />
          <br /><Image
            className="object-cover mx-auto"
            width={1000}
            height={1000}
            src={D}
            alt="pic"
          />
          <br /><Image
           className="object-cover mx-auto"
           width={1000}
           height={1000}
            src={G}
            alt="pic"
          />
          <br />


          <Image
           className="object-cover mx-auto"
           width={1000}
           height={1000}
            src={H}
            alt="pic"
          />
          <br /><Image
            className="object-cover mx-auto"
            width={1000}
            height={1000}
            src={I}
            alt="pic"
          />
          <br />{/* <Image
          className="object-cover mx-auto"
          width={1000}
          height={1000}
            src={J}
            alt="pic"
          /> */}
          <br /><Image
            className="object-cover mx-auto"
            width={1000}
            height={1000}
            src={K}
            alt="pic"
          />
          <br /><Image
            className="object-cover mx-auto"
            width={1000}
            height={1000}
            src={L}
            alt="pic"
          />
         {/*  <br /><Image
            width={100}
            height={100}
            src={M}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          /> */}
          <br /><Image
            className="object-cover mx-auto"
            width={1000}
            height={1000}
            src={N}
            alt="pic"
          />
          <br /><Image
            className="object-cover mx-auto"
            width={800}
            height={800}
            src={O}
            alt="pic"
          />
          <br />
          
          <hr className="mt-5" />
        
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
