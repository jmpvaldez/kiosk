import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.png";

export default function TaraBasaCard() {
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
          <h1 className="text-orange text-amber-800 font-bold text-4xl mb-12">TARA, BASA! Tutoring Program</h1>
          <p className="font-bold text-xl">
          The Tara, BASA! Tutoring Program is a social welfare and development model of intervention wherein college students (cash for work grantees) shall be capacitated and deployed as learning facilitators who will teach non/struggling readers how to read. Likewise, parenting sessions will be conducted by the college students Youth Development Workers to capacitate the parents or parents substitute on the care and protection of children and guide them to be "Nanay-Tatay Teacher".
          </p>
        </div>
      </div>
    </div>
  );
}

