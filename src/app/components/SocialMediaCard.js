"use client";
import { useState } from "react";
import qr from "../../../public/images/dswd.png";
import dswd from "../../../public/images/dswd.png";
import Image from "next/image";

export default function SocialMediaCard({
  categories = [
    { id: 1, name: "@DSWD" },
    { id: 2, name: "@DSWD" },
    { id: 3, name: "@DSWD Field Office || Cagayan Valley" },
    { id: 4, name: "@DSWD Field Office || Central Luzon" },
    { id: 5, name: "@DSWD Field Office |V-A CALABARZON" },
    { id: 6, name: "@DSWD Field Office MIMAROPA" },
    { id: 7, name: "@DSWD Field Office V Bicol Region" },
    { id: 8, name: "@DSWD Field Office V| Western Visayas" },
    { id: 9, name: "@DSWD Field Office V||| Eastern Visayas" },
    { id: 10, name: "@DSWD Field Office |X Zamboanga Peninsula" },
    { id: 11, name: "@DSWD Field Office X Northern Mindanao" },
    { id: 12, name: "@DSWD Field Office X| Davao Region" },
    { id: 13, name: "@DSWD Field Office X|| SOCCSKSARGEN" },
    { id: 14, name: "@DSWD Field Office National Capital Region" },
    { id: 15, name: "@DSWD Field Office Caraga" },
    { id: 16, name: "@DSWD Field Office Cordillera Administrative Region" },
    { id: 17, name: "@Pantawid Pamilyang Pilipino" },
    { id: 18, name: "@AICS" },
    { id: 19, name: "@Sustainable Livelihood Program" },
    { id: 20, name: "@DRMB" },
    { id: 21, name: "@KALAHI-CIDSS" },
  ],
}) {
  const [show, setShow] = useState({});

  const toggleShow = (categoryId) => {
    setShow((prevShow) => ({
      ...Object.fromEntries(Object.keys(prevShow).map((key) => [key, false])),
      [categoryId]: !prevShow[categoryId],
    }));
  };

  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id} // Use the id as the unique key
          onClick={() => toggleShow(category.id)} // Use the id for toggling show state
          className="md:mx-4 cursor-pointer"
        >
          <div
            className={`${
              show[category.id] ? "border-gray-200 border-b-2" : ""
            }  py-2 text-lg text-gray-900`}
          >
            {category.name}
          </div>
          <div
            className={` ${
              show[category.id] ? "flex" : "hidden"
            }  flex-row justify-between py-4`}
          >
            <Image
              src={dswd}
              width={200}
              height={100}
              alt="qr"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src={qr}
              width={70}
              height={70}
              alt="qr"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
