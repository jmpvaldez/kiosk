import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.png";

export default function FeaturedCard() {
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
          <h1 className="text-orange text-amber-800 font-bold text-4xl mb-12">DSWD CONCLUDES READINESS ASSESSMENT IN PREPARATION FOR THE ARTA REPORT CARD SURVEY</h1>

          <p className="font-bold text-xl">The Department of Social Welfare and Development DSWD, through its Committee on Anti-Red Tape CART, convened its members in the 2nd Quarter Regular Meeting held last 09 June 2023 via Zoom Teleconference.
            Included in the agenda is the preparation of the Department for the conduct of the Anti-Red Tape Authority ARTA Report Card Survey 2.0  or RCS 1st Cycle.
          </p> <br />
          <p className="font-bold text-xl"> In accordance with the provisions of the Republic Act No. 11032, also known as the Ease of Doing Business and Efficient Government Service Delivery Act of 2018, specifically Section  20, all government offices and agencies providing services shall be subjected to RCS which shall be used to obtain feedback on how provisions of the EODB Law are being followed and how agencies are performing in terms of its implementation. </p>
          <br />
          <p className="font-bold text-xl" >This year, the ARTA is set to conduct the implementation of the RCS on selected agencies, including the DSWD, in fulfillment of the objectives of the survey.</p>
        </div>
      </div>
    </div>
  );
}

