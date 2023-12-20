import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.png";

export default function BuongBansaCard() {
  return (
    <div className=" bg-white rounded-lg mt-12 md:mt-2">
      <div className="flex flex-row ">
        {/* <Link href="#">
          <Image
            src={correct}
            width={400}
            height={200}
            objectFit="cover"
            alt="image"
          />
        </Link> */}
        <div className=" p-1 mb-0 font-normal text-black  bottom-0 w-full">
          <h1 className="text-orange text-amber-800 font-bold text-4xl mb-12">Buong Bansa Handa Project</h1>
          <p className="font-bold text-xl">
          The Buong Bansa Handa Project aims to establish two parallel supply chain mechanisms for disaster preparedness and response. These mechanisms are designed to enhance the capacity of the DSWD in meeting the needs of affected families in various disaster-stricken areas.<br/><br/>
          <ol>
            <li>1. The first mechanism focuses on the National and Local Government Driven Supply Chain. It involves improving production capacities and processes within the government system. This aims to enhance the DSWD's ability to respond effectively by ensuring efficient production, procurement, and distribution of relief goods and services from the National Resource Operations Center (NROC) in Pasay, Visayas Disaster Resource Center (VDRC) in Cebu and across the 16 Field Offices managing warehouses and storage facilities.<br/><br/></li>
            <li>2. The second mechanism is the Private Sector Driven Supply Chain. This involves forging partnerships with established large and small groceries, supermarkets, manufacturers, and distributors. By collaborating with these private sector entities, the DSWD aims to leverage their technical expertise, resources, and nationwide presence.<br/></li>
          </ol>
          </p>
        </div>
      </div>
    </div>
  );
}

