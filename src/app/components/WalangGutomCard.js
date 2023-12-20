import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.png";

export default function WalangGutomCard() {
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
          <h1 className="text-orange text-amber-800 font-bold text-4xl mb-12">WALANG GUTOM 2027: Philippine Food Stamp Program</h1>
          <p className="font-bold text-xl">
          The WALANG GUTOM 2027: Food provision through Strategic Transfer and Alternative Measures Program (Food STAMP) is one of the new DSWD Flagship Programs to decrease incidence of involuntary hunger experienced by low-income households and make them productive citizens of the country. Through a whole-of-nation approach, the program aims to provide monetary-based assistance in the form of an Electronic Benefit Transfer (EBT) card that will be loaded with food credits amounting to Php 3,000 to purchase a select list of food commodities from partner merchant store/s. The program highlights a mechanism for the delivery of social protection interventions through the use of digital platforms to access food.
          </p>
        </div>
      </div>
    </div>
  );
}

