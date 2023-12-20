import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProgramsCard({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className="border font-semibold whitespace-norma rounded-3xl mx-auto text-blue-900 mb-5 min-w-1/4 md:w-10/12 md:mb-0 items-center max-h-52 gap-1 px-4 py-2 justify-start  hover:cursor-pointer hover:text-red-900 md:text-lg flex flex-col text-center"
        >
          <Image
            width={65}
            height={65}
            src={category.image}
            alt={category.title}
            className="mt-1"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="whitespace-normal text-sm">{category.title}</p>
          <FaArrowRightLong />
        </Link>
      ))}
    </>
  );
}

ProgramsCard.defaultProps = {
  categories: [
    {
      id: 1,
      title: "Buong Bansa Handa Project",
      description:
        "Programs and services catering to the needs of persons with disabilities.",
      image: icons,
      link: "BuongBansa",
    },
    {
      id: 2,
      title: "O-PLAN Pag-abot Project (REACH OUT) to Individuals and Families in Street Situations",
      description:
        "Programs and services catering to the needs of persons with disabilities.",
      image: icons,
      link: "PagAbot",
    },
    {
      id: 3,
      title: "TARA, BASA! Tutoring Program",
      description:
        "Programs and services catering to the needs of persons with disabilities.",
      image: icons,
      link: "TaraBasa",
    },
    {
      id: 4,
      title: "WALANG GUTOM 2027: Philippine Food Stamp Program",
      description:
        "Programs and services catering to the needs of persons with disabilities.",
      image: icons,
      link: "WalangGutom",
    },
    {
      id: 9,
      title: "Person with Disability",
      description:
        "Programs and services catering to the needs of persons with disabilities.",
      image: "/images/pwd.png",
      link: "Pwd",
    },
    {
      id: 10,
      title: "Senior Citizens",
      description: "Support and assistance programs for senior citizens.",
      image: "/images/senior.png",
      link: "Senior",
    },
    {
      id: 11,
      title: "Women (Solo Parent)",
      description:
        "Initiatives focused on the empowerment and well-being of women.",
        image: "/images/women.png",
        link: "Women",
    },
    {
      id: 12,
      title: "Children",
      description:
        "Services and activities aimed at the welfare and development of children.",
        image: "/images/children.png",
        link: "Children",
    },
    {
      id: 13,
      title: "General Public",
      description:
        "Public programs and services accessible to the general population.",
        image: "/images/genpublic.png",
        link: "GeneralPublic",
    },
    {
      id: 14,
      title: "Provision of Assistance under the Recovery and Reintegration Program for Trafficked Persons",
      description:
        "Guidance and assistance for minors traveling alone or with someone other than their parents.",
        image: "/images/travelclearance.png",
        link: "RRPTP",
    },
    {
      id: 15,
      title: "Registration, Licensing and Accreditation of SWDAs and SPs",
      description:
        "Procedures and support for social welfare and development agencies and service providers.",
        image: "/images/rlaswda.png",
        link: "Rla",
    },
    {
      id: 16,
      title: "Assistance to Individuals in Crisis Situations (AICS)",
      description:
        "Emergency assistance and support for individuals facing crisis situations.",
        image: "/images/aics.png",
        link: "Aics",
    },
    {
      id: 17,
      title: "Pantawid Pamilyang Pilipino Program (4Ps)",
      description:
        "Conditional cash transfer program aimed at improving the health, nutrition, and education of poor households.",
        image: "/images/4ps.png",
        link: "Pantawid",
    },
    {
      id: 18,
      title: "Sustainable Livelihood Program (SLP)",
      description:
        "Initiatives promoting sustainable livelihoods for marginalized individuals and communities.",
        image: "/images/slp.png",
        link: "Slp",
    },
    {
      id: 19,
      title:
        "Implementation of Government Internship Program (GIP) to Central office and Field Offices",
      description:
        "The Government Internship Program is part of the Kabataan 2000 program of the government.",
        image: "/images/children.png",
        link: "Gip",
    },
  ],
};
