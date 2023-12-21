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
      Solo parents are those who are left alone with the responsibility of rearing their children regardless of marital status and based on National Statistics Office (NSO) data, there are about 14 million solo parents in the Philippines. The increasing number of solo parents has led the national government to pass Republic Act 8972, or the Solo Parents’ Welfare Act of 2000, which was promulgated on November 7, 2000. While being a solo parent can be difficult, the passage of RA 8972 has somehow made it rewarding. RA 8972 was enacted to provide a comprehensive program of services for solo parents and their children. This law covers fathers or mothers who raise their children by themselves, either because of the death of ,a spouse, abandonment, separation or even those who have children as a result of rape. DSWD is mandated to protect and promote the welfare of the disadvantaged group including the solo parents, provide technical assistance to partner stakeholders (National Government, Local Government Unit, and Civil Society Organizations). Any solo parent whose income in the place of domicile falls equal to or below the poverty threshold as set by the NSCB and subject to the assessment of the duly 145 appointed or designated social worker in the area shall be eligible for assistance: Provided, however, that any solo parent whose income is above the poverty threshold shall enjoy the benefits mentioned in Sections 16, 17, 18, 19, 20, 21 and 23 of these Rules
      `,
    },
    {
      id: 2,
      title:
        "School ID",
      content: `
      Transportation Assistance: <br>
      -Valid Solo parent identification card of the client/ person to be interviewed; <br>
