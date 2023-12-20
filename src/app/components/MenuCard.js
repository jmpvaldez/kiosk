import React from "react";
import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function MenuCard({ categories }) {
  const initialPosition = { x: -100, opacity: 0 };
  const animatePosition = { x: 0, opacity: 1 };

  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className="card border-b-2 text-gray-800  items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-bold font-semibold md:text-2xl flex flex-row"
        >
          <Image
            width={80}
            height={80}
            src={category.image}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>{category.title}</p>
        </Link>
      ))}
    </>
  );
}
MenuCard.defaultProps = {
  categories: [
    {
      id: 1,
      title: "Program Categories",
      description: "Explore various program categories for our services.",
      link: "Programs",
      image: "/images/programs.png",
    },
    {
      id: 2,
      title: "Frequently Asked Questions (FAQs)",
      description:
        "Get answers to common questions about our programs and services.",
      link: "Faqs",
      image: "/images/Faqs.png",
    },
    {
      id: 3,
      title: "Featured Stories",
      description:
        "Read our featured stories and stay updated with inspiring content.",
      link: "Featured",
      image: "/images/Featured.png",
    },
    /* {
      id: 4,
      title: "Service Listings",
      description:
        "Find detailed listings of the services we offer to assist you.",
      link: "Service",
      image: "/images/Service.png",
    },
    {
      id: 5,
      title: "Emergency Information",
      description:
        "Access emergency information to stay prepared and informed.",
      link: "Emergency",
      image: "/images/Emergency.png",
    }, */
    {
      id: 6,
      title: "Directory",
      description:
        "Connect with us on social media for the latest updates and news.",
      link: "SocialMedia",
      image: "/images/SocialMedia.png",
    },
    {
      id: 7,
      title: "Promotions and News",
      description:
        "Stay informed about promotions, events, and news from our organization.",
      link: "News",
      image: "/images/News.png",
    },
    {
      id: 8,
      title: "CART & ARTU Organizational Structure",
      description:
        "Find resources and support to address your needs and concerns.",
      link: "Support",
      image: "/images/Support.png",
    },
  ],
};
