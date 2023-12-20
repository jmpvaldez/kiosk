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
        "WHAT IS A TRAVEL CLEARANCE?",
      content: `
      A Travel Clearance is a document issued by the Department of Social Welfare and Development below 18 years of age (referred to as minor) travelling abroad unaccompanied by any of the parents or persons having parental authority or legal custody over the child.
    `,
    },
    {
      id: 2,
      title: "WHO NEEDS A TRAVEL CLEARANCE?",
      content: `
    <ol>1. Filipino minor who is traveling alone using the Philippine Passport only for their travel outside the Philippines</ol>
    <ol>2. Filipino minor travelling with prospective adoptive parent/s for purpose of inter-country adoption</ol>
    <ol>3. Filipino minor travelling with a person other than his/her parent/s, legal guardian or person exercising parental authority/legal custody over him/her.</ol>
    <ol>4. Filipino minor who is illegitimate and is travelling with his/her biological father.</ol>
    <ol>5. For married minors, the same requirements apply to that of unmarried minors travelling abroad.</ol>

    `,
    },
    {
      id: 3,
      title: "WHO DOES NOT NEED TRAVEL CLEARANCE?",
      content: ` 
      <p>I. A minor accompanied by the following:</p><br/>
      <ol>1. Either or both of the minor’s parents, if the minor is legitimate</ol>
      <ol>2. The minor’s biological  mother, if the minor is illegitimate</ol>
      <ol>3. The minor’s father who has been granted sole parental authority or custody by the proper court, if the minor is illegitimate</ol>
      <ol>4. The minor’s legal guardian</ol>
      <ol>5. The person, including one of the minor’s parents, who was granted sole parental authority or legal custody by the proper court, in which case the court decision should specifically include a statement to this effect, i.e., naming the person to whom sole parental authority of legal custody over the minor has been granted.</ol>
      <ol>6. Minor’s adoptive parents if the minor is granted with adoption decree & Certificate of Finality.</ol>
      <br/>
      <p>
      II. A minor who is an immigrant or a permanent resident abroad, with foreign passport, or whose parents are in the foreign service holding diplomatic/official passport such as Ambassador/General Consul/Consul/Attaches, provided he/she is holding a valid passport and a visa such as dependent visa/identification card which serves as proof that the travel does not constitute child trafficking.</p>
      

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
            href={"Menu"}
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
            src={icons}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>PFAQs</p>
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
          <FaqsCard
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
                item.id === itemNo ?<div key={item.id} dangerouslySetInnerHTML={{ __html: item.content }} /> : null
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
