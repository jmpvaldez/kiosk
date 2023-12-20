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
      <div className="flex flex-row w-full overflow-y-auto custom-scrollbar-hidden">
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
