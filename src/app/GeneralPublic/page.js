"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import FaqsCard from "../components/FaqsCard";
import Image from "next/image";
import icons from "../../../public/images/icons.png";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import Logo from "../../../public/images/Logo.png";
import EducAssistanceCard from "../components/EducAssistanceCard";
import MedicalAssistanceCard from "../components/MedicalAssistanceCard";
import BurialAssistance from "../components/BurialAssistance";
import FoodAssistanceCard from "../components/FoodAssistanceCard";
import TransportAssistanceCard from "../components/TransportAssistanceCard";
import PsychologicalAssistanceCard from "../components/PsychologicalAssistanceCard";
import CashReliefAssistance from "../components/CashReliefAssistance";
import ReferralAssistanceCard from "../components/ReferralAssistanceCard";
import PwdCard from "../components/PwdCard";
import SeniorCard from "../components/SeniorCard";
import WomenCard from "../components/WomenCard";
import ChildrenCard from "../components/ChildrenCard";
import GeneralPublicCard from "../components/GeneralPublicCard";

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
      As part of the DSWD’s psychosocial care and support services for persons living with 
HIV (PLHIV) and their affected families and in accordance with Section 36 of RA 11166, 
the Department, through its Field Offices (FOs) provides economic assistance for 
education, livelihood, burial/funeral, transportation, medical, and food. These forms of 
assistance are meant for individuals and families of PLHIV in need of social welfare and 
development interventions.<br><br>

The direct provision of this assistance aims to mitigate the impact of HIV and AIDS on 
affected individuals and their families, assuring their well-being and contributing to the 
overall response of the national government to HIV and AIDS.<br>

      `,
    },
    {
      id: 2,
      title:
        "School ID",
      content: `
      1. Any valid identification card of the client/ person to be interviewed<br>
2. Medical Certificate/Clinical Abstract complete with name, license number and signature of the Physician issued within three months (original and one(1) photocopy)<br>
3. Hospital bill / Statement of Account (outstanding balance) with name and signature (original and one(1) photocopy)<br>
4. Social Case Study Report/ Case Summary<br>
5. Certificate of Indigency or Barangay Certificate declaring client’s situation (original and one(1) photocopy)


      `,
    },
    {
      id: 3,
      title:
        "School ID",
      content: `
      People Living with HIV (PLHIV)  and their affected families


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
            src={"/images/genpublic.png"} 
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>General Public</p>
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
          <GeneralPublicCard
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
               /*  item.id === itemNo ? <p key={item.id}>{item.content}</p> : null */
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
