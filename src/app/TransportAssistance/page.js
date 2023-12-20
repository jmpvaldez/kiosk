"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import Logo from "../../../public/images/Logo.png";
import TransportAssistanceCard from "../components/TransportAssistanceCard";

export default function Faqs() {
  const [openDiv, setOpenDiv] = useState(true);
  const [itemNo, setItemNo] = useState(0);
  const handleOpenDivChange = (value) => {
    setOpenDiv(value);
  };
  const handleItemNoChange = (itemId) => {
    setItemNo(itemId);
    console.log(itemNo);
  };

  const contentData = [
    {
      id: 1,
      title:
        "School ID",
      content: `
      <ol> Any valid identification card of the client/ person to be interviewed</ol>
      <ol> Depending on the circumstances:   </ol>
      <ol> Police Report/ Bureau of Fire Protection Report from the Bureau of Fire </ol>
      <ol> Passport, Travel Document/s, certification from OWWA or the Barangay  </ol>
      <ol> Certification from social worker or Case manager from rescued clients.   </ol>
      <ol> Police Blotter and social worker’s certification for the victims of online sexual exploitation of children </ol>
      <ol> For Locally stranded individuals (LSI) without valid IDs, the Medical Certificate or the Travel Authority issued by the Philippine National Police will suffice and be accepted to prove his/her identity.</ol>
      <ol> For all other incidents- Barangay Certificate of Residency or Certificate of Indigency or Certificate of the Client is in Need of Assistance as well as other documents from legal authority’s/regulating agencies, as may be applicable. </ol>
      `,
    },
    {
      id: 2,
      title:
        "School ID",
      content: `
      Go to your nearest DSWD Field Office
      `,
    },
  ];

  return (
    <main className="h-screen flex flex-col items-start justify-start p-12 md:py-14  lg:px-36 ">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={350}
            height={100}
            alt="logo"
            priority={true}
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
            href={"Programs"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </header>
      <div className="flex mt-6 items-start  md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className=" text-gray-500 font-bold items-center gap-6 p-3  md:text-5xl flex flex-row">
          <Image
            width={80}
            height={80}
            src={"/images/transportation.png"} 
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>Transportation Assistance</p>
        </div>
        <span className="md:w-1/2 lg:w-2/3">
          {/* <h2
            className={`${
              openDiv ? "hidden" : "block"
            } font-bold text-gray-500 md:text-xl lg:text-3xl`}
          >
            {contentData.map((item) =>
              item.id === itemNo ? <p key={item.title}>{item.content}</p> : null
            )}
          </h2> */}

        </span>
      </div>
      <div className="flex flex-row w-full overflow-y-auto custom-scrollbar-hidden">
        <div
          className={`${
            openDiv ? "w-full " : "lg:w-1/3 "
          } flex flex-col gap-2 mt-5 md:mt-2  `}
        >
          <TransportAssistanceCard
            openDiv={openDiv}
            onOpenDivChange={handleOpenDivChange}
            onItemNoChange={handleItemNoChange}
          />
        </div>
        <div className="hidden md:flex flex-col md:w-2/3 w-full mt-5 md:mt-2 ">
          <div className="fixed font-semibold max-w-5xl flex flex-row gap-3 items-start  justify-start">
            <MdOutlineMessage
              className={`${
                openDiv ? "hidden" : "block"
              } ml-auto text-4xl text-red-900`}
            />
            <div className={`${openDiv ? "hidden" : "block"} `}>
              {contentData.map((item) =>
                /* item.id === itemNo ? <p key={item.id}>{item.content}</p> : null */
                item.id === itemNo ?  <div key={item.id} dangerouslySetInnerHTML={{ __html: item.content }} /> : null
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="items-center text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12s md:mt-auto">
        <IoIosArrowRoundBack />
        <Link href={"Menu"} className=" text-dark rounded-md mt-auto">
          Back
        </Link>
      </div>
    </main>
  );
}
