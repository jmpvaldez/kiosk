import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AicsCard({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className="border max-h-52 hover:bg-teal-100 rounded-3xl mx-auto text-gray-900 mb-5 min-w-1/4 md:w-10/12 md:mb-0 items-center gap-1 py-4  hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col justify-center text-center"
        >
          <Image
            width={65}
            height={65}
            src={category.image}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="whitespace-normal text-sm">{category.title}</p>
          <FaArrowRightLong />

          {categories.id == 3 ?   <iframe
                title="Embedded Content"
                width="900"
                height="2000"
                src={"https://docs.google.com/document/d/1fkU9p_leLZKtnducs1CfM1on9ULk4aSp/edit?usp=sharing&ouid=113249402038119098049&rtpof=true&sd=true"}
                allowFullScreen
              > 
              </iframe> : <></>}
        
        </Link>
      ))}
    </>
  );
}

AicsCard.defaultProps = {
  categories: [
    {
      id: 21,
      title: "Educational Assistance",
      description:
        "Support programs providing financial assistance for education-related expenses.",
        image: "/images/educational.png",
        link: "EducAssistance",
    },
    {
      id: 22,
      title: "Medical Assistance",
      description:
        "Assistance programs covering medical expenses and healthcare needs.",
        image: "/images/medical.png",
        link: "MedicalAssistance",
    },
    {
      id: 23,
      title: "Burial Assistance",
      description:
        "Support for funeral and burial expenses during times of bereavement.",
        image: "/images/burial.png",
        link: "BurialAssistance",
    },
    {
      id: 24,
      title: "Food Assistance",
      description:
        "Programs providing food support to individuals and families in need.",
        image: "/images/food.png",
        link: "FoodAssistance",
    },
    {
      id: 25,
      title: "Transportation Assistance",
      description:
        "Assistance for transportation expenses, facilitating travel for various purposes.",
        image: "/images/transportation.png",
        link: "TransportAssistance",
    },
    {
      id: 26,
      title: "Psychological Assistance",
      description: "Support services focusing on mental health and well-being.",
      image: "/images/psychological.png",
      link: "PsychologicalAssistance",
    },
    {
      id: 27,
      title: "Cash Relief Assistance",
      description:
        "Financial aid programs offering direct cash relief to those in need.",
        image: "/images/cash.png",
        link: "CashReliefAssistance",
    },
    {
      id: 28,
      title: "Referral",
      description:
        "Guidance and assistance in connecting individuals with relevant services and resources.",
        image: "/images/referral.png",
        link: "ReferralAssistance",
    },
  ],
};
