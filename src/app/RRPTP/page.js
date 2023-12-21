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
import RRPTPCard from "../components/RRPTPCard";

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
      The RRPTP is a comprehensive program that ensures adequate recovery and reintegration services provided to trafficked persons. It utilizes a multi-sectoral approach and delivers a complete package of services that will enhance the psychosocial, social, and economic needs of the clients, the families, and the communities where the trafficked persons will be eventually reintegrated. It also improves community-based systems and mechanisms that ensure the recovery of the victim-survivors and prevents other family and community members from becoming victims of trafficking. 
      `,
    },
    {
      id: 2,
      title:
        "School ID",
      content: `
      Case Management<br><br>

1. Travel documents (for Repatriated TIP Victims)<br>
2. Valid ID<br>
3. Social Case Study Report<br><br>

Medical Assistance<br><br>

1. Clinical Abstract / Medical Certificate with signature and license number of the attending physician (issued within three months)<br>
2.  Hospital Bill (for payment of hospital bill) or Prescription (for medicines) or Laboratory requests (for procedures). <br>
3. Barangay Certificate and Valid ID for the client <br><br>

Educational Assistance<br><br>

1. School registration and/ or certificate of enrolment <br>
2. Statement of Account for tertiary education <br>
3. Valid school ID Valid ID of the parent/ guardian<br><br>

Skills Training<br><br>

1. Official receipt from the training school (TESDA/ CHED accredited training school. <br>
2. Valid school ID <br><br>

Financial Assistance for Employment<br><br>

1. Contract of Employment or any similar document which indicates that they are hired  <br>
2. Valid ID <br><br>

Financial Assistance for Livelihood<br><br>

1. Result of the Handa Ka Na Bang Magnegosyo? The client score’s must be 75 and above in order to be eligible for the livelihood Program, to determine the preparedness of the client to start their business. Re-assessment will be conducted to clients who will have a score of 74 and below or they may be considered to avail financial assistance for employment. <br>
2. Project Proposal. They may write using their vernacular or local dialect. They may be assisted by the social worker in preparation of the said proposal. <br>
3. Valid ID <br>
4. Social Case Study Report <br><br>

Logistical Support During and Post-Recue Operation of Victims Survivors of Trafficking<br><br>

No documents needed.<br><br>

Provision of Temporary Shelter<br><br>

1. Medical Certificate<br>
2. Case Summary<br>
3. Referral Letter from the Social Worker<br><br>

Support for Victim-survivors/Witness and Transportation Assistance<br><br>

1. Valid ID <br>
2. Social Case Study Report <br>
Official receipt for the client’s board and lodging<br>

      `,
    },
    {
      id: 3,
      title:
        "School ID",
      content: `
      1. Victim-survivor of trafficking<br>
2. Families of the victim-survivor of trafficking.<br>
3. Witnesses of cases of human trafficking.<br>
4. Communities with incidence of human trafficking.<br>

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
            src={"/images/travelclearance.png"}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>Provision of Assistance under the Recovery and Reintegration Program for Trafficked Persons</p>
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
      {/*   <div className="flex flex-row w-full overflow-y-auto custom-scrollbar-hidden">
        <div
          className={`${
            openDiv ? "w-full " : "lg:w-1/3 "
          } flex flex-col gap-2 mt-5 md:mt-2  `}
        >
          <RRPTPCard
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
              
               item.id === itemNo ?  <div key={item.id} dangerouslySetInnerHTML={{ __html: item.content }} /> : null
              )}
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full mt-24" id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
            <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> Description</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />

            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">The RRPTP is a comprehensive program that ensures adequate recovery and reintegration services provided to trafficked persons. It utilizes a multi-sectoral approach and delivers a complete package of services that will enhance the psychosocial, social, and economic needs of the clients, the families, and the communities where the trafficked persons will be eventually reintegrated. It also improves community-based systems and mechanisms that ensure the recovery of the victim-survivors and prevents other family and community members from becoming victims of trafficking.</p>
            {/*   <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        */}
            {/* <p className="mb-2 text-gray-500 dark:text-gray-400">The direct provision of this assistance aims to mitigate the impact of HIV and AIDS on affected individuals and their families, assuring their well-being and contributing to the overall response of the national government to HIV and AIDS.</p>
          */} </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
            <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>What are the requirements?</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>Case Management</li>
              <li>A- Travel documents (for Repatriated TIP Victims)</li>
              <li>B-  Valid ID</li>
              <li>C-  Social Case Study Report</li>
            </ul>

            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>Medical Assistance</li>
              <li>A-  Clinical Abstract / Medical Certificate with signature and license number of the attending physician (issued within three months)</li>
              <li>B - Hospital Bill (for payment of hospital bill) or Prescription (for medicines) or Laboratory requests (for procedures).</li>
              <li>D- Barangay Certificate and Valid ID for the client</li>
            </ul>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>Educational Assistance</li>
              <li>A-  School registration and/ or certificate of enrolment</li>
              <li>B- Statement of Account for tertiary education</li>
              <li>C- Valid school ID Valid ID of the parent/ guardian</li>
            </ul>

            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>Skills Training</li>
              <li>A- Official receipt from the training school TESDA/ CHED accredited training school.</li>
              <li>B- Valid school ID</li>
            </ul>


            {/* <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
           */}</div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
            <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> Who can avail?</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
           {/*  <p className="mb-2 text-gray-500 dark:text-gray-400">People Living with HIV (PLHIV) and their affected families</p> */}
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>A- Victim-survivor of trafficking</li>
              <li>B- Families of the victim-survivor of trafficking.</li>
              <li>C- Witnesses of cases of human trafficking.</li>
              <li>D- Communities with incidence of human trafficking.</li>
            </ul>
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