-Police Blotter/ Police Certification (for victims of pickpockets, illegal recruitment, etc.);  <br>
-Barangay Certificate/ Certificate of Residency<br>
MEDICAL ASSISTANCE FOR HOSPITAL BILL <br>
-Valid Solo parent identification card of the client/ person to be interviewed <br>
-Medical Certificate/Clinical Abstract complete with name, license number and signature of the Physician issued within three months (Original / Certified true copy) <br>
-Hospital bill / Statement of Account (outstanding balance) with name and signature <br>
-Social Case Study Report/ Case Summary<br>
-Barangay Certificate/ Certificate of Residency <br>
MEDICAL ASSISTANCE FOR MEDICINE/ ASSISTIVE DEVICE<br>
-Medical Certificate/Clinical Abstract complete with name, license number and signature of the Physician issued within three months (Original / Certified true copy)<br>
-Prescription with date of issuance, complete name, license number and signature of the Physician issued within three months. <br>
-Valid Solo parent identification card  <br>
-Social Case Study Report/ Case Summary<br>
-Barangay Certificate/ Certificate of Residency <br>
MEDICAL ASSISTANCE FOR LABORATORY REQUESTS <br>
-Valid Solo parent identification card of the client/ person to be interviewed  <br>
-Medical Certificate/Clinical Abstract complete with name, license number and signature of the Physician issued within three months (Original / Certified true copy)<br>
-Laboratory Requests with name, license number and signature of the Physician<br>
-Social Case Study Report/ Case Summary <br>
-Barangay Certificate/ Certificate of Residency   <br>
BURIAL ASSISTANCE FOR FUNERAL BILL<br>
-Valid Solo parent identification card of the client/ person to be interviewed <br>
-Registered Death Certificate/ Certification from the Tribal Chieftain (Original / certified true copy)  <br>
- Funeral Contract <br>
-Barangay Certificate/ Certificate of Residency  <br>
BURIAL ASSISTANCE FOR TRANSFER OF CADAVER<br>
-Valid Solo parent identification card of the client/ person to be interviewed <br>
-Registered Death Certificate/ Certification from the Tribal Chieftain (Original / certified true copy)  <br>
-Funeral Contract <br>
-Transfer Permit <br>
-Barangay certificate/ certificate of Residency<br>
EDUCATIONAL ASSISTANCE<br>
-Validated School ID and Valid Solo parent I.D of the Parent/guardian<br>
-Enrolment Assessment Form or Certificate of Enrolment or Registration<br>
-Statement of Account for college students, when available. This may not available to State Universities<br>
-Barangay Certificate/Certificate of Residency or Certificate of Indigency  <br>
FOOD ASSISTANCE FOR INDIVIDUAL AND FAMILIES ENDORSED IN GROUPS<br>
-Valid Solo parent identification card of the client/ person to be interviewed<br>
-Project proposal and Food distribution List(CRCF client) <br>
-Barangay certificate/ certificate of Residency<br>
CASH ASSISTANCE FOR OTHER SUPPORT SERVICES<br>
-Validated School ID and Valid Solo parent ID of the Parent/guardian<br>
-Depending on the circumstances: <br>
For Fire Victims: Police Report/ Bureau of Fire Protection Report from the Bureau of Fire <br>
For Distressed OFWs: Passport, Travel Document/s, certification from OWWA or the Barangay<br>
For Rescued Client: Certification from a social worker or Case manager from rescued clients. For victims of Online Sexual Exploitation: Police Blotter and social worker’s certification for the victims of online sexual exploitation of children <br>
For Locally stranded individuals (LSI): LSI without valid IDs, the Medical Certificate or the Travel Authority issued by the Philippine National Police will suffice and be accepted to prove his/her identity<br>
For all other incidents: Barangay Certificate of Residency or Certificate of Indigency or Certificate of the Client is in Need of Assistance as well as other documents from legal authorities/regulating agencies, as may be applicable<br>
PROVISION OF PPE <br>
-Valid Solo parent identification card of the client/ person to be interviewed<br>
-RT-PCR* Test Result, if applicable; *Reverse Transcription - Polymerase Chain Reaction <br>
      `,
    },
    {
      id: 3,
      title:
        "School ID",
      content: `
      ELIGIBLE SOLO PARENTS 
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
            href={"Aics"}
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
            src={"/images/women.png"}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>Women (Solo Parent)</p>
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
      {/*  <div className="flex flex-row w-full overflow-y-auto custom-scrollbar-hidden">
        <div
          className={`${
            openDiv ? "w-full " : "lg:w-1/3 "
          } flex flex-col gap-2 mt-5 md:mt-2  `}
        >
          <WomenCard
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
            <p className="mb-2 text-gray-500 dark:text-gray-400">Solo parents are those who are left alone with the responsibility of rearing their children regardless of marital status and based on National Statistics Office (NSO) data, there are about 14 million solo parents in the Philippines. The increasing number of solo parents has led the national government to pass Republic Act 8972, or the Solo Parents’ Welfare Act of 2000, which was promulgated on November 7, 2000. While being a solo parent can be difficult, the passage of RA 8972 has somehow made it rewarding. RA 8972 was enacted to provide a comprehensive program of services for solo parents and their children. This law covers fathers or mothers who raise their children by themselves, either because of the death of ,a spouse, abandonment, separation or even those who have children as a result of rape. DSWD is mandated to protect and promote the welfare of the disadvantaged group including the solo parents, provide technical assistance to partner stakeholders (National Government, Local Government Unit, and Civil Society Organizations). Any solo parent whose income in the place of domicile falls equal to or below the poverty threshold as set by the NSCB and subject to the assessment of the duly 145 appointed or designated social worker in the area shall be eligible for assistance: Provided, however, that any solo parent whose income is above the poverty threshold shall enjoy the benefits mentioned in Sections 16, 17, 18, 19, 20, 21 and 23 of these Rules</p>
            {/*   <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        */}   </div>
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
            <h2>Transportation Assistance:</h2>
            <ol>
              <li>Valid Solo parent identification card of the client/person to be interviewed;</li>
              <li>Police Blotter/Police Certification (for victims of pickpockets, illegal recruitment, etc.);</li>
              <li>Barangay Certificate/Certificate of Residency</li>
            </ol>

            <h2>Medical Assistance for Hospital Bill:</h2>
            <ol>
              <li>Valid Solo parent identification card of the client/person to be interviewed;</li>
              <li>Medical Certificate/Clinical Abstract complete with name, license number, and signature of the Physician
                issued within three months (Original/Certified true copy);</li>
              <li>Hospital bill/Statement of Account (outstanding balance) with name and signature;</li>
              <li>Social Case Study Report/Case Summary;</li>
              <li>Barangay Certificate/Certificate of Residency</li>
            </ol>

            <h2>Medical Assistance for Medicine/Assistive Device:</h2>
            <ol>
              <li>Medical Certificate/Clinical Abstract complete with name, license number, and signature of the Physician
                issued within three months (Original/Certified true copy);</li>
              <li>Prescription with date of issuance, complete name, license number, and signature of the Physician issued
                within three months;</li>
              <li>Valid Solo parent identification card;</li>
              <li>Social Case Study Report/Case Summary;</li>
              <li>Barangay Certificate/Certificate of Residency</li>
            </ol>

            <h2>Medical Assistance for Laboratory Requests:</h2>
            <ol>
              <li>Valid Solo parent identification card of the client/person to be interviewed;</li>
              <li>Medical Certificate/Clinical Abstract complete with name, license number, and signature of the Physician
                issued within three months (Original/Certified true copy);</li>
              <li>Laboratory Requests with name, license number, and signature of the Physician;</li>
              <li>Social Case Study Report/Case Summary;</li>
              <li>Barangay Certificate/Certificate of Residency</li>
            </ol>

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
            <p className="mb-2 text-gray-500 dark:text-gray-400">ELIGIBLE SOLO PARENTS</p>
            {/* <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>A- 60 years old and above indigent senior citizens who are frail, sickly, bedridden, or with a disability</li>
              <li>B- No permanent source of income</li>
              <li>C- No regular support from family or relatives</li>
              <li>D- No pension from GSIS, SSS, PVAO, and other insurance agencies</li>
            </ul> */}
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
